#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const outDir = join(root, "dist", "reflections");

function argValue(name, fallback) {
  const prefix = `--${name}=`;
  return process.argv.find((arg) => arg.startsWith(prefix))?.slice(prefix.length) || fallback;
}

function sanitize(value) {
  return String(value)
    .replace(/gh[pousr]_[A-Za-z0-9_]+/g, "gh_***")
    .replace(/sk_(live|test)_[A-Za-z0-9]+/g, "sk_$1_***")
    .replace(/sk-proj-[A-Za-z0-9_-]+/g, "sk-proj-***")
    .replace(/re_[A-Za-z0-9_]{20,}/g, "re_***");
}

const now = new Date();
const stamp = now.toISOString().replace(/[:.]/g, "-");
const goal = sanitize(argValue("goal", "Package an OpenClaw agent app workflow."));
const worked = sanitize(argValue("worked", "Plain-English outcome, demo mode, approval boundary, and proof artifact."));
const failed = sanitize(argValue("failed", "Do not claim revenue without payment-source evidence."));
const pattern = sanitize(argValue("pattern", "Turn repeated agent work into a catalog app, checklist, proposal template, or script."));
const target = sanitize(argValue("target", "agent-app-catalog.md"));
const validation = sanitize(argValue("validation", "npm run ci"));

const body = [
  "# Reflection",
  "",
  `Created: ${now.toISOString()}`,
  "",
  "## Goal",
  "",
  goal,
  "",
  "## What Worked",
  "",
  worked,
  "",
  "## What Failed Or Was Risky",
  "",
  failed,
  "",
  "## Reusable Pattern",
  "",
  pattern,
  "",
  "## Promotion Target",
  "",
  target,
  "",
  "## Validation",
  "",
  validation,
  "",
].join("\n");

mkdirSync(outDir, { recursive: true });
const filePath = join(outDir, `${stamp}.md`);
writeFileSync(filePath, body);
console.log(`OK wrote ${filePath}`);
