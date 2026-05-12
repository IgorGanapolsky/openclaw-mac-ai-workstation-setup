#!/usr/bin/env node
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const dryRun = process.argv.includes("--dry-run");
const releaseFiles = [
  "README.md",
  "index.html",
  "quick-read.html",
  "troubleshooting.html",
  "claude-code-computer-use.html",
  "codex-computer-use-macos-checklist.md",
  "github-issue-diagnostic.md",
  "offer.md",
  "fulfillment.md",
  "stripe.md",
  "outreach.md",
  "lead-sources.md",
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
  "scripts/safe-command-runner.mjs",
  "scripts/reflect-task.mjs",
  "scripts/local-security-check.mjs",
  "scripts/route-demo.mjs",
  "scripts/consent-policy-demo.mjs",
];

const rows = releaseFiles.map((file) => {
  const buffer = readFileSync(join(root, file));
  const sha256 = createHash("sha256").update(buffer).digest("hex");
  return `| ${file} | ${buffer.length} | ${sha256} |`;
});

const manifest = [
  "# Release Manifest",
  "",
  `Mode: ${dryRun ? "dry-run" : "release"}`,
  "",
  "| File | Bytes | SHA-256 |",
  "| --- | ---: | --- |",
  ...rows,
  "",
].join("\n");

mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(join(root, "dist", "RELEASE_MANIFEST.md"), manifest);
console.log(`OK wrote dist/RELEASE_MANIFEST.md for ${releaseFiles.length} files.`);
