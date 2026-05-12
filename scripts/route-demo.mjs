#!/usr/bin/env node
const prompts = [
  "Format this JSON and fix indentation.",
  "Draft a short reply to this lead.",
  "Design a WhatsApp to ClickUp lead workflow with approval gates.",
  "Audit this MCP server for exposed tools and missing auth.",
  "Refactor the auth module without breaking existing callers.",
  "Send this invoice refund to the customer.",
];

const escalators = [
  /\bsecurity|audit|auth|mcp|secret|token|credential|exposed\b/i,
  /\bpayment|invoice|refund|bank|stripe|customer data\b/i,
  /\brefactor|architecture|multi-file|production|incident\b/i,
  /\bworkflow|integration|approval|crm|clickup|zapier|webhook\b/i,
  /\bsend|post|delete|deploy|external\b/i,
];

function route(prompt) {
  const matches = escalators.filter((pattern) => pattern.test(prompt)).length;
  if (matches >= 2) return { tier: "strong", reason: "multiple escalation triggers" };
  if (matches === 1) return { tier: "standard", reason: "one escalation trigger" };
  if (prompt.length < 80) return { tier: "cheap", reason: "short low-risk prompt" };
  return { tier: "standard", reason: "default complexity" };
}

const rows = prompts.map((prompt) => ({ prompt, ...route(prompt) }));
console.table(rows);
console.log(JSON.stringify({ ok: true, rows }, null, 2));
