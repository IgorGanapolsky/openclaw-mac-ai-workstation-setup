# Daily Engagement Report — 2026-06-26

## Replies needing follow-up

No new replies in the last 7 days.

> **Reason:** The two Posted rows in `lead-log.md` that reference `openai/codex` issues (22927 and 22949) both carry a date of 2026-05-18 (39 days ago). The 7-day scan window is 2026-06-19 → 2026-06-26. No Posted or Follow-up-posted rows fall within that window, so there are no IgorGanapolsky comments to check for replies.

---

## New on-target open issues (not yet commented)

Issues returned by `search: "Computer Use macOS" repo:openai/codex state:open limit:30`, filtered to remove lead-log numbers (18803, 22856, 22903, 22921, 22927, 22949). All 30 results are new candidates.

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|-----------|---------|-------------------------|----------------------|
| [#30049](https://github.com/openai/codex/issues/30049) | 2026-06-25T13:39:35Z | @terry1231 | Computer Use missing in Settings and Codex Computer Use helper is not installed | **DIRECT MATCH** — exact missing-plugin symptom our pages cover |
| [#30075](https://github.com/openai/codex/issues/30075) | 2026-06-25T15:44:04Z | @lolychee | Codex App remote control authorization fails on Intel Macs without Secure Enclave (OSStatus -25293) | **STRONG MATCH** — Intel Mac Computer Use auth failure; matches `codex-computer-use-intel-mac.html` |
| [#30053](https://github.com/openai/codex/issues/30053) | 2026-06-25T14:26:55Z | @ren2856017951-spec | macOS Codex Desktop leaks ~1.3GB code_sign_clone cache on every app launch | Moderate — macOS startup issue, possible Computer Use install side-effect |
| [#30013](https://github.com/openai/codex/issues/30013) | 2026-06-25T08:43:10Z | @david123456789164 | Codex Desktop frequently hangs on macOS (Apple Silicon) during long-running tool actions | Moderate — long-running tool action hang on macOS Apple Silicon |
| [#30005](https://github.com/openai/codex/issues/30005) | 2026-06-25T06:49:56Z | @faithinker | Codex macOS app crashes on startup with EXC_BREAKPOINT/SIGTRAP in CrBrowserMain | Moderate — macOS startup crash |
| [#30006](https://github.com/openai/codex/issues/30006) | 2026-06-25T06:52:12Z | @zzzzzchg | macOS: Threads created from VS Code extension do not appear in Codex Desktop, while Desktop-created | Low — macOS sync issue, not Computer Use specific |
| [#29987](https://github.com/openai/codex/issues/29987) | 2026-06-25T04:26:47Z | @frde4c | [BUG] Codex app restarts on macOS after repeated drag actions | Low — macOS stability, not Computer Use specific |
| [#30236](https://github.com/openai/codex/issues/30236) | 2026-06-26T11:42:36Z | @willcui1988-sys | Codex App writes high-volume TRACE logs to logs_2.sqlite despite RUST_LOG=warn | Low — logging issue, not Computer Use specific |
| [#30211](https://github.com/openai/codex/issues/30211) | 2026-06-26T08:17:37Z | @munila | turn/start failed in TUI when network.enabled = true is enabled in requirements.toml | Low — TUI/network issue |
| [#30208](https://github.com/openai/codex/issues/30208) | 2026-06-26T07:50:04Z | @Madmatte | Dictation keyboard shortcut now requires being held instead of toggling recording | Low — keyboard shortcut regression |
| [#30203](https://github.com/openai/codex/issues/30203) | 2026-06-26T07:25:09Z | @guidedways | Sub-Agent listing is not chronologically sorted | Low — UI sort issue |
| [#30195](https://github.com/openai/codex/issues/30195) | 2026-06-26T06:28:45Z | @mibeon | Missing translations | Low — i18n issue |
| [#30166](https://github.com/openai/codex/issues/30166) | 2026-06-26T02:56:21Z | @gaussguan | Unexpected Codex usage attribution and rapid quota drain with VS Code Remote-SSH; Exec shown although | Low — quota/attribution issue |
| [#30125](https://github.com/openai/codex/issues/30125) | 2026-06-25T21:32:42Z | @alamorre | MCP bearer-token env var appears configured even when missing from active process | Low — MCP env var issue |
| [#30096](https://github.com/openai/codex/issues/30096) | 2026-06-25T18:00:50Z | @whitford-olmst | Plugins by Developer not working - Plugins appear as Personal instead | Low — plugin management issue |
| [#30081](https://github.com/openai/codex/issues/30081) | 2026-06-25T16:27:33Z | @ArvenWang | Pro 5x subscription ended early and quota is draining while idle after renewal | Low — billing/quota issue |
| [#30072](https://github.com/openai/codex/issues/30072) | 2026-06-25T15:28:43Z | @zulinx86 | Streaming persists cumulative snapshots as duplicate messages in CLI | Low — CLI streaming issue |
| [#30058](https://github.com/openai/codex/issues/30058) | 2026-06-25T14:58:42Z | @alibrohde | Codex Desktop read_thread schema allows turnLimit, but values above 10 are rejected | Low — API schema issue |
| [#30056](https://github.com/openai/codex/issues/30056) | 2026-06-25T14:48:29Z | @PoirotJin | Codex IDE extension freezes Ubuntu by repeatedly spawning codex-linux-sandbox / bash probe processes | Low — Linux sandbox issue, not macOS |
| [#30045](https://github.com/openai/codex/issues/30045) | 2026-06-25T13:08:44Z | @Sunnykill | Codex config.toml becomes corrupted after adding a third-party MCP app, causing configuration parsin | Low — config corruption issue |
| [#30008](https://github.com/openai/codex/issues/30008) | 2026-06-25T06:59:29Z | @murphyXu | Selected model is at capacity. Please try a different model. | Low — capacity/quota issue |
| [#30002](https://github.com/openai/codex/issues/30002) | 2026-06-25T06:12:26Z | @hahasasa | Server-side quota accounting over-reports consumption after 5h reset: Pro 5h limit burned in ~41 min | Low — quota accounting issue |
| [#29999](https://github.com/openai/codex/issues/29999) | 2026-06-25T06:00:39Z | @flacelabs | Chrome plugin cannot connect after reinstall/restart | Low — Chrome plugin connectivity |
| [#29972](https://github.com/openai/codex/issues/29972) | 2026-06-25T03:39:28Z | @safge | Windows desktop app loses composer focus and breaks Chinese IME input during thread switching | Low — Windows IME issue, not macOS |
| [#29963](https://github.com/openai/codex/issues/29963) | 2026-06-25T02:46:58Z | @cNa2017 | Codex quota consumption has a serious bug | Low — quota issue |
| [#29955](https://github.com/openai/codex/issues/29955) | 2026-06-25T02:11:47Z | @ycyyds123 | Quota drained instantly: 100 credits gone after 1 message, 5h limit reset to 0% | Low — quota issue |
| [#29948](https://github.com/openai/codex/issues/29948) | 2026-06-25T01:36:25Z | @craigsoules | Incorrect error around usage limit hit | Low — error message/quota issue |
| [#29933](https://github.com/openai/codex/issues/29933) | 2026-06-25T00:24:59Z | @MordecaiM24 | curated-plugin sync runs `git reset --hard` against the user's project repo | Low — plugin sync safety issue |
| [#29901](https://github.com/openai/codex/issues/29901) | 2026-06-24T19:42:58Z | @Cathech-ie | Codex Desktop thread stuck in inProgress/interrupted state after clear-log template message | Low — thread state issue |
| [#29873](https://github.com/openai/codex/issues/29873) | 2026-06-24T15:39:44Z | @SORALNV | Office files open from output links but show unsupported preview from workspace file picker | Low — file preview issue |

**Top priority for follow-up comment (if/when channel is active):**
1. **#30049** — exact missing Computer Use plugin symptom; matches our troubleshooting.html and computer-use-plugin-unavailable.html assets directly.
2. **#30075** — Intel Mac Secure Enclave failure; matches our `codex-computer-use-intel-mac.html` page angle.

---

## Posted rows scanned

**2 issues checked** against the 7-day window (2026-06-19 → 2026-06-26):
- #22927 (date: 2026-05-18) — outside 7-day window
- #22949 (date: 2026-05-18) — outside 7-day window

0 rows fell within the scan window. No reply checks performed.
