#!/usr/bin/env node
// SEO monitoring. Read-only — never posts, never modifies external systems.
// Writes a daily snapshot to reports/seo/<date>.md so the trend is visible
// over time without depending on GSC session access.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE_BASE = 'https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup';
const PAGES = [
  { path: '/', label: 'home', expect: 'OpenClaw' },
  { path: '/troubleshooting.html', label: 'troubleshooting umbrella', expect: 'Codex Computer Use' },
  { path: '/computer-use-plugin-unavailable.html', label: 'plugin unavailable', expect: 'Computer Use plugin unavailable' },
  { path: '/codex-computer-use-intel-mac.html', label: 'intel mac', expect: 'Intel' },
  { path: '/claude-code-computer-use.html', label: 'claude code cu', expect: 'Claude Code' },
  { path: '/claude-code-channels-not-working.html', label: 'channels', expect: 'channels' },
  { path: '/quick-read.html', label: 'quick-read funnel', expect: '$19' },
  { path: '/agent-app-catalog.html', label: 'app catalog', expect: 'agent' },
  { path: '/sitemap.xml', label: 'sitemap', expect: '<urlset' },
  { path: '/robots.txt', label: 'robots', expect: 'Sitemap' },
];

const date = new Date().toISOString().split('T')[0];
const utcStamp = new Date().toISOString();

async function fetchProbe(url, expect) {
  const start = Date.now();
  try {
    const res = await fetch(url, { redirect: 'follow' });
    const text = await res.text();
    const ms = Date.now() - start;
    const ok = res.status === 200 && (!expect || text.toLowerCase().includes(expect.toLowerCase()));
    return { status: res.status, ms, ok, size: text.length };
  } catch (e) {
    return { status: 0, ms: Date.now() - start, ok: false, error: String(e).slice(0, 200) };
  }
}

async function bingIndexCount() {
  // Google blocks scraping reliably; Bing's site: query is the cheapest external signal.
  try {
    const res = await fetch(
      `https://www.bing.com/search?q=${encodeURIComponent(`site:${SITE_BASE.replace(/^https?:\/\//, '')}`)}`,
      { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh) seo-monitor/1.0' } }
    );
    const html = await res.text();
    const m = html.match(/About\s+([0-9,]+)\s+results/i) ||
              html.match(/([0-9,]+)\s+result/i);
    if (m) return Number.parseInt(m[1].replace(/,/g, ''), 10);
    if (/no results/i.test(html)) return 0;
    return null;
  } catch (e) {
    return null;
  }
}

const probes = [];
for (const p of PAGES) {
  const result = await fetchProbe(`${SITE_BASE}${p.path}`, p.expect);
  probes.push({ ...p, ...result });
}

const bing = await bingIndexCount();

const allOk = probes.every(p => p.ok);
const sitemapOk = probes.find(p => p.path === '/sitemap.xml')?.ok;

const lines = [
  `# SEO snapshot — ${date}`,
  ``,
  `Generated at ${utcStamp}.`,
  ``,
  `## Headline`,
  ``,
  `- All ${probes.length} probes 200 + content-check: ${allOk ? '✅' : '❌'}`,
  `- Sitemap fetchable: ${sitemapOk ? '✅' : '❌'}`,
  `- Bing indexed URLs (site:${SITE_BASE.replace(/^https?:\/\//, '')}): ${bing === null ? '⚠️ unknown (Bing scrape failed)' : bing}`,
  ``,
  `## Page health`,
  ``,
  `| Path | Label | Status | Size | Latency | Content match |`,
  `| --- | --- | --- | --- | --- | --- |`,
  ...probes.map(p =>
    `| \`${p.path}\` | ${p.label} | ${p.status} | ${p.size ?? '—'} | ${p.ms}ms | ${p.ok ? '✓' : '✗'} |`
  ),
  ``,
  `## What this report does NOT measure`,
  ``,
  `- Google sitemap parse status — that requires GSC session access; check manually at https://search.google.com/search-console/sitemaps`,
  `- Google indexed URL count — Google blocks the \`site:\` scrape; rely on Bing as proxy or check GSC Coverage`,
  `- Comment-CTR — no analytics on landing pages yet`,
  `- Stripe payments — check directly`,
  ``,
];

mkdirSync('reports/seo', { recursive: true });
const out = join('reports/seo', `${date}.md`);
writeFileSync(out, lines.join('\n'));

console.log(`wrote ${out}`);
console.log(`all_ok=${allOk} sitemap_ok=${sitemapOk} bing_indexed=${bing}`);
if (!allOk) {
  console.error('one or more probes failed');
  process.exit(1);
}
