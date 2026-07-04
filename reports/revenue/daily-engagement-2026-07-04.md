# Daily Engagement Report — 2026-07-04

## Replies needing follow-up

No new replies in the last 7 days.

_(Scan window: 2026-06-27 → 2026-07-04. The two POSTED openai/codex rows in lead-log.md are dated 2026-05-18 — outside the 7-day window. Zero rows qualified for reply-check.)_

---

## New on-target open issues (not yet commented)

Issues matching `Computer Use macOS` in `openai/codex`, not present in lead-log.md.
High-relevance issues (Computer Use / macOS direct symptom match) marked **★**.

| # | createdAt | @author | Title (first 100 chars) | Likely symptom match |
|---|---|---|---|---|
| **★ #30846** | 2026-07-01T16:53:23Z | @johnsilvavlogs | Computer Use fails to start ScreenCaptureKit stream with SCStreamErrorDomain -3811 | **Direct Computer Use macOS crash — ScreenCaptureKit permission/entitlement failure** |
| **★ #31040** | 2026-07-03T15:44:03Z | @chyewon | macOS: compaction checkpoints re-embed screenshots until rollout hits 3.9 GB; ingestion then uses 10 | macOS screenshot loop / screen-capture pipeline runaway — adjacent to Computer Use |
| **★ #30928** | 2026-07-02T14:57:46Z | @NightGlowww | Codex Desktop 26.623.81905 crashes with CrBrowserMain EXC_BREAKPOINT/SIGTRAP and app-server memory s | macOS renderer crash — could overlap with Computer Use session init |
| **★ #30891** | 2026-07-02T03:16:52Z | @ZLI0407 | Codex macOS desktop renderer crash loop in 149.0.7827.197 | macOS renderer crash loop |
| **★ #30927** | 2026-07-02T14:32:27Z | @covifranklin | Codex CLI 0.142.5 crashes with zsh: trace trap / SIGTRAP on macOS 12.6.3 x86_64, MacBookAir9,1. | macOS CLI crash — Intel Mac (x86_64) specifically |
| **★ #30914** | 2026-07-02T08:29:35Z | @wed0n | Pasting emoji crashes Codex app on macOS | macOS-specific crash |
| **★ #30908** | 2026-07-02T06:50:58Z | @GGBondBlueWhale | Codex Desktop updater repeatedly fails on macOS with installer/updater error dialogs | macOS updater failure blocking Computer Use version rollout |
| **★ #30857** | 2026-07-01T19:05:15Z | @Hanchstar | Codex macOS app toolbar no longer shows environments, and Open with only shows Finder | macOS environment/plugin visibility regression |
| **★ #31018** | 2026-07-03T11:48:36Z | @mounteee | macOS Codex desktop app: window controls are overlapped at 100% zoom | macOS UI regression |
| #31107 | 2026-07-04T12:58:39Z | @Robin-Cartier | Codex Desktop: @ tool/plugin picker is very slow with many installed tools and plugins | Plugin/tool discovery latency — Computer Use appears in picker |
| #31090 | 2026-07-04T07:14:02Z | @malikdraz | Codex Desktop renderer crashes after subagent wait with React #185 and unknown conversation state | Renderer crash (platform unspecified) |
| #31047 | 2026-07-03T17:19:22Z | @raforomeroh | Existing threads remain blank, new threads work, intermittent SIGKILL crashes | SIGKILL crashes — possible macOS sandbox issue |
| #31020 | 2026-07-03T12:07:59Z | @arturmarkelov | Codex Desktop: "Failed to attach large pasted text" / Russian UI | Input attachment failure |
| #31003 | 2026-07-03T08:41:38Z | @zanllp | VS Code extension diff opening feels slower than native VS Code diff | VS Code extension perf |
| #30991 | 2026-07-03T06:45:42Z | @fortytwode | iOS Codex Mobile permanently renders only the streamed tail (~20-30 lines) of a long assistant messa | iOS only — out of scope |
| #30957 | 2026-07-02T22:25:00Z | @dkhokhlov | SQLite WAL journal mode corrupts runtime DBs (logs_2, state_5, …) when CODEX_HOME is on a network fi | Network filesystem DB corruption |
| #30951 | 2026-07-02T21:28:30Z | @JavierPiedra | Device options invisible in Dimensions dropdown | UI regression (platform unspecified) |
| #30950 | 2026-07-02T20:58:07Z | @kandamuniasamy2016 | Unrecoverable error doing Codex session. with gpt-5.5-cyber-preview | Model-level error |
| #30945 | 2026-07-02T18:48:40Z | @bingo-soft | Codex Desktop marks in-progress commentary as task_complete while plan is incomplete | Agent state bug |
| #30944 | 2026-07-02T18:33:05Z | @coltonfoley | Codex App project thread creation tools are missing | Thread tooling regression |
| #30921 | 2026-07-02T11:28:22Z | @736773174 | Custom GPT endpoint cannot use Imagen (The built-in image_gen tool described by the skill is not exp | Image gen / custom GPT |
| #30920 | 2026-07-02T10:55:38Z | @hauomu | Codex Desktop ARM64 Windows idles at ~10% CPU in main process | Windows — out of scope |
| #30916 | 2026-07-02T10:00:10Z | @Quentin-BRG | Desktop never resumes threads that appear while the app is running (created by an external app-serve | Thread resumption bug |
| #30902 | 2026-07-02T06:14:15Z | @sunwei-yhc | MCP unsupported call | MCP call error |
| #30892 | 2026-07-02T03:44:32Z | @StarrHuang | Codex CLI login blocked — phone verification shows unknown foreign number (not mine) | Auth / phone verification |
| #30890 | 2026-07-02T03:05:27Z | @GGBondBlueWhale | Codex Desktop: long-running /goal abruptly fails with {"detail":"Bad Request"} | /goal task failure |
| #30889 | 2026-07-02T03:00:38Z | @precisionforge | Codex Desktop Chrome bridge unavailable: node_repl missing and process launch fails | Node/Chrome bridge missing |
| #30874 | 2026-07-01T22:58:10Z | @Perdolique | Can't stage PNG files | File staging |
| #30873 | 2026-07-01T22:24:36Z | @adpena | Codex App on Windows crashes after legacy_notify hits os error 206 | Windows — out of scope |
| #30847 | 2026-07-01T17:10:15Z | @adpena | Windows Desktop crash when write_stdin interrupt hits unsupported unified exec backend | Windows — out of scope |

**Priority note:** #30846 is authored by @johnsilvavlogs — the same OP as existing lead-log.md entry #22903 (direct `@<Mac app>` routing regression, currently HELD). This is a new issue from the same user; strong asset match for the Computer Use troubleshooting content.

---

## Posted rows scanned

**0 issues scanned** — no lead-log.md rows with Status `Posted` or `Follow-up posted`, a `github.com/openai/codex/issues/` URL, *and* a Date within the last 7 days (2026-06-27 → 2026-07-04).

For reference, the two POSTED openai/codex rows in lead-log.md are:
- #22927 (posted 2026-05-18) — outside window by 47 days
- #22949 (posted 2026-05-18) — outside window by 47 days
