# Daily Engagement Report — 2026-06-08

## Replies needing follow-up

No new replies in the last 7 days.

_Reason: The three posted openai/codex issues in lead-log.md (#22927, #22949, #18803) were all posted on 2026-05-18, which is 21 days before today and outside the 7-day scan window (2026-06-01 – 2026-06-08). No qualifying rows exist to check for replies._

---

## New on-target open issues (not yet commented)

Search: `repo:openai/codex Computer Use macOS state:open` — 30 results, all new (none appear in lead-log.md).

Issues marked **[CU+macOS]** are direct symptom matches to the existing Computer Use / Intel Mac outreach theme.

| # | createdAt | @author | title (first 100 chars) | symptom match |
|---|---|---|---|---|
| [#26887](https://github.com/openai/codex/issues/26887) | 2026-06-07 | @gainaixiaobing | Computer Use plugin: all action tools fail with 'not active' due to framework session model conflict | **[CU+macOS]** "not active" error — same class as #22927/#22949 |
| [#26842](https://github.com/openai/codex/issues/26842) | 2026-06-07 | @humanfy | Intel macOS x64 26.602.40724 still missing computer-use helper for Appshots and Locked use | **[CU+macOS]** Intel Mac missing helper — direct match to prior outreach angle |
| [#26743](https://github.com/openai/codex/issues/26743) | 2026-06-06 | @be-student | Codex Desktop: Locked Computer Use stays on loginwindow; app GUI access returns cgWindowNotFound whi | **[CU+macOS]** Locked CU / loginwindow / cgWindowNotFound — accessibility permission failure |
| [#26738](https://github.com/openai/codex/issues/26738) | 2026-06-06 | @chenyh200807 | Codex Desktop Computer Use can trigger memory runaway to 172GB on macOS | **[CU+macOS]** Memory runaway during Computer Use on macOS |
| [#26735](https://github.com/openai/codex/issues/26735) | 2026-06-06 | @qtu1053-dev | [Windows] Browser and Computer Use disabled for personal Plus trial account; availability resolves s | Computer Use availability/entitlement (Windows-primary but shared infra) |
| [#26988](https://github.com/openai/codex/issues/26988) | 2026-06-08 | @kimptoc | Codex CLI 0.137.0 crashes with V8 fatal error on macOS 12.7.6 Intel x86_64 | Intel macOS crash — adjacent to CU helper missing on Intel |
| [#26984](https://github.com/openai/codex/issues/26984) | 2026-06-08 | @jacobcxdev | MCP stdio servers leak pipe fds + orphan child processes → cumulative EMFILE ("Too many open files" | MCP infra — related to computer-use plugin startup failures |
| [#26980](https://github.com/openai/codex/issues/26980) | 2026-06-08 | @inoway46 | Codex App terminal: git log shows Japanese UTF-8 commit messages as <E6><...> when locale env vars | macOS locale/env — off-topic for CU |
| [#26978](https://github.com/openai/codex/issues/26978) | 2026-06-08 | @coocostory | The Windows Codex client cannot remotely control the macOS Codex client. | macOS remote control — adjacent to CU |
| [#26943](https://github.com/openai/codex/issues/26943) | 2026-06-08 | @alesscyc | [Bug] Collapsed sidebar hover reveal does not work while Settings is open | UI bug — off-topic |
| [#26931](https://github.com/openai/codex/issues/26931) | 2026-06-08 | @chrisblattman | Codex Desktop: PDF annotation toolbar appears from assistant file link but not file sidebar | UI bug — off-topic |
| [#26913](https://github.com/openai/codex/issues/26913) | 2026-06-07 | @osman-s | YOU GUYS HAVE FORCED XCODE TO ONLY SUPPORT Codex 0.129.0-alpha.9 WHICH HAS BROKEN LOGIN | macOS Xcode integration / login — off-topic |
| [#26908](https://github.com/openai/codex/issues/26908) | 2026-06-07 | @treyo1-ui | Codex desktop input freeze | macOS — off-topic |
| [#26885](https://github.com/openai/codex/issues/26885) | 2026-06-07 | @boqian001 | compact bug | off-topic |
| [#26884](https://github.com/openai/codex/issues/26884) | 2026-06-07 | @guitaraaa | Codex App repeatedly crashes in git worker with node::OOMErrorHandler on macOS | macOS crash — off-topic |
| [#26869](https://github.com/openai/codex/issues/26869) | 2026-06-07 | @andersaamodt | Codex Desktop app-server leaks child processes and writes excessive logs after crash/restart | macOS process leak — off-topic |
| [#26863](https://github.com/openai/codex/issues/26863) | 2026-06-07 | @dansanduleac | Codex App crashes reliably when opening new tab then navigating back in the in-app Browser | browser crash — off-topic |
| [#26858](https://github.com/openai/codex/issues/26858) | 2026-06-07 | @christianschleifer | Newlines from $VISUAL get lost in TUI rendering | TUI — off-topic |
| [#26856](https://github.com/openai/codex/issues/26856) | 2026-06-07 | @andrewli81 | [Bug][macOS 26.602][Mac Codex App] Composer controls and config-backed settings receive clicks but s | macOS UI — off-topic |
| [#26854](https://github.com/openai/codex/issues/26854) | 2026-06-07 | @EricYuan1201 | Android ChatGPT Codex mobile stuck on Waiting for desktop; environments API returns 403 type=dc whi | mobile — off-topic |
| [#26850](https://github.com/openai/codex/issues/26850) | 2026-06-07 | @shahrul91 | Codex Desktop macOS crash/blank threads when remote feature flag enables unknown `thread_tools` feat | macOS crash — off-topic |
| [#26843](https://github.com/openai/codex/issues/26843) | 2026-06-07 | @jason5545 | Codex Desktop long-running goal caused 137GB disk writes, WindowServer/FileProvider/CoreSpotlight lo | macOS disk/resource — off-topic |
| [#26820](https://github.com/openai/codex/issues/26820) | 2026-06-06 | @khudt01 | CLI cannot acquire Chrome extension backend while Codex app UI works | extension — off-topic |
| [#26817](https://github.com/openai/codex/issues/26817) | 2026-06-06 | @Molozey | No launch on MacOS | macOS launch — off-topic |
| [#26816](https://github.com/openai/codex/issues/26816) | 2026-06-06 | @elite-yy | Codex bundled LibreOffice runtime is broken on macOS because it links to missing Homebrew dylibs. | macOS dylib — off-topic |
| [#26797](https://github.com/openai/codex/issues/26797) | 2026-06-06 | @hongfei5920 | Codex App leaves 1GB `Codex.app.bundle` clones in macOS temp on every launch | macOS disk — off-topic |
| [#26779](https://github.com/openai/codex/issues/26779) | 2026-06-06 | @Sankora | Bug report: Codex mobile via ChatGPT mobile app remote Mac connection tries to run powershell.exe | macOS remote — off-topic |
| [#26762](https://github.com/openai/codex/issues/26762) | 2026-06-06 | @su6 | Feature request: Support pinning and custom sorting for Codex threads in the project sidebar | feature — off-topic |
| [#26747](https://github.com/openai/codex/issues/26747) | 2026-06-06 | @Gan-lyncr | 10k TPM limit not enough | quota — off-topic |
| [#26736](https://github.com/openai/codex/issues/26736) | 2026-06-06 | @cmmchina | Codex Desktop on macOS drives high GPU only while window is visible; minimizing immediately drops us | macOS GPU — off-topic |

**Top 4 priority targets** (direct Computer Use + macOS symptom match): #26887, #26842, #26743, #26738

---

## Posted rows scanned

**3 issues found** in lead-log.md with Status=`POSTED` and URL containing `github.com/openai/codex/issues/`:

| Issue | Date posted | Status in log |
|---|---|---|
| [#22927](https://github.com/openai/codex/issues/22927) | 2026-05-18 | POSTED (Comment: 4480331215) |
| [#22949](https://github.com/openai/codex/issues/22949) | 2026-05-18 | POSTED (Comment: 4480978482) |
| [#18803](https://github.com/openai/codex/issues/18803) | 2026-05-18 | POSTED (Comment: 4480934144) |

All 3 are dated 2026-05-18 — **21 days before today**, outside the 7-day scan window (2026-06-01 – 2026-06-08).  
No reply-check was performed (nothing passed the date filter).

---

_Generated by read-only engagement monitor. No GitHub comments were posted._
