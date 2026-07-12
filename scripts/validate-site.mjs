#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, normalize, relative, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const allowedExternal = [
  "https://buy.stripe.com/",
  "https://book.stripe.com/",
  "https://github.com/",
  "https://igorganapolsky.github.io/",
  "https://www.googletagmanager.com/",
  "https://plausible.io/",
  "https://www.kdnuggets.com/",
  "mailto:",
];
const requiredFiles = [
  "README.md",
  "index.html",
  "quick-read.html",
  "troubleshooting.html",
  "claude-code-channels-not-working.html",
  "offer.md",
  "fulfillment.md",
  "stripe.md",
  "revenue-ops-pack.md",
  "agent-app-catalog.md",
  "agent-app-catalog.html",
  "agent-app-intake.md",
  "agent-app-demo-spec.md",
  "upwork-proposal-bank.md",
  "ai-agent-security-audit.md",
  "agent-governance-standard.md",
  "self-improvement-loop.md",
  "mcp-security-gate.md",
  "durable-agent-workflows.md",
  "cost-aware-routing.md",
  "source-evidence-gate.md",
  "hermes-vps-agent-rollout.md",
  "agent-consent-policy.md",
  "enterprise-provider-access.md",
];
const secretPatterns = [
  { name: "GitHub PAT", pattern: /gh[pousr]_[A-Za-z0-9_]{20,}/ },
  { name: "Stripe live secret", pattern: /sk_live_[A-Za-z0-9]{16,}/ },
  { name: "OpenAI key", pattern: /sk-proj-[A-Za-z0-9_-]{20,}/ },
];

function walk(dir) {
  const entries = [];
  for (const name of readdirSync(dir)) {
    if ([".git", "node_modules", "dist"].includes(name)) continue;
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) entries.push(...walk(full));
    else entries.push(full);
  }
  return entries;
}

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) fail(`Missing required file: ${file}`);
}

const files = walk(root);
const htmlFiles = files.filter((file) => extname(file) === ".html");
const textFiles = files.filter((file) => [".html", ".md", ".yml", ".yaml", ".json", ".js", ".mjs"].includes(extname(file)));

for (const file of textFiles) {
  const rel = relative(root, file);
  const text = readFileSync(file, "utf8");
  for (const { name, pattern } of secretPatterns) {
    if (pattern.test(text)) fail(`Potential ${name} leaked in ${rel}`);
  }
}

for (const file of htmlFiles) {
  const rel = relative(root, file);
  // Search engine ownership verification files must be content-only
  // (e.g. google<token>.html, BingSiteAuth.xml-equivalent .html).
  // Adding HTML wrapping breaks Google's verifier.
  if (/^google[a-f0-9]+\.html$/i.test(rel)) continue;
  const text = readFileSync(file, "utf8");
  if (!/<title>[^<]+<\/title>/i.test(text)) fail(`Missing <title> in ${rel}`);
  if (!/<meta\s+name=["']description["']/i.test(text)) fail(`Missing meta description in ${rel}`);

  const refs = [...text.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)].map((match) => match[1]);
  for (const ref of refs) {
    if (ref.startsWith("#") || ref.startsWith("tel:")) continue;
    if (allowedExternal.some((prefix) => ref.startsWith(prefix))) continue;
    if (/^[a-z][a-z0-9+.-]*:/i.test(ref)) {
      fail(`Unexpected external URL in ${rel}: ${ref}`);
      continue;
    }
    const target = normalize(join(file, "..", ref.split("#")[0].split("?")[0]));
    if (!target.startsWith(root)) {
      fail(`Path escapes repo in ${rel}: ${ref}`);
      continue;
    }
    if (!existsSync(target)) fail(`Broken local reference in ${rel}: ${ref}`);
  }
}

if (process.exitCode) process.exit(process.exitCode);
console.log(`OK validated ${htmlFiles.length} HTML files and ${textFiles.length} text files.`);
