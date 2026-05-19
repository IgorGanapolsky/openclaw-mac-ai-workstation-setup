#!/usr/bin/env node
// PostHog 24h funnel reader for thumbgate.ai
// -------------------------------------------------------------------
// Why this file exists:
//   ThumbGate issue #2174 (P0): we have no daily visibility into where
//   visitors drop off before they hit Stripe checkout. This script pulls
//   the last 24h of pageviews + Stripe-click events from PostHog and
//   writes a markdown report we commit nightly.
//
// API surface used (PostHog cloud, 2026 stable):
//   - GET  {host}/api/projects/                              -> resolve project id from token
//   - POST {host}/api/projects/{project_id}/query/           -> HogQL query (events table)
//
// Deprecation notes (verified 2026-05):
//   - The legacy `/api/projects/{id}/insights/funnel/` endpoint still
//     responds but is in maintenance-only mode; PostHog docs steer new
//     integrations to the HogQL `/query/` endpoint. We use HogQL.
//   - The very old `/api/event/` listing endpoint is deprecated and
//     scheduled for removal; we do not call it.
//
// Safety:
//   - Errors clearly and exits non-zero if POSTHOG_PERSONAL_API_KEY is
//     missing. Does NOT write any files in that case.
//   - The key value is never logged. We only log `key=<set>` / `<missing>`.
//
// Env vars:
//   POSTHOG_PERSONAL_API_KEY  (required) personal API key, scope: read
//   POSTHOG_HOST              (optional) default https://app.posthog.com
//   POSTHOG_PROJECT_ID        (optional) numeric project id; if absent we
//                             resolve via /api/projects/ and match the
//                             project whose api_token matches the public
//                             write key for thumbgate.ai
//                             (phc_cpuhUFoXKeG15GoZBwwEZJToeRX07FRZI4Ty0WCW2da).

import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const THUMBGATE_PUBLIC_KEY = 'phc_cpuhUFoXKeG15GoZBwwEZJToeRX07FRZI4Ty0WCW2da';
const HOST = (process.env.POSTHOG_HOST || 'https://app.posthog.com').replace(/\/+$/, '');
const API_KEY = process.env.POSTHOG_PERSONAL_API_KEY;
const PROJECT_ID_ENV = process.env.POSTHOG_PROJECT_ID;

function fail(msg, code = 1) {
  process.stderr.write(`ERROR: ${msg}\n`);
  process.exit(code);
}

if (!API_KEY) {
  fail(
    'POSTHOG_PERSONAL_API_KEY is not set. Refusing to run.\n' +
      '       Set it via: export POSTHOG_PERSONAL_API_KEY=phx_...\n' +
      '       (Personal API key with project read scope.) ' +
      'No files written.'
  );
}

process.stdout.write(`posthog-funnel-read: host=${HOST} key=<set> project=${PROJECT_ID_ENV || '<resolve>'}\n`);

async function ph(pathname, init = {}) {
  const url = `${HOST}${pathname}`;
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
    ...(init.headers || {}),
  };
  const res = await fetch(url, { ...init, headers });
  if (!res.ok) {
    const body = await res.text().catch(() => '<no body>');
    // body may contain useful error info but never echo Authorization headers
    fail(`PostHog API ${init.method || 'GET'} ${pathname} -> ${res.status}: ${body.slice(0, 400)}`);
  }
  return res.json();
}

async function resolveProjectId() {
  if (PROJECT_ID_ENV) return PROJECT_ID_ENV;
  const data = await ph('/api/projects/?limit=200');
  const results = data.results || data;
  const match = (results || []).find((p) => p.api_token === THUMBGATE_PUBLIC_KEY);
  if (!match) {
    fail(
      `Could not find project with api_token=${THUMBGATE_PUBLIC_KEY} in /api/projects/. ` +
        'Set POSTHOG_PROJECT_ID explicitly.'
    );
  }
  return match.id;
}

async function hogql(projectId, query) {
  return ph(`/api/projects/${projectId}/query/`, {
    method: 'POST',
    body: JSON.stringify({ query: { kind: 'HogQLQuery', query } }),
  });
}

function rowsOf(res) {
  // HogQLQuery result shape: { results: [[...], [...]], columns: [...], types: [...] }
  return Array.isArray(res?.results) ? res.results : [];
}

async function main() {
  const projectId = await resolveProjectId();
  process.stdout.write(`posthog-funnel-read: resolved project_id=${projectId}\n`);

  // 1. Top 10 entry pages (first $pageview per session) in last 24h
  const entryPagesQ = `
    SELECT entry_url, count() AS pageviews
    FROM (
      SELECT
        any(properties.$current_url) OVER (PARTITION BY properties.$session_id ORDER BY timestamp ASC ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS entry_url,
        row_number() OVER (PARTITION BY properties.$session_id ORDER BY timestamp ASC) AS rn
      FROM events
      WHERE event = '$pageview'
        AND timestamp >= now() - INTERVAL 24 HOUR
        AND properties.$session_id IS NOT NULL
    )
    WHERE rn = 1
    GROUP BY entry_url
    ORDER BY pageviews DESC
    LIMIT 10
  `;

  // 2. Drop-off URL: most-common LAST $pageview in a session that did NOT
  //    contain a Stripe checkout click.
  //    Convention used here: a Stripe checkout click is either
  //      event = 'stripe_checkout_click'
  //    or  event = '$autocapture' AND properties.$el_text contains the word
  //      "checkout" AND properties.$current_url contains "stripe" — but
  //      to keep this dependable we trust 'stripe_checkout_click' first.
  const dropoffQ = `
    WITH sessions_with_stripe AS (
      SELECT DISTINCT properties.$session_id AS sid
      FROM events
      WHERE timestamp >= now() - INTERVAL 24 HOUR
        AND (event = 'stripe_checkout_click'
             OR (event = '$autocapture' AND lower(toString(properties.$el_text)) LIKE '%checkout%'))
    ),
    last_page AS (
      SELECT
        properties.$session_id AS sid,
        argMax(properties.$current_url, timestamp) AS last_url
      FROM events
      WHERE event = '$pageview'
        AND timestamp >= now() - INTERVAL 24 HOUR
        AND properties.$session_id IS NOT NULL
      GROUP BY properties.$session_id
    )
    SELECT last_url, count() AS sessions
    FROM last_page
    WHERE sid NOT IN (SELECT sid FROM sessions_with_stripe)
    GROUP BY last_url
    ORDER BY sessions DESC
    LIMIT 10
  `;

  // 3. Aggregates: pageviews, unique visitors, stripe-click count
  const totalsQ = `
    SELECT
      countIf(event = '$pageview') AS pageviews,
      uniq(if(event = '$pageview', properties.distinct_id, NULL)) AS uniques,
      countIf(event = 'stripe_checkout_click'
        OR (event = '$autocapture' AND lower(toString(properties.$el_text)) LIKE '%checkout%')
      ) AS stripe_clicks
    FROM events
    WHERE timestamp >= now() - INTERVAL 24 HOUR
  `;

  const [entryRes, dropRes, totalsRes] = await Promise.all([
    hogql(projectId, entryPagesQ),
    hogql(projectId, dropoffQ),
    hogql(projectId, totalsQ),
  ]);

  const entryPages = rowsOf(entryRes).map(([url, n]) => ({ url, pageviews: Number(n) }));
  const dropoffRows = rowsOf(dropRes).map(([url, n]) => ({ url, sessions: Number(n) }));
  const totals = rowsOf(totalsRes)[0] || [0, 0, 0];
  const [pageviews, uniques, stripeClicks] = totals.map((v) => Number(v) || 0);
  const topDropoff = dropoffRows[0] || { url: '(none)', sessions: 0 };

  const today = new Date().toISOString().slice(0, 10);
  const reportDir = path.join(REPO_ROOT, 'reports', 'posthog');
  mkdirSync(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, `${today}.md`);

  const lines = [];
  lines.push(`# PostHog 24h funnel — thumbgate.ai`);
  lines.push('');
  lines.push(`_Generated: ${new Date().toISOString()} (UTC)_`);
  lines.push(`_Project ID: ${projectId} • Host: ${HOST}_`);
  lines.push('');
  lines.push('## Totals (last 24h)');
  lines.push('');
  lines.push(`- Pageviews: **${pageviews.toLocaleString()}**`);
  lines.push(`- Unique visitors: **${uniques.toLocaleString()}**`);
  lines.push(`- Stripe checkout clicks: **${stripeClicks.toLocaleString()}**`);
  const cvr = pageviews > 0 ? ((stripeClicks / pageviews) * 100).toFixed(2) : '0.00';
  lines.push(`- Click-through rate (clicks/pageviews): **${cvr}%**`);
  lines.push('');
  lines.push('## Top 10 entry pages');
  lines.push('');
  if (entryPages.length === 0) {
    lines.push('_No entry pageviews in window._');
  } else {
    lines.push('| Rank | Entry URL | Pageviews |');
    lines.push('|---:|:---|---:|');
    entryPages.forEach((p, i) => {
      lines.push(`| ${i + 1} | ${p.url || '(unknown)'} | ${p.pageviews.toLocaleString()} |`);
    });
  }
  lines.push('');
  lines.push('## Top drop-off URLs');
  lines.push('');
  lines.push('(Most-common LAST page in sessions that did NOT click Stripe checkout.)');
  lines.push('');
  if (dropoffRows.length === 0) {
    lines.push('_No drop-off sessions recorded._');
  } else {
    lines.push('| Rank | Last URL | Sessions |');
    lines.push('|---:|:---|---:|');
    dropoffRows.forEach((p, i) => {
      lines.push(`| ${i + 1} | ${p.url || '(unknown)'} | ${p.sessions.toLocaleString()} |`);
    });
  }
  lines.push('');
  lines.push(`_Top drop-off page: **${topDropoff.url}** (${topDropoff.sessions} sessions)._`);
  lines.push('');

  writeFileSync(reportPath, lines.join('\n'));
  process.stdout.write(`posthog-funnel-read: wrote ${path.relative(REPO_ROOT, reportPath)}\n`);

  // Append/replace summary block in current-revenue-state.md
  const crsPath = path.join(REPO_ROOT, 'current-revenue-state.md');
  const header = '## PostHog 24h funnel (auto-updated)';
  const summary = [
    header,
    '',
    `_Last updated: ${new Date().toISOString()} • window: last 24h • project ${projectId}._`,
    '',
    `In the last 24 hours thumbgate.ai saw **${pageviews.toLocaleString()} pageviews** from ` +
      `**${uniques.toLocaleString()} unique visitors** and **${stripeClicks.toLocaleString()} Stripe ` +
      `checkout clicks** (CTR ${cvr}%). The most-common drop-off page was ` +
      `**${topDropoff.url}** with ${topDropoff.sessions} abandoning sessions. Top entry page: ` +
      `**${entryPages[0]?.url || '(none)'}** (${entryPages[0]?.pageviews || 0} pageviews). ` +
      `Full report: \`reports/posthog/${today}.md\`.`,
    '',
  ].join('\n');

  let crs = existsSync(crsPath) ? readFileSync(crsPath, 'utf8') : '';
  if (crs.includes(header)) {
    // Replace existing block (header through next H2 or EOF)
    crs = crs.replace(
      new RegExp(`${header}[\\s\\S]*?(?=\\n##\\s|$)`, 'm'),
      summary.trimEnd() + '\n'
    );
  } else {
    if (crs.length && !crs.endsWith('\n')) crs += '\n';
    if (crs.length && !crs.endsWith('\n\n')) crs += '\n';
    crs += summary;
  }
  writeFileSync(crsPath, crs);
  process.stdout.write(`posthog-funnel-read: updated current-revenue-state.md\n`);
}

main().catch((err) => {
  fail(`unhandled: ${err?.message || err}`);
});
