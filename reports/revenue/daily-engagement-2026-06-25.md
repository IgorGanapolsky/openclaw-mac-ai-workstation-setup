# Daily Engagement Report — 2026-06-25

## Replies needing follow-up

No new replies in the last 7 days.

> **Scan note:** Two `openai/codex` issues have `POSTED` status in `lead-log.md` — #22927 (@Scubasteve417, Comment: 4480331215) and #22949 (@river-walras, Comment: 4480978482). Both were posted on 2026-05-18, which falls outside the 7-day lookback window (2026-06-18 – 2026-06-25). No reply check was performed for those issues; they are included in the count below for transparency.

---

## New on-target open issues (not yet commented)

Search: `Computer Use macOS repo:openai/codex state:open` — 30 results returned, 0 already in `lead-log.md`.

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|---|---|---|---|
| #30037 | 2026-06-25T11:58:45Z | @lain-creator | s the 20X limit being granted so quickly? | — |
| #30013 | 2026-06-25T08:43:10Z | @david123456789164 | Codex Desktop frequently hangs on macOS (Apple Silicon) during long-running tool actions | macOS Desktop hang — possible Computer Use tool-action stall |
| #30008 | 2026-06-25T06:59:29Z | @murphyXu | Selected model is at capacity. Please try a different model. | — |
| #30006 | 2026-06-25T06:52:12Z | @zzzzzchg | macOS: Threads created from VS Code extension do not appear in Codex Desktop | macOS sync regression |
| #30005 | 2026-06-25T06:49:56Z | @faithinker | Codex macOS app crashes on startup with EXC_BREAKPOINT/SIGTRAP in CrBrowserMain | macOS startup crash |
| #30002 | 2026-06-25T06:12:26Z | @hahasasa | Server-side quota accounting over-reports consumption after 5h reset: Pro 5h limit burned in ~41 min | — |
| #29999 | 2026-06-25T06:00:39Z | @flacelabs | Chrome plugin cannot connect after reinstall/restart | — |
| #29987 | 2026-06-25T04:26:47Z | @frde4c | [BUG] Codex app restarts on macOS after repeated drag actions | macOS instability |
| #29972 | 2026-06-25T03:39:28Z | @safge | Windows desktop app loses composer focus and breaks Chinese IME input during thread switching | — |
| #29963 | 2026-06-25T02:46:58Z | @cNa2017 | Codex quota consumption has a serious bug | — |
| #29955 | 2026-06-25T02:11:47Z | @ycyyds123 | Quota drained instantly: 100 credits gone after 1 message, 5h limit reset to 0% | — |
| #29948 | 2026-06-25T01:36:25Z | @craigsoules | Incorrect error around usage limit hit | — |
| #29933 | 2026-06-25T00:24:59Z | @MordecaiM24 | curated-plugin sync runs `git reset --hard` against the user's project repo | — |
| #29901 | 2026-06-24T19:42:58Z | @Cathech-ie | Codex Desktop thread stuck in inProgress/interrupted state after clear-log template message | — |
| #29873 | 2026-06-24T15:39:44Z | @SORALNV | Office files open from output links but show unsupported preview from workspace file picker | — |
| #29872 | 2026-06-24T15:39:25Z | @gyuho | "app-server/src/lib.rs" has unused mutable "loader_overrides" | — |
| #29864 | 2026-06-24T14:55:08Z | @infoechoes | Codex Desktop resume can fail when shell snapshot tmp file disappears during validation | macOS filesystem / process snapshot — adjacent to Computer Use runtime |
| #29843 | 2026-06-24T10:55:29Z | @hodeinavarro | Codex CLI scroll view jump on type and queued messages steering too hard | — |
| #29834 | 2026-06-24T09:49:59Z | @18062706139fcz | codex crash bug when I enter information in a running task | — |
| #29827 | 2026-06-24T09:11:28Z | @shapeng1998 | Chinese text resolves to a heavier font weight than Latin text on macOS | — |
| #29809 | 2026-06-24T05:38:45Z | @Yoon-Jeong-ho | Codex Desktop SSH reconnect creates many stale remote app-server processes across multiple Linux hosts | — |
| #29796 | 2026-06-24T04:47:34Z | @luckyboy19900916 | Codex Desktop 26.616.81150 triggers syspolicyd EMFILE / global spctl "Too many open files" on macOS | macOS system-level — `syspolicyd`/spctl gate overlap with Computer Use runtime checks |
| #29786 | 2026-06-24T03:19:27Z | @BryanTegomoh | Computer Use fails when per-user runtime app is missing | **DIRECT MATCH** — identical root cause to #22927 (missing runtime app); strong asset match for troubleshooting.html |
| #29777 | 2026-06-24T02:48:34Z | @Aafffcc | Codex App plugin manager does not show presentations@personal even though Codex CLI and the app-bund | — |
| #29776 | 2026-06-24T02:45:42Z | @GGBondBlueWhale | Clicking sidebar chats sometimes opens a new chat instead of the selected conversation | — |
| #29775 | 2026-06-24T02:37:52Z | @GGBondBlueWhale | Sidebar chat timestamps are capped at "1mo" for chats older than one month | — |
| #29772 | 2026-06-24T02:32:23Z | @GGBondBlueWhale | Appshots still fail with "Unable to attach appshot" on 26.616.81150 after pressing both Command keys | — |
| #29760 | 2026-06-24T01:26:27Z | @uimodel | Selected model is at capacity. Please try a different model. | — |
| #29738 | 2026-06-23T22:23:38Z | @disbitski | Codex app zoom + maximized macOS window offsets traffic-light hit targets | macOS window management |
| #29678 | 2026-06-23T18:21:14Z | @RohanAdwankar | Recurring Codex Stoppages: ■ {"detail":"Unsupported content type"} | — |

**Highest-priority candidate: #29786** — "Computer Use fails when per-user runtime app is missing" (@BryanTegomoh, 2026-06-24). This is an identical root cause to #22927 (the issue where IgorGanapolsky previously posted a help-only comment on 2026-05-18). The `troubleshooting.html` and `computer-use-plugin-unavailable.html` assets are directly applicable.

---

## Posted rows scanned

**2 posted rows in `lead-log.md` contain `github.com/openai/codex/issues/` URLs**, but both fall outside the 7-day lookback window (posts dated 2026-05-18; window is 2026-06-18 – 2026-06-25). No reply-check was performed.

Issues not scanned (out-of-window):
- #22927 (posted 2026-05-18, Comment: 4480331215)
- #22949 (posted 2026-05-18, Comment: 4480978482)
