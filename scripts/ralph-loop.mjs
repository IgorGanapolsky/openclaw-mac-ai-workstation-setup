#!/usr/bin/env node
// Discovery-only revenue loop. Runs in CI on a daily cron.
//
// Hard rules:
//   - Does NOT post any comments to any repo.
//   - Does NOT modify lead-log.md (that's a human-curated artifact).
//   - Writes drafts to outbound/drafts/<date>/ for human review.
//   - Writes a summary to reports/gtm/<date>/discovery.md.
//
// Replaces an earlier templated-pitch version that posted Hormozi/Voss-style
// generic CTAs cross-repo. That pattern conflicts with outreach.md's anti-
// templating rule (documented 0/19 conversion on templated batches) and
// fabricates "VERIFIED PITCH" status without verification.

import { execSync } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const date = new Date().toISOString().split('T')[0];
const ghToken = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
if (!ghToken) {
  console.error('GH_TOKEN or GITHUB_TOKEN required');
  process.exit(1);
}

function gh(args) {
  try {
    return execSync(`gh ${args}`, {
      encoding: 'utf8',
      env: { ...process.env, GH_TOKEN: ghToken },
      timeout: 30000,
    });
  } catch (e) {
    console.error(`gh ${args} failed:`, e.message?.slice(0, 200));
    return null;
  }
}

const TARGETS = [
  {
    repo: 'openai/codex',
    query: 'Computer Use macOS',
    landing: 'troubleshooting.html',
    utm_source: 'codex-issue',
  },
  {
    repo: 'anthropics/claude-code',
    query: 'channels discord plugin',
    landing: 'claude-code-channels-not-working.html',
    utm_source: 'channels-issue',
  },
];

const leadLog = (() => { try { return readFileSync('lead-log.md', 'utf8'); } catch { return ''; } })();

// Dedup against TWO sources:
//   1. Issue URLs in lead-log.md (issues the human has already posted on)
//   2. Filenames in git log for outbound/drafts/** (issues previously drafted
//      by the bot — these may have been merged to main, then a lead-log rewrite
//      by another agent dropped the row, leaving the issue eligible for
//      re-discovery; the git history is the durable truth)
const allCandidates = [];
const seenInLog = new Set();
for (const m of leadLog.matchAll(/github\.com\/([\w.-]+\/[\w.-]+)\/issues\/(\d+)/g)) {
  seenInLog.add(`${m[1]}#${m[2]}`);
}

const seenInDrafts = new Set();
try {
  const draftHistory = execSync(
    "git log --all --name-only --pretty=format: -- 'outbound/drafts/**'",
    { encoding: 'utf8', timeout: 15000 }
  );
  // Filenames look like: outbound/drafts/2026-05-14/openai-codex-22694.md
  for (const m of draftHistory.matchAll(/outbound\/drafts\/[^/]+\/([\w.-]+?)-(\d+)\.md/g)) {
    // m[1] is "openai-codex" or "anthropics-claude-code"; reconstruct as owner/repo.
    const repoSlug = m[1].replace(/^([^-]+)-(.+)$/, '$1/$2');
    seenInDrafts.add(`${repoSlug}#${m[2]}`);
  }
} catch {
  // No git history (e.g. shallow clone) — fall through.
}

for (const target of TARGETS) {
  const raw = gh(`issue list --repo ${target.repo} --search ${JSON.stringify(target.query)} --state open --limit 30 --json number,title,createdAt,author,body`);
  if (!raw) continue;
  let issues;
  try { issues = JSON.parse(raw); } catch { continue; }
  for (const i of issues) {
    const key = `${target.repo}#${i.number}`;
    if (seenInLog.has(key) || seenInDrafts.has(key)) continue;
    allCandidates.push({
      repo: target.repo,
      number: i.number,
      title: i.title,
      author: i.author?.login || 'unknown',
      createdAt: i.createdAt,
      body: (i.body || '').slice(0, 800),
      landing: target.landing,
      utm_source: target.utm_source,
    });
  }
}

allCandidates.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
const top = allCandidates.slice(0, 5);

const draftDir = `outbound/drafts/${date}`;
const reportDir = `reports/gtm/${date}`;
mkdirSync(draftDir, { recursive: true });
mkdirSync(reportDir, { recursive: true });

for (const c of top) {
  const slug = `${c.repo.replace('/', '-')}-${c.number}`;
  const draftPath = join(draftDir, `${slug}.md`);
  const utm = `?utm_source=${c.utm_source}&utm_medium=funnel&utm_campaign=qr-2026`;
  const draft = `# Draft for ${c.repo}#${c.number}

- OP: @${c.author}
- Title: ${c.title}
- Created: ${c.createdAt}
- URL: https://github.com/${c.repo}/issues/${c.number}
- Suggested landing page: \`${c.landing}\`

## Bug report excerpt (first 800 chars)

${c.body || '_(empty body)_'}

---

## Draft comment

<!--
HUMAN REVIEW REQUIRED. Write a personalized diagnostic below.

Rules:
- DO NOT fabricate diagnostic commands, log labels, or internal behaviors
  you cannot verify in the actual source repo or the OP's bug report.
- Lead with one specific detail from the OP's report (proves you read it).
- Name one verified check or workaround.
- Link to https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/${c.landing}
  with UTM tag ${utm}.
- End with the $19 quick-read CTA: https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u${utm}
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

\`\`\`
gh issue comment ${c.number} --repo ${c.repo} --body-file ${draftPath}
\`\`\`

After posting, append a row to \`lead-log.md\` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
`;
  writeFileSync(draftPath, draft);
  console.log(`Drafted: ${draftPath}`);
}

const reportPath = join(reportDir, 'discovery.md');
const report = `# Discovery Report — ${date}

## New on-target open issues (not yet referenced in lead-log.md)

${top.length === 0
  ? '_No new candidates today._'
  : top.map(c => `- [${c.repo}#${c.number}](https://github.com/${c.repo}/issues/${c.number}) — @${c.author} — ${c.title.slice(0, 100)}`).join('\n')}

## Stats

- Candidates scanned: ${allCandidates.length}
- Drafts created: ${top.length} (top 5 by recency)
- Already referenced in lead-log: ${seenInLog.size} unique issue URLs
- Already drafted in git history: ${seenInDrafts.size} unique issue URLs

## Next step

Review each draft in \`outbound/drafts/${date}/\`, write the personalized
diagnostic in place of the \`(write here)\` placeholder, then run the
\`gh issue comment\` command at the bottom of the draft. After posting,
update \`lead-log.md\` manually with the new row.

This script does not post automatically and does not modify lead-log.md.
`;

writeFileSync(reportPath, report);
console.log(`Report: ${reportPath}`);
console.log(`Summary: candidates=${allCandidates.length} drafts=${top.length}`);
