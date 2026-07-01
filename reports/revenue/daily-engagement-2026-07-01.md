# Daily Engagement Report — 2026-07-01

## Replies needing follow-up

No new replies in the last 7 days.

> **Reason:** All `openai/codex` issues with status `POSTED` in `lead-log.md` are dated `2026-05-18`, which is outside the 7-day scan window (`2026-06-24` – `2026-07-01`). No reply-check was performed for issues outside that window.

---

## New on-target open issues (not yet commented)

Issues returned by `search "Computer Use macOS" --state open --repo openai/codex --limit 30`, filtered to exclude lead-log numbers (`#18803`, `#22856`, `#22903`, `#22921`, `#22927`, `#22949`). All 30 results are new candidates. Highest-symptom-match rows listed first.

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|-----------|---------|-------------------------|----------------------|
| [#30797](https://github.com/openai/codex/issues/30797) | 2026-07-01 | @jsleemaster | Computer Use get_app_state for Chrome returns cgWindowNotFound while Chrome is running | **Direct Computer Use API match** — `get_app_state` failure mirrors our `computer-use-plugin-unavailable` asset |
| [#30608](https://github.com/openai/codex/issues/30608) | 2026-06-29 | @GGBondBlueWhale | [macOS] Codex Computer Use damaged and verification hangs after 26.623.70822 update | **Strong match** — Computer Use on macOS, update-triggered, same class as #22927/#22949 |
| [#30824](https://github.com/openai/codex/issues/30824) | 2026-07-01 | @kerimala | Codex Desktop 26.623.81905 crashes with EXC_BREAKPOINT/SIGTRAP in FSEvents uv__fsevents_close and le | macOS FSEvents crash — likely MCP/plugin startup path |
| [#30682](https://github.com/openai/codex/issues/30682) | 2026-06-30 | @pkovzz | Codex CLI crashes with `zsh: trace trap codex` during repository analysis on macOS/iTerm2 with Intel | macOS Intel SIGTRAP — same crash class as #22949 Intel angle |
| [#30656](https://github.com/openai/codex/issues/30656) | 2026-06-30 | @yanjun821126 | macOS Intel: Codex CLI 0.142.4 crashes with SIGTRAP when using GPT-5.5, GPT-5.4 works normally | macOS Intel SIGTRAP — model-version regression, Intel-specific |
| [#30639](https://github.com/openai/codex/issues/30639) | 2026-06-30 | @nathanjohnpayne | Codex Desktop (macOS): Chronicle runs continuous background screen-recording summaries every 10 min | macOS background screen-capture — touches Computer Use permission layer |
| [#30623](https://github.com/openai/codex/issues/30623) | 2026-06-29 | @ramonchavez | Remote Control-created target thread hits Chrome Browser Use enterprise-policy block while target-lo | Browser Use / Remote Control — adjacent to Computer Use asset |
| [#30807](https://github.com/openai/codex/issues/30807) | 2026-07-01 | @ShenXiexs | com.openai.codex.code_sign_clone temporary directories are never cleaned up on macOS | macOS codesign/sandbox — overlaps `minos` troubleshooting angle |
| [#30708](https://github.com/openai/codex/issues/30708) | 2026-06-30 | @oorangee97 | Codex Desktop 26.623 on macOS: context-window usage indicator missing despite show-context-window-us | macOS Desktop UI regression |
| [#30768](https://github.com/openai/codex/issues/30768) | 2026-06-30 | @jiadizhunine | Codex Desktop keeps showing Dictation floating window despite keep-visible disabled | macOS accessibility/Dictation |
| [#30818](https://github.com/openai/codex/issues/30818) | 2026-07-01 | @sharkvan | Codex crashed when starting to scan code | Startup crash — generic |
| [#30810](https://github.com/openai/codex/issues/30810) | 2026-07-01 | @AlwinGarside | Codex CLI randomly crashes in Supacode | CLI crash — generic |
| [#30814](https://github.com/openai/codex/issues/30814) | 2026-07-01 | @OferTiber | Codex Desktop /pet overlay often omits current task bubble | Desktop UI |
| [#30813](https://github.com/openai/codex/issues/30813) | 2026-07-01 | @htregidgo | CLI: /agent lists active subagents but provides no thread selector | CLI UX |
| [#30803](https://github.com/openai/codex/issues/30803) | 2026-07-01 | @singularitti | Dropdown text overflows after selecting "CMD + Enter for multiline prompts" in "Send shortcut" setti | macOS UI |
| [#30763](https://github.com/openai/codex/issues/30763) | 2026-06-30 | @kpozin | Permission question always cut off | Desktop |
| [#30754](https://github.com/openai/codex/issues/30754) | 2026-06-30 | @chenayer | Codex Desktop: unified exec process fails after plugin manifest crash | Plugin crash |
| [#30753](https://github.com/openai/codex/issues/30753) | 2026-06-30 | @aidawilliam41-ops | Windows Desktop 26.623 starts duplicate MCP pools after RefreshMcpServers on hidden thread | Windows — lower priority |
| [#30728](https://github.com/openai/codex/issues/30728) | 2026-06-30 | @oorangee97 | Codex Desktop 26.623 on macOS: context-window usage indicator missing despite show-context-window-us | macOS Desktop |
| [#30727](https://github.com/openai/codex/issues/30727) | 2026-06-30 | @zhatlas | Codex Desktop New remote project omits Windows remote-control host while mobile ChatGPT can control | Remote control |
| [#30701](https://github.com/openai/codex/issues/30701) | 2026-06-30 | @ZLWMF | After deleting all projects, the Hooks page shows "No hooks found", but the plugin-level SessionStar | Hooks/plugins |
| [#30693](https://github.com/openai/codex/issues/30693) | 2026-06-30 | @hvdaccel | Codex Desktop 26.623 on Windows: context-window usage indicator missing again from composer UI | Windows |
| [#30660](https://github.com/openai/codex/issues/30660) | 2026-06-30 | @qicheng-h | My Codex Usage Limits Are STILL Depleting Faster Than Expected. | Usage limits |
| [#30647](https://github.com/openai/codex/issues/30647) | 2026-06-30 | @baek-seunghwan | 404 Not Found: model 'gpt-5.5' not found after connecting to Ollama | Model not found |
| [#30624](https://github.com/openai/codex/issues/30624) | 2026-06-29 | @wmmalcolm | Codex Desktop freezes when using Browser plug-in / in-app browser; repeated app-server handshake tim | Browser plugin freeze |
| [#30619](https://github.com/openai/codex/issues/30619) | 2026-06-29 | @duckSquirrelPilot | Hitbox (click area) of the window control macos buttons are too small | macOS UI |
| [#30616](https://github.com/openai/codex/issues/30616) | 2026-06-29 | @alessandroseni | SSH remote project automations should run on the remote host while the local Codex app is offline | Remote SSH |
| [#30613](https://github.com/openai/codex/issues/30613) | 2026-06-29 | @emmaguo13 | I am on an unlimited enterprise account but I hit usage limits. | Usage limits |
| [#30605](https://github.com/openai/codex/issues/30605) | 2026-06-29 | @truth1ness | In-app browser screenshot capture times out when Codex app is minimized | In-app browser screenshot |

**Top 2 outreach candidates (substance-gate ready):**
- **#30797** — `get_app_state` returning `cgWindowNotFound` maps directly to the Computer Use plugin registration failure documented in `troubleshooting.html` and #21579. Angle: marketplace regeneration + `minos` target + macOS permissions check. Asset match: strong.
- **#30608** — "damaged and verification hangs" after update is the same symptom class as #22927 (Scubasteve417). Angle: codesign quarantine xattr, Gatekeeper re-evaluation after update. Asset match: strong.

---

## Posted rows scanned

**3 issues** found in `lead-log.md` with `openai/codex` URL and status `POSTED` (or equivalent):

| Issue | Date in log | Status |
|-------|-------------|--------|
| [#22927](https://github.com/openai/codex/issues/22927) | 2026-05-18 | POSTED (Comment 4480331215) |
| [#22949](https://github.com/openai/codex/issues/22949) | 2026-05-18 | POSTED (Comment 4480978482) |
| [#18803](https://github.com/openai/codex/issues/18803) | 2026-05-18 | POSTED/EDITED (Comment 4480934144) |

All 3 are dated `2026-05-18` — **outside the 7-day window** (`2026-06-24` – `2026-07-01`). No GitHub API calls were made to check for replies on these issues, per the step-2 filter.
