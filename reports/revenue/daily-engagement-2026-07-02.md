# Daily Engagement Report — 2026-07-02

## Replies needing follow-up

No new replies in the last 7 days.

> Note: 2 issues (#22927, #22949) were found with `POSTED` status and `openai/codex` URLs in `lead-log.md`, but both are dated 2026-05-18 — outside the 7-day lookback window (2026-06-25 → 2026-07-02). No reply-checking was performed for those.

---

## New on-target open issues (not yet commented)

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|---|---|---|---|
| #30921 | 2026-07-02 | @736773174 | Custom GPT endpoint cannot use Imagen (The built-in image_gen tool described by the skill is not exp | unrelated (Imagen/ChatGPT) |
| #30920 | 2026-07-02 | @hauomu | Codex Desktop ARM64 Windows idles at ~10% CPU in main process | unrelated (Windows/CPU) |
| #30916 | 2026-07-02 | @Quentin-BRG | Desktop never resumes threads that appear while the app is running (created by an external app-serve | possible Computer Use / app-server integration |
| #30914 | 2026-07-02 | @wed0n | Pasting emoji crashes Codex app on macOS | macOS crash — minor relevance |
| #30908 | 2026-07-02 | @GGBondBlueWhale | Codex Desktop updater repeatedly fails on macOS with installer/updater error dialogs | macOS install failure |
| #30902 | 2026-07-02 | @sunwei-yhc | MCP unsupported call | unrelated (MCP) |
| #30892 | 2026-07-02 | @StarrHuang | Codex CLI login blocked — phone verification shows unknown foreign number (not mine) | unrelated (auth) |
| #30891 | 2026-07-02 | @ZLI0407 | Codex macOS desktop renderer crash loop in 149.0.7827.197 | macOS renderer crash |
| #30890 | 2026-07-02 | @GGBondBlueWhale | Codex Desktop: long-running /goal abruptly fails with {"detail":"Bad Request"} and interrupts the ta | unrelated (goal API) |
| #30889 | 2026-07-02 | @precisionforge | Codex Desktop Chrome bridge unavailable: node_repl missing and process launch fails | **Computer Use / browser bridge failure on macOS** |
| #30874 | 2026-07-01 | @Perdolique | Can't stage PNG files | unrelated (git staging) |
| #30873 | 2026-07-01 | @adpena | Codex App on Windows crashes after legacy_notify hits os error 206 | unrelated (Windows) |
| #30857 | 2026-07-01 | @Hanchstar | Codex macOS app toolbar no longer shows environments, and Open with only shows Finder | macOS UI regression |
| #30847 | 2026-07-01 | @adpena | Windows Desktop crash when write_stdin interrupt hits unsupported unified exec backend | unrelated (Windows) |
| #30846 | 2026-07-01 | @johnsilvavlogs | Computer Use fails to start ScreenCaptureKit stream with SCStreamErrorDomain -3811 | **STRONG MATCH — Computer Use startup failure, macOS ScreenCaptureKit** |
| #30842 | 2026-07-01 | @wantseeplanbe | Token drain issue w/ multiple agents | unrelated (token usage) |
| #30824 | 2026-07-01 | @kerimala | Codex Desktop 26.623.81905 crashes with EXC_BREAKPOINT/SIGTRAP in FSEvents uv__fsevents_close and le | macOS FSEvents crash |
| #30818 | 2026-07-01 | @sharkvan | Codex crashed when starting to scan code. | generic crash |
| #30814 | 2026-07-01 | @OferTiber | Codex Desktop /pet overlay often omits current task bubble | unrelated (UI) |
| #30813 | 2026-07-01 | @htregidgo | CLI: /agent lists active subagents but provides no thread selector | unrelated (CLI) |
| #30810 | 2026-07-01 | @AlwinGarside | Codex CLI randomly crashes in Supacode | unrelated (CLI) |
| #30807 | 2026-07-01 | @ShenXiexs | com.openai.codex.code_sign_clone temporary directories are never cleaned up on macOS | macOS filesystem — minor relevance |
| #30803 | 2026-07-01 | @singularitti | Dropdown text overflows after selecting "CMD + Enter for multiline prompts" in "Send shortcut" setti | unrelated (UI) |
| #30797 | 2026-07-01 | @jsleemaster | Computer Use get_app_state for Chrome returns cgWindowNotFound while Chrome is running | **STRONG MATCH — Computer Use app-state query fails on macOS (cgWindowNotFound)** |
| #30768 | 2026-06-30 | @jiadizhunine | Codex Desktop keeps showing Dictation floating window despite keep-visible disabled | macOS accessibility / minor |
| #30763 | 2026-06-30 | @kpozin | Permission question always cut off | unrelated (UI) |
| #30754 | 2026-06-30 | @chenayer | Codex Desktop: unified exec process fails after plugin manifest crash | possible Computer Use / exec layer |
| #30753 | 2026-06-30 | @aidawilliam41-ops | Windows Desktop 26.623 starts duplicate MCP pools after RefreshMcpServers on hidden thread | unrelated (Windows/MCP) |
| #30728 | 2026-06-30 | @oorangee97 | Codex Desktop 26.623 on macOS: context-window usage indicator missing despite show-context-window-us | macOS UI regression |
| #30727 | 2026-06-30 | @zhatlas | Codex Desktop New remote project omits Windows remote-control host while mobile ChatGPT can control | unrelated (Windows) |

**Priority targets (Computer Use + macOS):**
- **#30846** (`@johnsilvavlogs`) — ScreenCaptureKit stream failure on macOS; direct Computer Use startup symptom
- **#30797** (`@jsleemaster`) — `cgWindowNotFound` in `get_app_state`; core Computer Use macOS signal
- **#30889** (`@precisionforge`) — Chrome bridge / node_repl failure; likely Computer Use browser automation path

---

## Posted rows scanned

**0 rows scanned** (0 issue numbers checked for replies).

Context: `lead-log.md` contains 2 POSTED rows with `openai/codex` URLs (#22927, #22949), both dated 2026-05-18. Both fall outside the 7-day lookback window ending 2026-07-02. No reply-check was performed.

All-time POSTED issues on `openai/codex` in log: `#22927`, `#22949`
