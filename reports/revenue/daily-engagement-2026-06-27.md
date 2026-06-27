# Daily Engagement Report — 2026-06-27

## Replies needing follow-up

No new replies in the last 7 days.

> **Scan note:** Two openai/codex issues with Status=POSTED exist in lead-log.md (#22927, #22949, and #18803), but all are dated 2026-05-18 — 40 days before today. None fall within the required 7-day window (2026-06-20 → 2026-06-27), so step 3 reply-check was not executed for any issue.

---

## New on-target open issues (not yet commented)

| # | createdAt | Author | Title (first 100 chars) | Likely symptom match |
|---|---|---|---|---|
| [#30049](https://github.com/openai/codex/issues/30049) | 2026-06-25 | @terry1231 | Computer Use missing in Settings and Codex Computer Use helper is not installed | **STRONG** — direct Computer Use install failure on macOS |
| [#30298](https://github.com/openai/codex/issues/30298) | 2026-06-26 | @SatyDasKap | macOS: Codex 26.623.31921 still has invalid signatures and restores Computer Use notify hook despite | **STRONG** — Computer Use notify hook + invalid code signatures on macOS |
| [#30075](https://github.com/openai/codex/issues/30075) | 2026-06-25 | @lolychee | Codex App remote control authorization fails on Intel Macs without Secure Enclave (OSStatus -25293) | **MEDIUM** — Intel Mac authorization failure (overlaps Computer Use permission flow) |
| [#30053](https://github.com/openai/codex/issues/30053) | 2026-06-25 | @ren2856017951-spec | macOS Codex Desktop leaks ~1.3GB code_sign_clone cache on every app launch | **MEDIUM** — code signing cache leak; related to Computer Use helper install path |
| [#30248](https://github.com/openai/codex/issues/30248) | 2026-06-26 | @Mohammad-Orabi | Codex Desktop macOS spins at 100% on launch from one ACTIVE heartbeat automation RRULE | macOS launch hang |
| [#30346](https://github.com/openai/codex/issues/30346) | 2026-06-27 | @Linxinrong8023 | Codex Desktop on macOS frequently becomes unable to type in the composer after switching away to ano | macOS composer focus loss |
| [#30324](https://github.com/openai/codex/issues/30324) | 2026-06-27 | @prashantabisht-alt | Codex macOS app composer stops accepting keyboard input after running for some time | macOS keyboard input drop |
| [#30353](https://github.com/openai/codex/issues/30353) | 2026-06-27 | @flamaso | Codex app plan-mode questions are truncated and unreadable on macOS | macOS rendering |
| [#30263](https://github.com/openai/codex/issues/30263) | 2026-06-26 | @mediarl | Prompt textarea becomes disabled after several prompts on macOS, requiring app restart | macOS textarea freeze |
| [#30359](https://github.com/openai/codex/issues/30359) | 2026-06-27 | @perlakell-hue | Codex Desktop Crash - June 27, 2026 | macOS crash (SIGKILL on bundled process) |
| [#30357](https://github.com/openai/codex/issues/30357) | 2026-06-27 | @vladtsap | Excessive consumption of the limit: -13% for the "ping" message | quota/limit issue |
| [#30351](https://github.com/openai/codex/issues/30351) | 2026-06-27 | @chenlonggit333 | 401 Unauthorized Missing scopes: api.responses.write(Codex App and Codex CLI fail after signing in | auth scopes regression |
| [#30348](https://github.com/openai/codex/issues/30348) | 2026-06-27 | @Win1leven | Bug Report: Unable to Create New Conversations in Codex Desktop (thread/start Timeout) | Desktop threading timeout |
| [#30340](https://github.com/openai/codex/issues/30340) | 2026-06-27 | @ZhongBintao | Codex App sidebar icons look blurry after latest update on Retina display | Retina display rendering |
| [#30321](https://github.com/openai/codex/issues/30321) | 2026-06-27 | @iAchilles | PR status panel stops updating after a new push to the same PR | PR panel staleness |
| [#30312](https://github.com/openai/codex/issues/30312) | 2026-06-26 | @xulong-jia | Archived chats page is empty even though archived threads exist in state_5.sqlite | sqlite state desync |
| [#30306](https://github.com/openai/codex/issues/30306) | 2026-06-26 | @leonaburime-ucla | codex-cli 0.142.3 still crashes with Trace/BPT trap: 5 (SIGTRAP) on tool calls (web_search + shell | CLI crash on tool calls |
| [#30251](https://github.com/openai/codex/issues/30251) | 2026-06-26 | @Mareng98 | Windows sandbox state file corrupted with NUL bytes, causing repeated ACL/permission failures | Windows sandbox (off-target) |
| [#30236](https://github.com/openai/codex/issues/30236) | 2026-06-26 | @willcui1988-sys | Codex App writes high-volume TRACE logs to logs_2.sqlite despite RUST_LOG=warn | logging verbosity |
| [#30211](https://github.com/openai/codex/issues/30211) | 2026-06-26 | @munila | turn/start failed in TUI when network.enabled = true is enabled in requirements.toml | TUI network mode failure |
| [#30208](https://github.com/openai/codex/issues/30208) | 2026-06-26 | @Madmatte | Dictation keyboard shortcut now requires being held instead of toggling recording | dictation regression |
| [#30203](https://github.com/openai/codex/issues/30203) | 2026-06-26 | @guidedways | Sub-Agent listing is not chronologically sorted | UI sort order |
| [#30195](https://github.com/openai/codex/issues/30195) | 2026-06-26 | @mibeon | Missing translations | i18n |
| [#30166](https://github.com/openai/codex/issues/30166) | 2026-06-26 | @gaussguan | Unexpected Codex usage attribution and rapid quota drain with VS Code Remote-SSH; Exec shown althoug | quota attribution |
| [#30125](https://github.com/openai/codex/issues/30125) | 2026-06-25 | @alamorre | MCP bearer-token env var appears configured even when missing from active process | MCP auth env var |
| [#30096](https://github.com/openai/codex/issues/30096) | 2026-06-25 | @whitford-olmst | Plugins by Developer not working - Plugins appear as Personal instead | plugin attribution |
| [#30081](https://github.com/openai/codex/issues/30081) | 2026-06-25 | @ArvenWang | Pro 5x subscription ended early and quota is draining while idle after renewal | quota/billing |
| [#30072](https://github.com/openai/codex/issues/30072) | 2026-06-25 | @zulinx86 | Streaming persists cumulative snapshots as duplicate messages in CLI | CLI streaming dupe |
| [#30058](https://github.com/openai/codex/issues/30058) | 2026-06-25 | @alibrohde | Codex Desktop read_thread schema allows turnLimit, but values above 10 are rejected | schema validation |
| [#30056](https://github.com/openai/codex/issues/30056) | 2026-06-25 | @PoirotJin | Codex IDE extension freezes Ubuntu by repeatedly spawning codex-linux-sandbox / bash probe processes | Linux sandbox (off-target) |

**Priority targets for next comment draft:** #30049 and #30298 are direct Computer Use macOS matches; #30075 (Intel Mac auth) is a medium match overlapping the troubleshooting.html + computer-use-plugin-unavailable.html asset set.

---

## Posted rows scanned

**0 issues checked for replies** (filter: Status=Posted or Follow-up posted, URL contains `github.com/openai/codex/issues/`, Date within last 7 days of 2026-06-27).

All POSTED openai/codex entries in lead-log.md are dated **2026-05-18** (40 days ago), outside the 7-day window:

| Issue | Date | Status in log |
|---|---|---|
| [#18803](https://github.com/openai/codex/issues/18803) | 2026-05-18 | POSTED (Comment: 4480934144) |
| [#22927](https://github.com/openai/codex/issues/22927) | 2026-05-18 | POSTED (Comment: 4480331215) |
| [#22949](https://github.com/openai/codex/issues/22949) | 2026-05-18 | POSTED (Comment: 4480978482) |
