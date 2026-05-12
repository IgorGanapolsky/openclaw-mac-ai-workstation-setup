#!/usr/bin/env node
import { spawn } from "node:child_process";
import { appendFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

function usage() {
  console.error([
    "Usage: node scripts/safe-command-runner.mjs [--cwd DIR] [--log FILE] [--timeout-ms N] [--idle-timeout-ms N] -- command [args...]",
    "",
    "Runs a command with bounded wall-clock and idle timeouts.",
  ].join("\n"));
}

function parseArgs(argv) {
  const options = {
    cwd: process.cwd(),
    log: "dist/safe-command-runner.jsonl",
    timeoutMs: 10 * 60 * 1000,
    idleTimeoutMs: 2 * 60 * 1000,
    command: [],
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--") {
      options.command = argv.slice(i + 1);
      break;
    }
    if (arg === "--cwd") options.cwd = argv[++i];
    else if (arg === "--log") options.log = argv[++i];
    else if (arg === "--timeout-ms") options.timeoutMs = Number(argv[++i]);
    else if (arg === "--idle-timeout-ms") options.idleTimeoutMs = Number(argv[++i]);
    else if (arg === "-h" || arg === "--help") {
      usage();
      process.exit(0);
    } else {
      options.command = argv.slice(i);
      break;
    }
  }
  if (!options.command.length || !Number.isFinite(options.timeoutMs) || !Number.isFinite(options.idleTimeoutMs)) {
    usage();
    process.exit(2);
  }
  options.cwd = resolve(options.cwd);
  options.log = resolve(options.cwd, options.log);
  return options;
}

function redact(value) {
  return String(value)
    .replace(/gh[pousr]_[A-Za-z0-9_]+/g, "gh_***")
    .replace(/sk_(live|test)_[A-Za-z0-9]+/g, "sk_$1_***")
    .replace(/re_[A-Za-z0-9_]{20,}/g, "re_***");
}

function writeEvent(filePath, event) {
  mkdirSync(dirname(filePath), { recursive: true });
  appendFileSync(filePath, `${JSON.stringify({ at: new Date().toISOString(), ...event })}\n`);
}

const options = parseArgs(process.argv.slice(2));
const [command, ...args] = options.command;
const startedAt = Date.now();
let lastOutputAt = startedAt;
let timeoutReason = null;
let closed = false;

writeEvent(options.log, {
  event: "start",
  cwd: options.cwd,
  command: [command, ...args].map(redact),
  timeoutMs: options.timeoutMs,
  idleTimeoutMs: options.idleTimeoutMs,
});

const child = spawn(command, args, {
  cwd: options.cwd,
  env: { ...process.env, FORCE_COLOR: "0", NO_COLOR: "1" },
  stdio: ["ignore", "pipe", "pipe"],
});

function onOutput(name, chunk) {
  lastOutputAt = Date.now();
  const text = redact(chunk.toString());
  process[name].write(text);
  writeEvent(options.log, { event: name, bytes: Buffer.byteLength(text), sample: text.slice(-500) });
}

child.stdout.on("data", (chunk) => onOutput("stdout", chunk));
child.stderr.on("data", (chunk) => onOutput("stderr", chunk));
child.on("error", (error) => writeEvent(options.log, { event: "error", message: error.message }));

const timer = setInterval(() => {
  if (closed) return;
  const now = Date.now();
  if (now - startedAt > options.timeoutMs) timeoutReason = "wall_timeout";
  if (now - lastOutputAt > options.idleTimeoutMs) timeoutReason = "idle_timeout";
  if (timeoutReason) {
    writeEvent(options.log, { event: "kill", reason: timeoutReason, pid: child.pid });
    child.kill("SIGTERM");
    setTimeout(() => {
      if (!closed) child.kill("SIGKILL");
    }, 5000).unref();
  }
}, 1000);

child.on("close", (code, signal) => {
  closed = true;
  clearInterval(timer);
  const durationMs = Date.now() - startedAt;
  writeEvent(options.log, { event: "close", code, signal, timeoutReason, durationMs });
  if (timeoutReason) {
    console.error(`safe-command-runner: ${timeoutReason} after ${durationMs}ms`);
    process.exit(124);
  }
  process.exit(code ?? (signal ? 128 : 0));
});
