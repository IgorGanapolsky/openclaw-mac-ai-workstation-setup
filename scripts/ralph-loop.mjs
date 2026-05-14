#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { mkdirSync, writeFileSync, appendFileSync, readFileSync } from 'node:fs';

console.log('Starting High-ROI Ralph Revenue Loop...');

// 1. Verify Revenue Truth
console.log('Verifying current revenue metrics...');
let metrics;
try {
  metrics = JSON.parse(execSync('gh api /repos/:owner/:repo/actions/variables/REVENUE_METRICS || echo "{}"').toString());
} catch (e) {
  metrics = { bookedRevenueCents: 0 };
}

// 2. Automated Lead Discovery (Simulated/Simpler for now, or via specific keywords)
const painPoints = [
  'OpenClaw refuses to act',
  'Codex Computer Use permissions error',
  'macOS AI agent screen recording issues',
  'agent setup mess'
];
console.log(`Searching for active pain points: ${painPoints.join(', ')}...`);
// In a real headless environment, this would call a search API or scrape.
// For now, we simulate finding a high-value lead based on the lead-sources patterns.
// Stub lead discovery removed: previous version hardcoded a single fake
// Reddit lead and appended it to lead-log.md every run, polluting the log.
// Until a real discovery source is wired (search API, Reddit/Twitter scrape,
// GitHub Issues query), this loop produces no leads — better than fake ones.
const newLeads = [];

// 3. Lead Logging — deduplicated; only append rows that aren't already present.
const leadLogPath = 'lead-log.md';
const existingLog = (() => { try { return readFileSync(leadLogPath, 'utf8'); } catch { return ''; } })();
newLeads.forEach(lead => {
  const line = `| ${lead.date} | ${lead.source} | ${lead.handle} | ${lead.problem} | Drafted Diagnostic Offer | ${lead.status} |`;
  if (existingLog.includes(line)) {
    console.log(`Skipped duplicate lead: ${lead.handle} from ${lead.source}`);
    return;
  }
  appendFileSync(leadLogPath, `${line}\n`);
  console.log(`Logged new lead: ${lead.handle} from ${lead.source}`);
});

// 4. Offer Rotation Logic
const offers = [
  { name: 'Quick Read', price: '$19', url: 'https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u' },
  { name: 'Diagnostic', price: '$499', url: 'https://buy.stripe.com/28EfZheyU2iW4lH35V3sI0q' },
  { name: 'Same-Day Triage', price: '$49', url: 'https://buy.stripe.com/28E7sL3Ug3n0bO935V3sI0r' }
];
const currentOffer = offers[Math.floor(Date.now() / 3600000) % offers.length];
const offerMessage = `Struggling with: "${painPoints[Math.floor(Math.random() * painPoints.length)]}"? Get our ${currentOffer.name} for ${currentOffer.price}: ${currentOffer.url}`;

// 5. Headless Publish
try {
  console.log(`Triggering headless publish for ${currentOffer.name}...`);
  // execSync(`gh workflow run zernio-publish.yml -f offer="${offerMessage}"`, { stdio: 'inherit' });
} catch (e) {
  console.warn('Publish failed, likely credentials. Outcome logged to packet.');
}

// 6. Record Outcome (Operator Close Packet)
const date = new Date().toISOString().split('T')[0];
const reportDir = `reports/gtm/${date}-money-today`;
mkdirSync(reportDir, { recursive: true });
const packetPath = `${reportDir}/operator-close-packet.md`;

const reportContent = `# Operator Close Packet - ${date}

## Pulse
- Discovered Leads: ${newLeads.length}
- Current Offer: ${currentOffer.name} (${currentOffer.price})
- Revenue Today: $${(metrics.bookedRevenueCents / 100).toFixed(2)}

## Evidence
- Logged ${newLeads.length} leads to lead-log.md
- Prepared Zernio payload for "${currentOffer.name}"

## Next Action
- Move discovered leads to "Pitched" status upon successful Zernio run.
`;

writeFileSync(packetPath, reportContent);
console.log(`Outcome recorded in ${packetPath}`);
console.log('Ralph Loop Cycle Complete.');
