# Daily Engagement Report — 2026-06-30

## Replies needing follow-up

No new replies in the last 7 days.

_(All posted rows in lead-log.md with openai/codex URLs are dated 2026-05-18, which is 43 days before today and outside the 7-day scan window.)_

---

## New on-target open issues (not yet commented)

Search: `"Computer Use macOS"` in `openai/codex`, state=open, limit=30. Filtered against all issue numbers in lead-log.md (#22856, #22903, #22921, #22927, #22949, #18803) — none matched. All 30 results are new candidates.

| # | createdAt | @author | Title (first 100 chars) | Likely symptom match |
|---|-----------|---------|-------------------------|----------------------|
| #30708 | 2026-06-30T12:06:04Z | @ashleycox | MacOS: Voiceover is unable to access options in the 'Add files and more' menu | Accessibility / macOS UI regression |
| #30707 | 2026-06-30T11:48:26Z | @noumanahmad3777-ctrl | Codex desktop app bug on macOS 26.x | macOS 26 compatibility |
| #30701 | 2026-06-30T10:54:31Z | @ZLWMF | After deleting all projects, the Hooks page shows "No hooks found", but the plugin-level SessionStar | Plugin / hooks state bug |
| #30682 | 2026-06-30T06:16:25Z | @pkovzz | Codex CLI crashes with `zsh: trace trap codex` during repository analysis on macOS/iTerm2 with Intel | SIGTRAP crash on Intel macOS |
| #30660 | 2026-06-30T04:21:42Z | @qicheng-h | My Codex Usage Limits Are STILL Depleting Faster Than Expected. | Usage limit drain |
| #30656 | 2026-06-30T03:42:55Z | @yanjun821126 | macOS Intel: Codex CLI 0.142.4 crashes with SIGTRAP when using GPT-5.5, GPT-5.4 works normally | Intel Mac SIGTRAP / model regression |
| #30647 | 2026-06-30T02:03:57Z | @baek-seunghwan | 404 Not Found: model 'gpt-5.5' not found after connecting to Ollama | Model routing / Ollama |
| #30639 | 2026-06-30T01:01:20Z | @nathanjohnpayne | Codex Desktop (macOS): Chronicle runs continuous background screen-recording summaries every 10 min, | Unwanted background screen capture (Computer Use adjacent) |
| #30624 | 2026-06-29T21:22:54Z | @wmmalcolm | Codex Desktop freezes when using Browser plug-in / in-app browser; repeated app-server handshake tim | Browser Use / in-app browser freeze |
| #30623 | 2026-06-29T20:59:44Z | @ramonchavez | Remote Control-created target thread hits Chrome Browser Use enterprise-policy block while target-lo | **Chrome Browser Use enterprise-policy block** — strong symptom match |
| #30619 | 2026-06-29T20:19:35Z | @duckSquirrelPilot | Hitbox (click area) of the window control macos buttons are too small | macOS UI / click area |
| #30616 | 2026-06-29T19:38:47Z | @alessandroseni | SSH remote project automations should run on the remote host while the local Codex app is offline | Remote automation gap |
| #30613 | 2026-06-29T19:24:39Z | @emmaguo13 | I am on an unlimited enterprise account but I hit usage limits. | Enterprise usage limit |
| #30608 | 2026-06-29T17:56:23Z | @GGBondBlueWhale | [macOS] Codex Computer Use damaged and verification hangs after 26.623.70822 update | **Direct match: Computer Use damaged + verification hang post-update** |
| #30605 | 2026-06-29T17:16:39Z | @truth1ness | In-app browser screenshot capture times out when Codex app is minimized | Screenshot / Computer Use capture timeout |
| #30602 | 2026-06-29T16:48:07Z | @leoliupei | Codex Desktop on macOS becomes completely unable to accept input (total lock-out); only Force Quit r | macOS input lock-out |
| #30600 | 2026-06-29T16:10:30Z | @GagaM88 | Codex VS Code extension crashes immediately with "Custom tool call output is missing" (SIGTRAP) | SIGTRAP / tool-call crash |
| #30595 | 2026-06-29T15:23:52Z | @ghz0319 | macOS: Same ChatGPT account works on Windows but fails with X-OpenAI-Internal-Codex-Responses-Lite o | macOS auth / response header issue |
| #30591 | 2026-06-29T15:05:59Z | @rahimsyedksa | Quickly draining my limits and sent feedbacks of Codex kept thinking even after completing the assig | Usage drain / infinite thinking loop |
| #30553 | 2026-06-29T10:17:19Z | @huangdijia | Codex Desktop 26.623.61825 crashes with EXC_BREAKPOINT/SIGTRAP in CrBrowserMain on macOS 27.0 | SIGTRAP in CrBrowserMain on macOS 27 |
| #30552 | 2026-06-29T10:17:10Z | @karlr-openai | Codex Desktop exits when inherited OTEL metrics exporter config is invalid | OTEL / config crash |
| #30551 | 2026-06-29T10:11:57Z | @jeiea | Zellij rich history replay can hide the conversation tail after long URL-only lines | TUI / history rendering |
| #30545 | 2026-06-29T08:53:49Z | @wwwweeia | Chrome backend unavailable in terminal/API session: untrusted-code-signing-identity while Codex App | **Untrusted code-signing / Computer Use backend unavailable** — strong symptom match |
| #30542 | 2026-06-29T08:19:33Z | @dezchai | Codex Desktop freezes while running new-worktree environment setup command | Worktree setup freeze |
| #30535 | 2026-06-29T07:23:39Z | @016 | Browswer/Chrome Plugin is not working with VSCode Ext | Browser/Chrome plugin + VSCode |
| #30532 | 2026-06-29T06:41:20Z | @yuanli-1 | Codex App composer cannot be focused after opening from Codex Pet notification bubble on macOS | macOS focus/focus-stealing bug |
| #30524 | 2026-06-29T04:15:37Z | @jakyeamos | Codex Desktop intermittently corrupts structured tool-call arguments, with related Computer Use app- | **Direct match: Computer Use app + tool-call argument corruption** |
| #30523 | 2026-06-29T04:01:49Z | @qiren7251-cpu | Codex Desktop custom provider app/dynamic tools end turns without function_call after automation_upd | Automation/dynamic tools regression |
| #30520 | 2026-06-29T03:47:01Z | @yky95 | Remote SSH conversation history disappears from sidebar after Codex Desktop update/restart | SSH / history persistence |
| #30517 | 2026-06-29T03:30:27Z | @darlingm | Current CLI startup can stall before the TUI prompt when logs_2.sqlite/WAL is large or busy | CLI startup stall / SQLite WAL |

**Highest-priority candidates** (direct Computer Use / macOS symptom match):
- **#30608** — `[macOS] Codex Computer Use damaged and verification hangs` — best asset match for `computer-use-plugin-unavailable.html` and `troubleshooting.html`
- **#30524** — `Computer Use app-` + tool-call argument corruption on Desktop
- **#30545** — `untrusted-code-signing-identity` blocking Chrome backend (mirrors root cause in #21579 / #22927)
- **#30623** — `Chrome Browser Use enterprise-policy block` — Browser Use variant

---

## Posted rows scanned

**0 rows scanned** (0 issues checked for replies).

All 3 openai/codex posted rows in lead-log.md (#22927, #22949, #18803) are dated **2026-05-18**, which is 43 days before today (2026-06-30) and falls outside the 7-day scan window (2026-06-23 – 2026-06-30). No reply checks were performed.

Full set of posted openai/codex rows in lead-log.md (for reference):
- #22927 — posted 2026-05-18 (outside window)
- #22949 — posted 2026-05-18 (outside window)
- #18803 — posted 2026-05-18 (outside window)
