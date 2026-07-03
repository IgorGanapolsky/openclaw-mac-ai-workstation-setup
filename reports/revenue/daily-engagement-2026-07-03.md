# Daily Engagement Report — 2026-07-03

## Replies needing follow-up

No new replies in the last 7 days.

_(The two Posted openai/codex rows in lead-log.md — issues #22927 and #22949 — are dated 2026-05-18, which is outside the 7-day scan window of 2026-06-26 → 2026-07-03. No IgorGanapolsky-authored openai/codex posts fall within the window, so there are no reply threads to check.)_

---

## New on-target open issues (not yet commented)

> Search: `Computer Use macOS repo:openai/codex state:open` — 30 results returned; all 30 are new (none match lead-log issue numbers 22856, 22903, 22921, 22927, 22949).
> Issues below are sorted newest-first. Rows marked ⭐ are strong symptom matches for the Computer Use / macOS plugin failure angle.

| # | Created (UTC) | Author | Title (first 100 chars) | Symptom match |
|---|---|---|---|---|
| [#30846](https://github.com/openai/codex/issues/30846) ⭐ | 2026-07-01T16:53:23Z | @johnsilvavlogs | Computer Use fails to start ScreenCaptureKit stream with SCStreamErrorDomain -3811 | **Direct Computer Use macOS failure** — ScreenCaptureKit startup crash; strong match for plugin-unavailable / entitlement angle |
| [#31020](https://github.com/openai/codex/issues/31020) | 2026-07-03T12:07:59Z | @arturmarkelov | Codex Desktop: "Failed to attach large pasted text" / Russian UI: "Не удалось прикрепить большой фра | Paste/attachment failure in Desktop; macOS relevance |
| [#31018](https://github.com/openai/codex/issues/31018) | 2026-07-03T11:48:36Z | @mounteee | macOS Codex desktop app: window controls are overlapped at 100% zoom | macOS UI rendering glitch |
| [#31003](https://github.com/openai/codex/issues/31003) | 2026-07-03T08:41:38Z | @zanllp | VS Code extension diff opening feels slower than native VS Code diff | VS Code extension; macOS possible |
| [#30991](https://github.com/openai/codex/issues/30991) | 2026-07-03T06:45:42Z | @fortytwode | iOS Codex Mobile permanently renders only the streamed tail (~20-30 lines) of a long assistant messa | iOS; off-target for macOS Computer Use |
| [#30959](https://github.com/openai/codex/issues/30959) | 2026-07-02T23:02:59Z | @bign0name | Codex CLI 0.142.5 completely unusable in Ghostty 1.3.1 — kitty keyboard protocol and OSC responses | CLI / terminal rendering; macOS possible |
| [#30957](https://github.com/openai/codex/issues/30957) | 2026-07-02T22:25:00Z | @dkhokhlov | SQLite WAL journal mode corrupts runtime DBs (logs_2, state_5, …) when CODEX_HOME is on a network f | DB corruption; cross-platform |
| [#30951](https://github.com/openai/codex/issues/30951) | 2026-07-02T21:28:30Z | @JavierPiedra | Device options invisible in Dimensions dropdown | UI bug; possibly Computer Use device-picker |
| [#30950](https://github.com/openai/codex/issues/30950) | 2026-07-02T20:58:07Z | @kandamuniasamy2016 | Unrecoverable error doing Codex session. with gpt-5.5-cyber-preview | Session error; model-specific |
| [#30945](https://github.com/openai/codex/issues/30945) | 2026-07-02T18:48:40Z | @bingo-soft | Codex Desktop marks in-progress commentary as task_complete while plan is incomplete, silently endin | Task state machine bug |
| [#30944](https://github.com/openai/codex/issues/30944) | 2026-07-02T18:33:05Z | @coltonfoley | Codex App project thread creation tools are missing | Missing tools / plugin surface |
| [#30928](https://github.com/openai/codex/issues/30928) ⭐ | 2026-07-02T14:57:46Z | @NightGlowww | Codex Desktop 26.623.81905 crashes with CrBrowserMain EXC_BREAKPOINT/SIGTRAP and app-server memory s | macOS Desktop crash — EXC_BREAKPOINT pattern seen in Computer Use plugin failures |
| [#30927](https://github.com/openai/codex/issues/30927) ⭐ | 2026-07-02T14:32:27Z | @covifranklin | Codex CLI 0.142.5 crashes with zsh: trace trap / SIGTRAP on macOS 12.6.3 x86_64, MacBookAir9,1. | macOS x86_64 CLI crash — Intel Mac angle; matches codex-computer-use-intel-mac.html asset |
| [#30921](https://github.com/openai/codex/issues/30921) | 2026-07-02T11:28:22Z | @736773174 | Custom GPT endpoint cannot use Imagen (The built-in image_gen tool described by the skill is not exp | image_gen / tool exposure; off-target |
| [#30920](https://github.com/openai/codex/issues/30920) | 2026-07-02T10:55:38Z | @hauomu | Codex Desktop ARM64 Windows idles at ~10% CPU in main process | Windows; off-target |
| [#30916](https://github.com/openai/codex/issues/30916) | 2026-07-02T10:00:10Z | @Quentin-BRG | Desktop never resumes threads that appear while the app is running (created by an external app-serve | app-server integration; cross-platform |
| [#30914](https://github.com/openai/codex/issues/30914) ⭐ | 2026-07-02T08:29:35Z | @wed0n | Pasting emoji crashes Codex app on macOS | macOS Desktop crash |
| [#30908](https://github.com/openai/codex/issues/30908) ⭐ | 2026-07-02T06:50:58Z | @GGBondBlueWhale | Codex Desktop updater repeatedly fails on macOS with installer/updater error dialogs | macOS updater failure — update blocking Computer Use plugin delivery |
| [#30902](https://github.com/openai/codex/issues/30902) | 2026-07-02T06:14:15Z | @sunwei-yhc | MCP unsupported call | MCP; cross-platform |
| [#30892](https://github.com/openai/codex/issues/30892) | 2026-07-02T03:44:32Z | @StarrHuang | Codex CLI login blocked — phone verification shows unknown foreign number (not mine) | Auth / onboarding; off-target |
| [#30891](https://github.com/openai/codex/issues/30891) ⭐ | 2026-07-02T03:16:52Z | @ZLI0407 | Codex macOS desktop renderer crash loop in 149.0.7827.197 | macOS Desktop crash loop — renderer failure pattern matches plugin entitlement crash |
| [#30890](https://github.com/openai/codex/issues/30890) | 2026-07-02T03:05:27Z | @GGBondBlueWhale | Codex Desktop: long-running /goal abruptly fails with {"detail":"Bad Request"} and interrupts the ta | API error during task execution |
| [#30889](https://github.com/openai/codex/issues/30889) ⭐ | 2026-07-02T03:00:38Z | @precisionforge | Codex Desktop Chrome bridge unavailable: node_repl missing and process launch fails | Bridge/process launch failure — overlaps with Computer Use runtime startup failures |
| [#30874](https://github.com/openai/codex/issues/30874) | 2026-07-01T22:58:10Z | @Perdolique | Can't stage PNG files | File staging; off-target |
| [#30873](https://github.com/openai/codex/issues/30873) | 2026-07-01T22:24:36Z | @adpena | Codex App on Windows crashes after legacy_notify hits os error 206 | Windows; off-target |
| [#30857](https://github.com/openai/codex/issues/30857) ⭐ | 2026-07-01T19:05:15Z | @Hanchstar | Codex macOS app toolbar no longer shows environments, and Open with only shows Finder | macOS: environments panel missing — matches computer-use-plugin-unavailable symptom class |
| [#30847](https://github.com/openai/codex/issues/30847) | 2026-07-01T17:10:15Z | @adpena | Windows Desktop crash when write_stdin interrupt hits unsupported unified exec backend | Windows; off-target |
| [#30842](https://github.com/openai/codex/issues/30842) | 2026-07-01T16:22:36Z | @wantseeplanbe | Token drain issue w/ multiple agents | Multi-agent token; off-target |
| [#30824](https://github.com/openai/codex/issues/30824) ⭐ | 2026-07-01T12:49:32Z | @kerimala | Codex Desktop 26.623.81905 crashes with EXC_BREAKPOINT/SIGTRAP in FSEvents uv__fsevents_close and l | macOS FSEvents crash — FSEvents is macOS-only; matches Desktop plugin crash pattern |
| [#30818](https://github.com/openai/codex/issues/30818) | 2026-07-01T11:21:29Z | @sharkvan | Codex crashed when starting to scan code. | Crash on scan start; platform unclear |

**Priority candidates (⭐):** #30846, #30928, #30927, #30914, #30908, #30891, #30889, #30857, #30891, #30824

**Highest-priority single issue:** #30846 (@johnsilvavlogs) — explicit "Computer Use" + "ScreenCaptureKit" + macOS = exact symptom-match for the `computer-use-plugin-unavailable.html` asset. Note: @johnsilvavlogs also authored lead-log issue #22903, meaning this is a return visitor with a new, distinct failure mode.

---

## Posted rows scanned

**0 rows scanned for replies** — the 2-day range filter (2026-06-26 → 2026-07-03) returned zero Posted openai/codex rows.

For reference, all Posted openai/codex rows in lead-log.md and their dates:

| Issue | Date | Status | In 7-day window? |
|---|---|---|---|
| #22927 | 2026-05-18 | POSTED (Comment 4480331215) | No — 46 days old |
| #22949 | 2026-05-18 | POSTED (Comment 4480978482) | No — 46 days old |

Total openai/codex Posted issues on record: **2** (#22927, #22949)
Total scanned for replies this run: **0**
