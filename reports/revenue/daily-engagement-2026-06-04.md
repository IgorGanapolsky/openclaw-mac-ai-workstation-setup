# Daily Engagement Report — 2026-06-04

## Replies needing follow-up

No new replies in the last 7 days.

> **Note:** Two `openai/codex` issues with `POSTED` status were found in `lead-log.md`
> (#22927, #22949), but both are dated 2026-05-18 — 17 days ago, outside the 7-day
> look-back window (2026-05-28 → 2026-06-04). Reply checks for those issues could not
> be completed in any case: the GitHub MCP tool in this session is scoped exclusively
> to `igorganapolsky/openclaw-mac-ai-workstation-setup` and returns **Access denied**
> for `openai/codex`. See `## Errors` below.

## New on-target open issues (not yet commented)

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|---|---|---|---|
| #26381 | 2026-06-04 | @aflekkas | Browser Use installed/enabled but node_repl JS tool is not exposed on macOS | Computer Use / node_repl not exposed |
| #26377 | 2026-06-04 | @michikaru | Computer Use plugin install does not persist after restart in Codex desktop | Computer Use persistence — matches #22927/#22949 pattern |
| #26368 | 2026-06-04 | @justinPengPeng | [Bug] Input freezes after prolonged idle period — unable to type or activate IME | macOS input/UI regression |
| #26364 | 2026-06-04 | @constansino | macOS 26.601: Chrome plugin cannot bootstrap because node_repl/js is not exposed despite extension-h | Computer Use / plugin bootstrap failure |
| #26357 | 2026-06-04 | @rabbit-97 | Codex desktop app Git worker can crash with Node/V8 OOM on large dirty repos | macOS desktop crash |
| #26341 | 2026-06-04 | @myxtype | Codex triggers syspolicyd file descriptor leak on macOS, causing all DMG files to be reported as "da | macOS system policy / FD leak |
| #26331 | 2026-06-04 | @repoman-git | Excessive depletion of 5 hr rolling window | rate-limit / usage |
| #26326 | 2026-06-04 | @joecklau | Codex App hang by pasting "\n" character | macOS app hang |
| #26319 | 2026-06-04 | @ahmedasmar | Codex Computer Use auth plugin adds 3-5s delay to macOS lock-screen unlock | Computer Use auth latency |
| #26316 | 2026-06-04 | @Audacity88 | Appshots fail silently on macOS 12.7.6: sky.node and bare-modifier-monitor fail to load due missing | Computer Use / sky.node load failure on older macOS |
| #26309 | 2026-06-04 | @abhaysk123 | macOS - Codex App Navigation / Usability Issue | macOS usability |
| #26303 | 2026-06-04 | @hatsugentyu-a11y | Sequential codex exec runs eventually fail with token_invalidated when using ChatGPT auth | auth regression |
| #26296 | 2026-06-04 | @OhHeyAlan | Computer Use plugin is removed on restart and reappears only after manual reinstall | Computer Use persistence — matches #22927/#22949 pattern |
| #26293 | 2026-06-04 | @kangminlee-maker | SkyComputerUseClient processes spawned for turn-ended events remain alive as PPID=1 orphans | Computer Use / orphan SkyComputerUseClient processes |
| #26292 | 2026-06-04 | @EE-zim | Windows app: PDF preview shows stale content after the PDF is overwritten at the same path | Windows only — low priority |
| #26282 | 2026-06-04 | @wise-l | Codex Desktop: Computer Use / "Any application" option missing on macOS Intel | **HIGH** — Computer Use missing on Intel Mac; exact landing-page match |
| #26270 | 2026-06-04 | @Yifo98 | Codex Desktop: Computer Use is lost after restart and archived threads trigger restore error | Computer Use persistence — matches #22927/#22949 pattern |
| #26250 | 2026-06-03 | @Yazeed-A-H | Fix RTL/LTR text rendering for mixed Arabic and English in Codex | off-topic |
| #26235 | 2026-06-03 | @seanesla | Codex Desktop hangs after sending prompt on macOS | macOS hang |
| #26207 | 2026-06-03 | @kentonium3 | Bug: codex CLI `-p <profile>` reads the profile file but silently drops the `sandbox` setting | CLI / sandbox config |
| #26195 | 2026-06-03 | @kivocsa99 | codex is unable to continue after calling any function | function-call regression |
| #26185 | 2026-06-03 | @jimmycarp966 | Computer Use sometimes needs to be re-added and macOS permissions do not seem to persist reliably | **HIGH** — Computer Use persistence + macOS permissions; core landing-page symptom |
| #26160 | 2026-06-03 | @singularitti | Codex Desktop on macOS: Sidebar focus ring is clipped in Settings panel | macOS UI cosmetic |
| #26157 | 2026-06-03 | @lalalavifda | Codex Desktop update lost project/sidebar conversation history mapping although local sessions still | macOS data loss after update |
| #26115 | 2026-06-03 | @SoraTakai | Codex App forcefully enables Browser (Let Codex control the built-in browser; plugins."browser@opena | Browser Use / forced plugin enable |
| #26111 | 2026-06-03 | @svirx | macOS: Automatic updates unavailable because Sparkle.framework is missing Versions/B/Sparkle | macOS update infra |
| #26092 | 2026-06-03 | @GINJUD | status checking is error | generic error |
| #26079 | 2026-06-03 | @YookiTong | Updated Codex Always Crash!!! | macOS crash after update |
| #26068 | 2026-06-03 | @lihuabd | command+V , Paste the text of about 4300 characters, it is stuck, and clicking anywhere will not res | macOS paste hang |
| #25991 | 2026-06-03 | @fluiderson | Codex fails to create `xcrun`'s cache in the sandbox | macOS sandbox / xcrun |

## Posted rows scanned

**0 rows qualified** (date filter: 2026-05-28 → 2026-06-04).

All `openai/codex` Posted rows in `lead-log.md` are dated 2026-05-18:

- Issue #22927 (@Scubasteve417) — 2026-05-18, POSTED (Comment: 4480331215) — **17 days old, outside window**
- Issue #22949 (@river-walras) — 2026-05-18, POSTED (Comment: 4480978482) — **17 days old, outside window**

Issue #18803 (@JOJOMRJ) is also POSTED (main table, 2026-05-18) but the main-table row uses `GitHub #18803` without the full `github.com/openai/codex/issues/` URL form required by the filter. Secondary-table row shows it as `https://github.com/openai/codex/issues/18803` with status **EDITED**, not POSTED.

## Errors

1. **Reply check blocked — MCP repo scope:** `mcp__github__issue_read` for `openai/codex` returns `Access denied: repository "openai/codex" is not configured for this session. Allowed repositories: igorganapolsky/openclaw-mac-ai-workstation-setup`. Steps 3 (reply detection for #22927, #22949) could not be executed. Manual check via browser or a session with broader repo scope is needed.

2. **Date filter eliminated all tracked rows:** No `lead-log.md` entries with `openai/codex` Posted status fall within the 2026-05-28 → 2026-06-04 window. The reply-check step is vacuously empty even without the MCP access error.
