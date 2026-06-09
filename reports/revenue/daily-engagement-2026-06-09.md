# Daily Engagement Report — 2026-06-09

## Replies needing follow-up

No new replies in the last 7 days.

_(The two posted `openai/codex` rows in `lead-log.md` — issues #22927 and #22949 — were both posted on 2026-05-18, which is 22 days before today and outside the 7-day scan window. Additionally, the GitHub MCP session is restricted to `igorganapolsky/openclaw-mac-ai-workstation-setup`; individual comment lookups on `openai/codex` were denied. See **## Errors** below.)_

---

## New on-target open issues (not yet commented)

Search: `Computer Use macOS repo:openai/codex state:open` — 1136 total matches; top 30 shown (sorted by created desc, all new relative to `lead-log.md`).

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|-----------|---------|-------------------------|----------------------|
| #27176 | 2026-06-09T11:57:20Z | @ZhiYiTree | Computer Use plugin missing after reinstall on macOS Intel | **HIGH** — plugin-unavailable, exact match to `computer-use-plugin-unavailable.html` |
| #27164 | 2026-06-09T10:23:43Z | @jackwjtaylor | Codex Desktop: runaway memory/swap during Computer Use dev task on macOS (M4/16G) | **MED** — Computer Use + macOS resource exhaustion |
| #27163 | 2026-06-09T10:23:36Z | @sstto | Chat input sometimes stops accepting Korean IME input | LOW — IME/input, not Computer Use |
| #27149 | 2026-06-09T08:31:09Z | @AnaisHeaney | gpt-5.5 capacity errors and recovered session returns with only ~60-70% context | LOW — model capacity, not Computer Use |
| #27148 | 2026-06-09T08:25:59Z | @igbenic | Stuck at Thinking | LOW — generic hang |
| #27142 | 2026-06-09T07:16:58Z | @mauriciorubio2 | Codex burning through tokens/credits like a mad dog | LOW — token usage |
| #27136 | 2026-06-09T06:50:39Z | @constansino | Codex Desktop macOS high CPU: orphan Crashpad from installer volume plus respawn loop | MED — macOS installer/process issue |
| #27134 | 2026-06-09T06:47:31Z | @agulaliev | Take approve or not for full access | LOW — permissions ambiguous |
| #27131 | 2026-06-09T06:12:25Z | @tutadeploy | Codex self-ingests local session JSONL logs during token-usage investigation, causes context bloat | LOW — log ingestion |
| #27104 | 2026-06-09T01:37:20Z | @0xdevalias | Codex Desktop does not restore previously open windows after restart or update | LOW — window restore |
| #27052 | 2026-06-08T20:28:43Z | @Fearvox | Hook failure messages should identify the failing hook and expose diagnostics | LOW — DX/tooling |
| #27046 | 2026-06-08T19:26:21Z | @drewclifton | [Multi-Device Remote] File viewer shows "Unable to load file" on macOS client connected to Linux | MED — macOS remote session |
| #27029 | 2026-06-08T17:49:41Z | @snoozy | `trunk` not recognized as a default git branch with /review | LOW — git/review |
| #27028 | 2026-06-08T17:25:49Z | @codelabyz | Codex Free to Pro does set proper Codex quotas in the account | LOW — billing/quota |
| #27021 | 2026-06-08T16:33:54Z | @mayuhang2008-byte | macOS Codex: gpt-5.5 returns 404 Model not found while gpt-5.4 works | MED — macOS + model routing |
| #26988 | 2026-06-08T11:34:03Z | @kimptoc | Codex CLI 0.137.0 crashes with V8 fatal error on macOS 12.7.6 Intel x86_64 | MED — macOS Intel crash, relevant to Intel-Mac audience |
| #26984 | 2026-06-08T11:10:00Z | @jacobcxdev | MCP stdio servers leak pipe fds + orphan child processes → cumulative EMFILE ("Too many open files") | LOW — MCP/process leak |
| #26980 | 2026-06-08T10:10:58Z | @inoway46 | Codex App terminal: git log shows Japanese UTF-8 commit messages as garbled escape sequences | LOW — encoding |
| #26978 | 2026-06-08T09:51:31Z | @coocostory | The Windows Codex client cannot remotely control the macOS Codex client. | MED — macOS remote control |
| #26943 | 2026-06-08T03:59:43Z | @alesscyc | [Bug] Collapsed sidebar hover reveal does not work while Settings is open | LOW — UI bug |
| #26931 | 2026-06-08T02:08:04Z | @chrisblattman | Codex Desktop: PDF annotation toolbar appears from assistant file link but not from user file link | LOW — PDF UI |
| #26913 | 2026-06-07T20:45:24Z | @osman-s | YOU GUYS HAVE FORCED XCODE TO ONLY SUPPORT Codex 0.129.0-alpha.9 WHICH HAS BROKEN… | MED — Xcode/macOS integration |
| #26908 | 2026-06-07T19:46:36Z | @treyo1-ui | Codex desktop input freeze | LOW — input freeze |
| #26887 | 2026-06-07T14:25:29Z | @gainaixiaobing | Computer Use plugin: all action tools fail with 'not active' due to framework session drop | **HIGH** — Computer Use plugin 'not active' exact match to `troubleshooting.html` / #21579 root cause |
| #26885 | 2026-06-07T13:50:40Z | @boqian001 | compact bug | LOW — unspecific |
| #26884 | 2026-06-07T13:37:22Z | @guitaraaa | Codex App repeatedly crashes in git worker with node::OOMErrorHandler on macOS | MED — macOS OOM crash |
| #26869 | 2026-06-07T09:46:36Z | @andersaamodt | Codex Desktop app-server leaks child processes and writes excessive logs after Computer Use session | **HIGH** — Computer Use session + macOS process leak |
| #26863 | 2026-06-08T08:23:39Z | @dansanduleac | Codex App crashes reliably when opening new tab then navigating back in the in-app browser | LOW — browser nav crash |
| #26858 | 2026-06-07T07:03:29Z | @christianschleifer | Newlines from $VISUAL get lost in TUI rendering | LOW — TUI/editor |
| #26856 | 2026-06-07T06:55:15Z | @andrewli81 | [Bug][macOS 26.602][Mac Codex App] Composer controls and config-backed settings reset on update | MED — macOS settings reset on update |

**Priority candidates for substantive follow-up comment (HIGH matches):**
- **#27176** — `@ZhiYiTree` — plugin missing after reinstall, Intel Mac → cross-reference #21579 marketplace-regeneration + `computer-use-plugin-unavailable.html`
- **#26887** — `@gainaixiaobing` — all action tools 'not active', framework session drop → same root-cause cluster as #22927/#22949/#21579
- **#26869** — `@andersaamodt` — child process leak after Computer Use session → new symptom variant; mention `troubleshooting.html` + diagnostics

---

## Posted rows scanned

2 `openai/codex` rows found in `lead-log.md` with Status **POSTED**:

| Issue | Date posted | Within 7-day window? |
|-------|-------------|----------------------|
| #22927 | 2026-05-18 | No (22 days ago) |
| #22949 | 2026-05-18 | No (22 days ago) |

Both are outside the 7-day scan window (cutoff: 2026-06-02). No reply-check data is available for either (see Errors).

---

## Errors

1. **`openai/codex` issue comment reads blocked** — The GitHub MCP session is scoped to `igorganapolsky/openclaw-mac-ai-workstation-setup` only. Calls to `mcp__github__issue_read` for `openai/codex` issues #22927 and #22949 returned: `Access denied: repository "openai/codex" is not configured for this session.` Replies on those issues (if any) could not be retrieved. Manual check at https://github.com/openai/codex/issues/22927 and https://github.com/openai/codex/issues/22949 is required.

2. **`gh` CLI unavailable** — `gh` is not installed in this remote execution environment. All GitHub operations fell back to MCP tools.

3. **Reply detection skipped** — Because both posted rows fall outside the 7-day window AND individual comment reads were blocked, the "Replies needing follow-up" section could not be populated even for historical reference.
