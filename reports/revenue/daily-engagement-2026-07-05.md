# Daily Engagement Report — 2026-07-05

## Replies needing follow-up

No new replies in the last 7 days.

_(Scan window: 2026-06-28 → 2026-07-05. The two posted openai/codex issues — #22927 and #22949 — were both posted on 2026-05-18, which falls outside the 7-day window. No rows in lead-log.md have a Date ≥ 2026-06-28 with Status "Posted" or "Follow-up posted" and a github.com/openai/codex/issues/ URL.)_

## New on-target open issues (not yet commented)

| # | createdAt | Author | Title (first 100 chars) | Likely symptom match |
|---|---|---|---|---|
| #31161 | 2026-07-05 | @zhiwangsh | Intel Mac regression: Remote Control authorization fails before QR generation and App Snapshot alway | **Strong** — Remote Control + App Snapshot are Computer Use surface; Intel Mac regression |
| #31160 | 2026-07-05 | @wushijie7866 | Computer Use unavailable on Intel macOS: x64 package lacks macOS service app | **Exact** — Computer Use unavailable on Intel macOS, missing service app |
| #31123 | 2026-07-04 | @skyofdust | Hitting codex quota block although quota limit is not met | Weak — quota/billing, not Computer Use |
| #31112 | 2026-07-04 | @TidalPaladin | Codex macOS app crops image previews, showing only the top portion | Partial — macOS app, screenshot/image rendering |
| #31107 | 2026-07-04 | @Robin-Cartier | Codex Desktop: @ tool/plugin picker is very slow with many installed tools and plugins | Weak — plugin performance, not Computer Use |
| #31090 | 2026-07-04 | @malikdraz | Codex Desktop renderer crashes after subagent wait with React #185 and unknown conversation state | Weak — renderer crash |
| #31047 | 2026-07-03 | @raforomeroh | Existing threads remain blank, new threads work, intermittent SIGKILL crashes | Weak — thread/crash |
| #31040 | 2026-07-03 | @chyewon | macOS: compaction checkpoints re-embed screenshots until rollout hits 3.9 GB; ingestion then uses 10 | Partial — macOS screenshot/memory, may intersect Computer Use |
| #31020 | 2026-07-03 | @arturmarkelov | Codex Desktop: "Failed to attach large pasted text" / Russian UI: "Не удалось прикрепить большой фра | Weak — paste/text attachment |
| #31018 | 2026-07-03 | @mounteee | macOS Codex desktop app: window controls are overlapped at 100% zoom | Weak — UI layout |
| #31003 | 2026-07-03 | @zanllp | VS Code extension diff opening feels slower than native VS Code diff | Weak — VS Code perf |
| #30991 | 2026-07-03 | @fortytwode | iOS Codex Mobile permanently renders only the streamed tail (~20-30 lines) of a long assistant messa | Weak — iOS, not macOS Computer Use |
| #30968 | 2026-07-03 | @Nekokir | Chrome plugin domSnapshot fails because bundled InjectedScript lacks incrementalAriaSnapshot | Partial — browser automation/snapshot, Computer Use adjacent |
| #30957 | 2026-07-02 | @dkhokhlov | SQLite WAL journal mode corrupts runtime DBs (logs_2, state_5, …) when CODEX_HOME is on a network fi | Weak — storage/DB |
| #30951 | 2026-07-02 | @JavierPiedra | Device options invisible in Dimensions dropdown | Weak — UI dropdown |
| #30950 | 2026-07-02 | @kandamuniasamy2016 | Unrecoverable error doing Codex session. with gpt-5.5-cyber-preview | Weak — session/model error |
| #30945 | 2026-07-02 | @bingo-soft | Codex Desktop marks in-progress commentary as task_complete while plan is incomplete, silently endin | Weak — task state machine |
| #30944 | 2026-07-02 | @coltonfoley | Codex App project thread creation tools are missing | Weak — thread tools |
| #30928 | 2026-07-02 | @NightGlowww | Codex Desktop 26.623.81905 crashes with CrBrowserMain EXC_BREAKPOINT/SIGTRAP and app-server memory s | Partial — macOS crash/memory |
| #30927 | 2026-07-02 | @covifranklin | Codex CLI 0.142.5 crashes with zsh: trace trap / SIGTRAP on macOS 12.6.3 x86_64, MacBookAir9,1. | Partial — Intel macOS crash (x86_64) |
| #30921 | 2026-07-02 | @736773174 | Custom GPT endpoint cannot use Imagen (The built-in image_gen tool described by the skill is not exp | Weak — Imagen/image gen |
| #30920 | 2026-07-02 | @hauomu | Codex Desktop ARM64 Windows idles at ~10% CPU in main process | Weak — Windows, not macOS |
| #30916 | 2026-07-02 | @Quentin-BRG | Desktop never resumes threads that appear while the app is running (created by an external app-serve | Weak — thread resume |
| #30914 | 2026-07-02 | @wed0n | Pasting emoji crashes Codex app on macOS | Weak — emoji paste crash |
| #30908 | 2026-07-02 | @GGBondBlueWhale | Codex Desktop updater repeatedly fails on macOS with installer/updater error dialogs | Partial — macOS updater failures |
| #30902 | 2026-07-02 | @sunwei-yhc | MCP unsupported call | Weak — MCP protocol |
| #30892 | 2026-07-02 | @StarrHuang | Codex CLI login blocked — phone verification shows unknown foreign number (not mine) | Weak — auth/login |
| #30891 | 2026-07-02 | @ZLI0407 | Codex macOS desktop renderer crash loop in 149.0.7827.197 | Partial — macOS renderer crash loop |
| #30890 | 2026-07-02 | @GGBondBlueWhale | Codex Desktop: long-running /goal abruptly fails with {"detail":"Bad Request"} and interrupts the ta | Weak — API error |
| #30889 | 2026-07-02 | @precisionforge | Codex Desktop Chrome bridge unavailable: node_repl missing and process launch fails | Partial — Chrome bridge/process launch, Computer Use adjacent |

**Priority targets** (Strong/Exact symptom match for Computer Use on macOS): #31160, #31161

## Posted rows scanned

**0 rows scanned** (0 issues checked for replies).

All openai/codex "Posted" entries in lead-log.md (#22927 posted 2026-05-18, #22949 posted 2026-05-18) fall outside the 7-day lookback window (2026-06-28 → 2026-07-05). No comments were checked via API.
