#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const textExtensions = new Set([".html", ".md", ".json", ".js", ".mjs", ".yml", ".yaml"]);
const secretPatterns = [
  ["GitHub token", /gh[pousr]_[A-Za-z0-9_]{20,}/],
  ["Stripe secret", /sk_(live|test)_[A-Za-z0-9]{16,}/],
  ["OpenAI project key", /sk-proj-[A-Za-z0-9_-]{20,}/],
  ["Resend key", /re_[A-Za-z0-9_]{20,}/],
];
const highRiskTerms = [
  ["destructive tool", /\b(delete|destroy|drop table|truncate|wipe)\b/i],
  ["financial tool", /\b(refund|charge|invoice|payout|wire|bank)\b/i],
  ["external messaging", /\b(send email|send message|post publicly|tweet|dm)\b/i],
  ["shell execution", /\b(shell|exec|terminal|subprocess|child_process)\b/i],
];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if ([".git", "node_modules", "dist"].includes(name)) continue;
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) out.push(...walk(full));
    else if (textExtensions.has(extname(full))) out.push(full);
  }
  return out;
}

const findings = [];
for (const file of walk(root)) {
  const rel = relative(root, file);
  const text = readFileSync(file, "utf8");
  for (const [name, pattern] of secretPatterns) {
    if (pattern.test(text)) findings.push({ severity: "critical", type: name, file: rel });
  }
  if (/mcp|agent|tool/i.test(text)) {
    for (const [name, pattern] of highRiskTerms) {
      if (pattern.test(text)) findings.push({ severity: "review", type: name, file: rel });
    }
  }
}

const critical = findings.filter((finding) => finding.severity === "critical");
console.log(JSON.stringify({ ok: critical.length === 0, findings }, null, 2));
if (critical.length) process.exit(1);
