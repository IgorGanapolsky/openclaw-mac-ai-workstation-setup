#!/usr/bin/env node
// Send a single outreach draft via Resend.
// Reads draft from outbound/<batch>/<file>.md, extracts subject + body, sends.
//
// Usage:
//   RESEND_API_KEY=... node scripts/send-outreach.mjs \
//       --from "Igor Ganapolsky <igor@yourdomain.com>" \
//       --to "owner@gym.com" \
//       --draft outbound/martial-arts-broward-2026-05-18/v2/01-gt.md \
//       [--dry-run]
//
// Subject extracted from a line starting with "**Subject:**" in the draft.
// Body is everything below the "---" delimiter, OR everything after the
// "**Subject:**" line if no delimiter found. Falls back to the whole file.
//
// On send: appends a row to lead-log.md with (date, to, subject, resend-id).

import { readFileSync, appendFileSync } from 'node:fs';
import { argv, exit, env } from 'node:process';

function arg(name, fallback) {
  const i = argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  return argv[i + 1];
}
const flag = (name) => argv.includes(`--${name}`);

const from = arg('from');
const to = arg('to');
const draftPath = arg('draft');
const dryRun = flag('dry-run');

if (!from || !to || !draftPath) {
  console.error('usage: --from <addr> --to <addr> --draft <path> [--dry-run]');
  exit(2);
}

const key = env.RESEND_API_KEY;
if (!key) {
  console.error('RESEND_API_KEY not set');
  exit(2);
}

const raw = readFileSync(draftPath, 'utf8');

function extractSubject(text) {
  const m = text.match(/^\*\*Subject:\*\*\s*(.+)$/m);
  return m ? m[1].trim() : null;
}

function extractBody(text) {
  // Strip the frontmatter-style header lines and the subject line.
  // Body starts after the first standalone blank line that follows the Subject.
  const lines = text.split('\n');
  let i = 0;
  // Skip the file header (#) and any **Subject:** line + immediate metadata.
  while (i < lines.length) {
    const l = lines[i];
    if (l.startsWith('# ') || l.startsWith('**Subject:**') || l.trim() === '' && i < 5) {
      i++;
      continue;
    }
    break;
  }
  // Drop trailing whitespace.
  while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();
  return lines.slice(i).join('\n').trim();
}

const subject = extractSubject(raw);
const body = extractBody(raw);

if (!subject) {
  console.error(`could not find "**Subject:**" line in ${draftPath}`);
  exit(3);
}
if (body.length < 40) {
  console.error(`extracted body suspiciously short (${body.length} chars). aborting.`);
  exit(3);
}

const payload = {
  from,
  to: [to],
  subject,
  text: body,
};

console.log(`[draft]   ${draftPath}`);
console.log(`[from]    ${from}`);
console.log(`[to]      ${to}`);
console.log(`[subject] ${subject}`);
console.log(`[length]  ${body.length} chars, ${body.split(/\s+/).length} words`);

if (dryRun) {
  console.log('--- BODY PREVIEW ---');
  console.log(body);
  console.log('--- END ---');
  console.log('[dry-run] not sending');
  exit(0);
}

const res = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
});

const text = await res.text();
if (!res.ok) {
  console.error(`Resend ${res.status}: ${text}`);
  exit(4);
}

const result = JSON.parse(text);
console.log(`[sent]    resend-id=${result.id}`);

const now = new Date().toISOString();
const logLine = `| ${now.split('T')[0]} | ${to} | ${subject} | sent | resend:${result.id} |\n`;
try {
  appendFileSync('outbound/send-log.md', logLine);
  console.log(`[logged]  outbound/send-log.md`);
} catch (e) {
  console.warn(`could not append send log: ${e.message}`);
}
