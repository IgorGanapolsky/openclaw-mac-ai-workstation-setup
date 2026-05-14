#!/usr/bin/env node
// Self-serve diagnostic bundler for the 6 root causes documented at
// https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html
//
// Runs read-only checks on the local machine, redacts common secret patterns,
// and writes a single bundle file you can review yourself OR paste into the
// $19 quick-read funnel. The script never sends data anywhere.

import { execSync } from "node:child_process";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const REDACTORS = [
  [/gh[pousr]_[A-Za-z0-9_]{20,}/g, "[REDACTED_GITHUB_TOKEN]"],
  [/sk-(proj-|ant-|live_|test_)?[A-Za-z0-9_-]{20,}/g, "[REDACTED_API_KEY]"],
  [/re_[A-Za-z0-9_]{20,}/g, "[REDACTED_RESEND_KEY]"],
  [/Bearer\s+[A-Za-z0-9._-]{20,}/g, "Bearer [REDACTED]"],
  [/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, "[REDACTED_EMAIL]"],
];

function redact(text) {
  let out = String(text ?? "");
  for (const [pattern, replacement] of REDACTORS) out = out.replace(pattern, replacement);
  // Truncate lines longer than 240 chars (e.g. full ps aux command lines that
  // leak plugin paths, session IDs, and home-dir hashes — none of it is needed
  // to root-cause the 6 symptoms).
  out = out
    .split("\n")
    .map((line) => (line.length > 240 ? `${line.slice(0, 240)}… [truncated ${line.length - 240}b]` : line))
    .join("\n");
  return out;
}

function run(cmd) {
  try {
    return execSync(cmd, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 15000 });
  } catch (err) {
    const stdout = err.stdout ? String(err.stdout) : "";
    const stderr = err.stderr ? String(err.stderr) : String(err.message ?? "");
    return `${stdout}\n[stderr] ${stderr}`.trim();
  }
}

const checks = [
  {
    id: "symptom-1",
    label: "Symptom 1 — Plugin cache not pointed at active Codex home",
    commands: [
      "codex mcp list 2>&1 | head -40",
      "ls -la ~/.codex/plugins/cache/openai-bundled/computer-use/*/.codex-plugin/plugin.json 2>&1 | head -20",
      "ls -la ~/.codex/plugins/cache/openai-bundled/computer-use/*/.mcp.json 2>&1 | head -20",
    ],
    matches: (out) => !/computer-use/i.test(out) || /No such file/i.test(out),
  },
  {
    id: "symptom-2",
    label: "Symptom 2 — TCC bundle-ID mismatch",
    commands: [
      "ps -axo pid,comm | grep -i codex | grep -v grep | head -5",
      "codesign -dv --verbose=2 /Applications/Codex.app 2>&1 | grep -E 'Identifier|TeamIdentifier' | head -5",
    ],
    matches: () => false,
  },
  {
    id: "symptom-3",
    label: "Symptom 3 — Fallback route inherits primary thresholds",
    commands: [
      "openclaw route show --last 2>&1 | head -30",
      "openclaw route show --agent computer-use 2>&1 | head -30",
    ],
    matches: (out) => /threshold_inherited_from_primary.*true/i.test(out),
  },
  {
    id: "symptom-4",
    label: "Symptom 4 — Child process inherits wrong TCC posture",
    commands: ["ps -o ppid=,command= -p $$ 2>&1 | head -5"],
    matches: () => false,
  },
  {
    id: "symptom-5",
    label: "Symptom 5 — Stale CODEX_HOME or duplicate Codex homes",
    commands: [
      "printenv | grep -i codex || echo '(no CODEX_* env set)'",
      "ls -la ~/.codex 2>&1 | head -10",
      "ls -la ~/Library/Application\\ Support/Codex 2>&1 | head -10",
    ],
    matches: (out) => /CODEX_HOME/.test(out) && (out.match(/CODEX_HOME/g) || []).length > 1,
  },
  {
    id: "symptom-6",
    label: "Symptom 6 — OpenClaw session reused across project dirs",
    commands: ["openclaw session ls 2>&1 | head -40"],
    matches: (out) => /agent:main:main\b/.test(out),
  },
];

const ts = new Date().toISOString().replace(/[:.]/g, "-");
const outDir = join(homedir(), "Desktop");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, `openclaw-diagnostic-${ts}.txt`);

const sections = [];
const hits = [];

sections.push("# OpenClaw / Codex Computer Use — Self-Serve Diagnostic Bundle");
sections.push(`Generated: ${new Date().toISOString()}`);
sections.push(`Host: ${process.platform} ${process.arch} node-${process.version}`);
sections.push("");
sections.push("This file is local-only. Nothing was sent anywhere. Review it, or paste it into");
sections.push("the $19 quick-read funnel: https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u");
sections.push("");

for (const check of checks) {
  sections.push(`\n## ${check.label}`);
  const outputs = [];
  for (const cmd of check.commands) {
    sections.push(`\n$ ${cmd}`);
    const raw = run(cmd);
    const redacted = redact(raw);
    sections.push("```");
    sections.push(redacted.trim() || "(no output)");
    sections.push("```");
    outputs.push(redacted);
  }
  if (check.matches(outputs.join("\n"))) hits.push(check.id);
}

sections.push("\n## Suggested next step");
if (hits.length === 0) {
  sections.push(
    "No symptom heuristic fired. That doesn't mean the stack is healthy — it means the",
    "free heuristics didn't match. The $19 quick read reviews the full bundle and names",
    "the actual root cause: https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u",
  );
} else {
  sections.push(`Likely root cause(s): ${hits.join(", ")}`);
  sections.push(
    "Walk the matching section(s) at",
    "https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html",
    "or send this file to the $19 quick read for a confirmed root cause and next command.",
  );
}

writeFileSync(outPath, sections.join("\n"), "utf8");
console.log(`\nWrote ${outPath}`);
console.log(`Symptoms matched: ${hits.length ? hits.join(", ") : "none (review file manually)"}`);
console.log("");
console.log("Next step: open the file, scan for [REDACTED_*] entries, then either");
console.log("  (a) walk the matching Symptom section in the troubleshooting page, or");
console.log("  (b) paste the file into the $19 quick read: https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u");
