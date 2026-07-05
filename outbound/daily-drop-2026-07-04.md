# Daily Drop — ready-to-post packet (v2, aligned to the real landing page)

Link everywhere: https://igorganapolsky.com/openclaw-mac-ai-workstation-setup/troubleshooting.html
Real offer on that page: **$499 Agent Safety Diagnostic** (review a Codex/Claude/Chrome/OpenClaw
workflow before it can post, spend, delete, or ship). NOT $19 — earlier drafts were wrong.

The page's SIX verified causes (use these exact ones — the link must pay off what the post promises):
1. Plugin cache not pointed at the bundled plugin — `codex plugin marketplace add /Applications/Codex.app/Contents/Resources/plugins/openai-bundled`
2. TCC tracks Screen Recording/Accessibility by BUNDLE ID — running a different bundle path than the approved one
3. OpenRouter "fallback" inherits the primary's thresholds → retries the same broken route twice
4. Apple Events -1743 — a tool launched from cmux/Warp inherits the PARENT's TCC posture, not Codex's
5. Stale OAuth / multiple $CODEX_HOME — the runtime answering text isn't the one that owns the plugin
6. OpenClaw TUI session reused across projects — inherits another project's compaction/plan/memory

STATUS: Bluesky ×3 LIVE. Everything below posts from your browser / Claude-for-Chrome.

═══════════════════════════════════════════════════════════════
## LINKEDIN
═══════════════════════════════════════════════════════════════

"Computer Use plugin unavailable" on macOS — and reinstalling never fixes it.

I went through the openai/codex + OpenClaw issue threads this week. The same failures keep coming back, and almost none are the error the UI shows. Six real causes, in order of how often they actually break things:

1. The plugin cache in your user directory isn't pointed at the bundled plugin. Reinstalling touches the app, not ~/.codex. Fix is one line: codex plugin marketplace add /Applications/Codex.app/Contents/Resources/plugins/openai-bundled

2. Screen Recording + Accessibility both granted, still denied. macOS TCC tracks permission by bundle ID, not app name — run Codex from a different bundle path (DMG vs App Store vs re-signed helper) and the approval is attached to the wrong bundle.

3. OpenRouter "fallback" inherits the primary model's thresholds, so it hits the same context limit and fails identically. It looks like it tried two providers. It tried one provider twice.

4. Works in Zed's terminal, breaks from cmux/Warp — Apple Events error -1743. A child process inherits the PARENT app's automation permission, not Codex's.

5. Stale OAuth / multiple $CODEX_HOME — the runtime answering your text isn't the one that owns the Computer Use plugin.

6. OpenClaw TUI reuses a session pool keyed by terminal, not working directory — two project dirs share compaction state and memory.

Full checklist with the exact diagnostic command for each: https://igorganapolsky.com/openclaw-mac-ai-workstation-setup/troubleshooting.html

If you're shipping an agent that can post, spend, or delete on its own, that page also links a paid pre-flight review. What's your setup — Codex, Claude, or OpenClaw?

#MacOS #AIAgents #Codex #ComputerUse #DeveloperTools

═══════════════════════════════════════════════════════════════
## X / TWITTER  (5 tweets, each ≤280)
═══════════════════════════════════════════════════════════════

[1/5]
"Computer Use plugin unavailable" on macOS — and reinstalling never fixes it.

Went through the codex + OpenClaw issue threads. Six real causes, almost none are the error the UI shows. 🧵

[2/5]
#1, most common: the plugin cache in your user dir isn't pointed at the bundled plugin. Reinstalling touches the app, not ~/.codex.

One line:
codex plugin marketplace add /Applications/Codex.app/Contents/Resources/plugins/openai-bundled

[3/5]
#2: Screen Recording granted, still denied.

macOS TCC tracks permission by BUNDLE ID, not app name. Run Codex from a different bundle path (DMG vs App Store vs re-signed helper) and the approval is attached to the wrong bundle. The running process has a different one.

[4/5]
#3: OpenRouter "fallback" inherits the primary's thresholds → same context limit, same failure. Looks like 2 providers; it's 1 provider twice.

#4: works in Zed, breaks from cmux/Warp → Apple Events -1743. Child inherits the PARENT's automation permission, not Codex's.

[5/5]
#5 stale OAuth / multiple $CODEX_HOME. #6 OpenClaw TUI reuses sessions by terminal, not dir.

Exact command for each of the six:
https://igorganapolsky.com/openclaw-mac-ai-workstation-setup/troubleshooting.html

Shipping an agent that can post/spend/delete? Page links a pre-flight review.

═══════════════════════════════════════════════════════════════
## DEV.TO  (paste into Create Post; frontmatter sets title+tags)
═══════════════════════════════════════════════════════════════

---
title: Codex Computer Use "plugin unavailable" on macOS — the six real causes
published: true
tags: macos, codex, aiagents, debugging
---

If Computer Use won't start in Codex on macOS — "plugin unavailable," permissions that look granted but aren't, or an agent that works in one terminal and dies in another — the error the UI shows is almost never the real cause. Here are the six that actually break things, each with the command that confirms it.

## 1. Plugin cache isn't pointed at the bundled plugin

The bundled plugin exists in `/Applications/Codex.app/Contents/Resources/plugins/openai-bundled`, but your active Codex home isn't pointed at it. Reinstalling doesn't fix it — the cache lives in your user directory.

```bash
codex mcp list
codex plugin marketplace add /Applications/Codex.app/Contents/Resources/plugins/openai-bundled
codex mcp list   # computer-use should now appear
```

## 2. Permissions granted to the wrong bundle ID

macOS TCC tracks Screen Recording and Accessibility by **bundle identifier**, not app name. Run Codex from a different bundle path (DMG copy vs App Store vs a differently-signed helper) and the approval is recorded for one bundle while the running process has another.

```bash
ps aux | grep -i codex | grep -v grep
codesign -dv --verbose=2 /Applications/Codex.app 2>&1 | grep -E "Identifier|TeamIdentifier"
sqlite3 ~/Library/Application\ Support/com.apple.TCC/TCC.db \
  "SELECT client, auth_value FROM access WHERE service IN ('kTCCServiceScreenCapture','kTCCServiceAccessibility');"
```

A mismatch between the running bundle ID and the TCC-approved bundle ID is the cause. Remove the old copy, re-grant to the canonical bundle.

## 3. OpenRouter fallback silently re-runs the broken primary

Gateway fallback keeps the primary model's threshold values when it escalates, so the fallback hits the same context/compression limit and fails identically. It looks like two providers were tried; it was one provider, twice.

```bash
openclaw route show --last
openclaw route show --agent computer-use   # look for "threshold_inherited_from_primary": true
```

Fix: separate threshold/context configs per route, or a dedicated computer-use agent variant.

## 4. Apple Events -1743 from cmux / Warp

Apple Events from a child process inherit the **parent's** TCC posture. A tool running inside cmux has cmux's permissions, not Codex's — producing AppleScript error -1743 with no other diagnostic.

```bash
ps -o ppid,command -p $$
# Grant Automation to the actual parent (cmux/Warp/iTerm):
# System Settings > Privacy & Security > Automation
```

## 5. Stale OAuth / multiple $CODEX_HOME

If an old shell exported a different `$CODEX_HOME`, the runtime answering your text isn't the one that owns the Computer Use plugin.

```bash
printenv | grep -i codex
ls -la ~/.codex ~/Library/Application\ Support/Codex 2>/dev/null
```

Pick one canonical `CODEX_HOME`, remove the others from your shell rc.

## 6. OpenClaw TUI session reused across projects

OpenClaw/otui reuse a session pool keyed by terminal, not working directory. Two project dirs share compaction state, plan, and memory.

---

Full checklist + the verified-working configuration: https://igorganapolsky.com/openclaw-mac-ai-workstation-setup/troubleshooting.html

Which one bit you? Comparing notes to keep the list accurate.

═══════════════════════════════════════════════════════════════
## HASHNODE  (same article as Dev.to)
═══════════════════════════════════════════════════════════════

Title: Codex Computer Use "plugin unavailable" on macOS — the six real causes
Tags: macos, debugging, ai, developer-tools
Body: use the Dev.to body above, minus the frontmatter block.

═══════════════════════════════════════════════════════════════
## MEDIUM  (reply to Mykola — https://medium.com/p/12fe933fa3e5)  [unchanged — governance topic, no page dependency]
═══════════════════════════════════════════════════════════════

Exactly — "tell it not to" is a request, not a control. The only layer where "no" is enforced is between the agent's decision and the syscall: a deny-by-default gate that checks every tool call against rules-as-code before it executes. Prompts are probabilistic; audit logs are too late.

With 10+ agents daily you've likely hit the nastier case: two agents individually compliant, combined actions not. That's what makes per-agent prompting hopeless and per-call gating necessary.

I build an open-source CLI doing exactly this interception (Claude/Codex/Gemini adapters) — happy to compare notes, the audit-export problem looks shared with your PM tooling.

═══════════════════════════════════════════════════════════════
## THREADS  (under 500)
═══════════════════════════════════════════════════════════════

"Computer Use plugin unavailable" on macOS — reinstalling never fixes it.

Six real causes, almost none are the error the UI shows:

→ plugin cache not pointed at the bundled plugin
→ Screen Recording granted to the wrong bundle ID (TCC tracks by bundle, not name)
→ OpenRouter fallback retries the same broken route twice
→ Apple Events -1743 from cmux/Warp (child inherits parent's permission)

Exact command for each:
igorganapolsky.com/openclaw-mac-ai-workstation-setup/troubleshooting.html

═══════════════════════════════════════════════════════════════
## HACKER NEWS  (Show HN)
═══════════════════════════════════════════════════════════════

Title: Show HN: The six real causes of Codex Computer Use failing on macOS
URL:   https://igorganapolsky.com/openclaw-mac-ai-workstation-setup/troubleshooting.html

═══════════════════════════════════════════════════════════════
## BLUESKY — ALREADY LIVE
═══════════════════════════════════════════════════════════════
- https://bsky.app/profile/iganapolsky.bsky.social/post/3mpu6p7i5lw2z
- https://bsky.app/profile/iganapolsky.bsky.social/post/3mpu6pyibr32j  (reply to @vinkius-mcp-ai)
- https://bsky.app/profile/iganapolsky.bsky.social/post/3mpu6pynefv2f

NOTE: the two Bluesky owned posts used the older "ScreenCaptureKit entitlement / minos / 24h cache"
framing, which does NOT match the six causes on the live page. Consider a follow-up Bluesky post
with the corrected framing above, or leave them — they still drive to the correct URL.
