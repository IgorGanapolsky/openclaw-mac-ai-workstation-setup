# Daily Engagement Report — 2026-06-28

## Replies needing follow-up

No new replies in the last 7 days.

> **Reason:** Posted rows in `lead-log.md` that reference `github.com/openai/codex/issues/` are dated 2026-05-18 (issues #22927, #22949) and 2026-05-18 (issue #18803). All are 41 days old — outside the 7-day scan window (2026-06-21 → 2026-06-28). No rows with status `Posted` or `Follow-up posted` exist within the window.

---

## New on-target open issues (not yet commented)

Search: `Computer Use macOS repo:openai/codex state:open` — 1,442 total matches; top 30 shown.

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|---|---|---|---|
| #30368 | 2026-06-27 | @PureBlueFrank | Locked Computer Use cannot be enabled on Intel Mac (SecurityAgent Plugin missing) | **STRONG** — Intel Mac + Computer Use + plugin/SecurityAgent |
| #30298 | 2026-06-26 | @SatyDasKap | macOS: Codex 26.623.31921 still has invalid signatures and restores Computer Use notify hook despite | **STRONG** — macOS + Computer Use hook restoration after fix |
| #30248 | 2026-06-26 | @Mohammad-Orabi | Codex Desktop macOS spins at 100% on launch from one ACTIVE heartbeat automation RRULE | macOS launch hang; possible Computer Use / automation conflict |
| #30346 | 2026-06-27 | @Linxinrong8023 | Codex Desktop on macOS frequently becomes unable to type in the composer after switching away to ano | macOS compositor focus regression |
| #30324 | 2026-06-27 | @prashantabisht-alt | Codex macOS app composer stops accepting keyboard input after running for some time | macOS keyboard-input hang |
| #30353 | 2026-06-27 | @flamaso | Codex app plan-mode questions are truncated and unreadable on macOS | macOS rendering / UI truncation |
| #30377 | 2026-06-27 | @tsukumijima | Primary runtime @oai/artifact-tool eagerly loads all user fonts on macOS, causing multi-GB Node memo | macOS memory bloat (font loading) |
| #30386 | 2026-06-27 | @davidronquillo | ChatGPT iOS Codex remote access does not show existing macOS Codex Desktop project thread | macOS ↔ iOS project-thread sync |
| #30263 | 2026-06-26 | @mediarl | Prompt textarea becomes disabled after several prompts on macOS, requiring app restart | macOS input-field disable bug |
| #30340 | 2026-06-27 | @ZhongBintao | Codex App sidebar icons look blurry after latest update on Retina display | macOS Retina rendering regression |
| #30359 | 2026-06-27 | @perlakell-hue | Codex Desktop Crash - June 27, 2026 | macOS Desktop crash (date-stamped) |
| #30367 | 2026-06-27 | @feliche93 | Codex Desktop fresh non-PTY shell calls cause repeated 1Password CLI (op) biometric reauthorization | macOS shell-auth / Computer Use adjacent |
| #30446 | 2026-06-28 | @kentprimrose | codex app \<path\> launches Desktop but opens the previously used workspace instead of the requested o | macOS workspace routing |
| #30438 | 2026-06-28 | @FYZAFH | After upgrading account from free to pro, the dialogue shows that the quota has been exhausted. | quota display bug (cross-platform) |
| #30428 | 2026-06-28 | @kangmingxuan | Windows app stutters when switching chats or opening Settings | Windows — low relevance |
| #30427 | 2026-06-28 | @dazuiba | [Bug] it currently defaults to use "fast" mode in gpt 5.5 subagent . | model-speed default regression |
| #30422 | 2026-06-28 | @ghz0319 | This model is not supported when using X-OpenAI-Internal-Codex-Responses-Lite. | internal header / model routing |
| #30410 | 2026-06-28 | @SauloEdu | Bug: Chat history not loading and unable to start new chats | chat history / DB regression |
| #30407 | 2026-06-28 | @gakkunn | Codex App subagents appear to use Fast mode despite Standard speed and fast opt-out | subagent speed setting ignored |
| #30400 | 2026-06-28 | @guidedways | Bug: Sub-agents occasionally get stuck indefinitely | subagent hang (cross-platform) |
| #30321 | 2026-06-27 | @iAchilles | PR status panel stops updating after a new push to the same PR | git/PR panel stale state |
| #30351 | 2026-06-27 | @chenlonggit333 | 401 Unauthorized Missing scopes: api.responses.write (Codex App and Codex CLI fail after signing in | auth scope regression |
| #30357 | 2026-06-27 | @vladtsap | Excessive consumption of the limit: -13% for the "ping" message | token-quota accounting bug |
| #30348 | 2026-06-27 | @Win1leven | Bug Report: Unable to Create New Conversations in Codex Desktop (thread/start Timeout) | thread-start timeout (macOS Desktop) |
| #30312 | 2026-06-26 | @xulong-jia | Archived chats page is empty even though archived threads exist in state_5.sqlite | sqlite / state-file regression |
| #30306 | 2026-06-26 | @leonaburime-ucla | codex-cli 0.142.3 still crashes with Trace/BPT trap: 5 (SIGTRAP) on tool calls (web_search + shell) | CLI crash on tool calls |
| #30251 | 2026-06-26 | @Mareng98 | Windows sandbox state file corrupted with NUL bytes, causing repeated ACL/permission failures | Windows — low relevance |
| #30236 | 2026-06-26 | @willcui1988-sys | Codex App writes high-volume TRACE logs to logs_2.sqlite despite RUST_LOG=warn | log-volume bug |
| #30211 | 2026-06-26 | @munila | turn/start failed in TUI when network.enabled = true is enabled in requirements.toml | TUI network-flag regression |
| #30208 | 2026-06-26 | @Madmatte | Dictation keyboard shortcut now requires being held instead of toggling recording | macOS dictation shortcut regression |

**Top-priority candidates for next outreach round:** #30368 (Intel Mac + Computer Use / SecurityAgent) and #30298 (macOS + Computer Use notify hook) are the strongest symptom matches for the existing asset set (`computer-use-plugin-unavailable.html`, `codex-computer-use-intel-mac.html`).

---

## Posted rows scanned

**0 rows** fell within the 7-day scan window (2026-06-21 → 2026-06-28).

The following `openai/codex` issues appear in `lead-log.md` with `Posted` or `Edited` status but are **outside** the window (all dated 2026-05-18):

| Issue | Status in log | Days since post |
|---|---|---|
| #18803 | POSTED / EDITED (Comment 4480934144) | 41 |
| #22927 | POSTED (Comment 4480331215) | 41 |
| #22949 | POSTED (Comment 4480978482) | 41 |

No reply-check was performed (no issues within window to check).

---

*Generated by read-only engagement monitor · 2026-06-28T00:00Z*
