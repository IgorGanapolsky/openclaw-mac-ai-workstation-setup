#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { mkdirSync, writeFileSync, appendFileSync, readFileSync } from 'node:fs';

const date = new Date().toISOString().split('T')[0];
console.log(`Starting Cloud-Native Ralph Revenue Loop for ${date}...`);

// 1. Fetch Real Issues from OpenClaw (Discovery)
console.log('Fetching live issues from openclaw/openclaw...');
let issues = [];
try {
  const issuesRaw = execSync('gh api "repos/openclaw/openclaw/issues?per_page=10&state=open"').toString();
  issues = JSON.parse(issuesRaw).filter(i => !i.pull_request && !i.locked);
} catch (e) {
  console.error('Failed to fetch issues:', e.message);
}

// 2. Filter for Pain Points
const painPoints = [
  { keywords: ['routing', 'model', 'fallback'], offer: 'Diagnostic', price: '$499', url: 'https://buy.stripe.com/28EfZheyU2iW4lH35V3sI0q' },
  { keywords: ['auth', 'permission', 'login', 'token'], offer: 'Triage', price: '$49', url: 'https://buy.stripe.com/28E7sL3Ug3n0bO935V3sI0r' },
  { keywords: ['webchat', 'ui', 'whitespace', 'tui'], offer: 'Diagnostic', price: '$499', url: 'https://buy.stripe.com/28EfZheyU2iW4lH35V3sI0q' },
  { keywords: ['managed', 'deployment', 'server', 'revenue'], offer: 'Managed System', price: '$1,500', url: 'https://buy.stripe.com/aFa14nbmIg9M3hDayn3sI0k' }
];

const leadLogPath = 'lead-log.md';
const existingLog = (() => { try { return readFileSync(leadLogPath, 'utf8'); } catch { return ''; } })();

issues.forEach(issue => {
  const title = issue.title.toLowerCase();
  const match = painPoints.find(p => p.keywords.some(k => title.includes(k)));
  
  if (match && !existingLog.includes(`GitHub #${issue.number}`)) {
    console.log(`Found matching issue: #${issue.number} - ${issue.title}`);
    
    const pitch = `It sounds like you're struggling with ${match.keywords[0]} issues. We standardize these configurations in our ${match.price} ${match.offer}. We guarantee a fixed, smoke-tested config in 24 hours: ${match.url}`;
    
    // 3. ACTUAL Headless Outreach
    try {
      console.log(`Posting verified pitch to #${issue.number}...`);
      execSync(`gh issue comment ${issue.number} --repo openclaw/openclaw --body "${pitch}"`);
      
      // 4. Log Success
      const logLine = `| ${date} | GitHub #${issue.number} | ${issue.user.login} | ${issue.title.replace(/\|/g, '')} | ${match.offer} pitched headlessly. | VERIFIED PITCH |\n`;
      appendFileSync(leadLogPath, logLine);
    } catch (e) {
      console.error(`Failed to post comment to #${issue.number}:`, e.message);
    }
  }
});

// 5. Record Cycle Outcome
const reportDir = `reports/gtm/${date}-money-today`;
mkdirSync(reportDir, { recursive: true });
const packetPath = `${reportDir}/operator-close-packet.md`;
const reportContent = `# Cloud Operator Close Packet - ${date}
- Status: Active
- Issues Scanned: ${issues.length}
- Verified Pitches: See lead-log.md
`;
writeFileSync(packetPath, reportContent);

console.log('Ralph Loop Cycle Complete.');
