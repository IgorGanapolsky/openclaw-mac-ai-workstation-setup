# Daily Engagement Report — 2026-06-02

## Replies needing follow-up

No new replies in the last 7 days.

> **Scan note:** Three `openai/codex` issues have POSTED status in `lead-log.md` — #18803, #22927, and #22949 — but all were posted on 2026-05-18 (15 days before today). The 7-day lookback window is 2026-05-26 → 2026-06-02, so none fall within scope. Comment-reply checking was skipped for these issues accordingly. If the lookback window should be extended (e.g., 30 days), update the monitor prompt.

---

## New on-target open issues (not yet commented)

Issues returned by search `Computer Use macOS repo:openai/codex is:open` (30 results), filtered to exclude issue numbers already in `lead-log.md` (#18803, #22856, #22903, #22921, #22927, #22949). All 30 are new candidates.

| # | createdAt | @author | Title (first 100 chars) | Symptom match |
|---|-----------|---------|-------------------------|---------------|
| #25843 | 2026-06-02 | @Muwahhidun | Codex Desktop does not expose custom MCP tools although codex mcp list sees the server. | LOW — MCP config, not Computer Use |
| #25817 | 2026-06-02 | @Zh1406628191 | MACOS：codex无法使用应用快照、computer use插件 | **HIGH** — macOS + computer-use plugin unavailable |
| #25813 | 2026-06-02 | @ahmadmustafaanis | macOS Desktop filters computer-use out of bundled marketplace even though bundled plugin is present | **HIGH** — exact symptom: computer-use absent from marketplace on macOS |
| #25809 | 2026-06-02 | @cocogoat-a | Codex Desktop plugins disappear after restart; Chrome native host manifest is not created and comput… | **HIGH** — plugin disappearance + host manifest missing (matches #21579 root cause) |
| #25804 | 2026-06-02 | @subwitcher | Auto-converting long pasted prompts to Pasted text.txt breaks Codex App workflows | LOW — paste handling, not Computer Use |
| #25788 | 2026-06-02 | @Co5mos | Locked Computer Use fallback typed into macOS login password field | **HIGH** — Computer Use macOS security/safety bug |
| #25784 | 2026-06-02 | @GGBondBlueWhale | Chrome + Computer use struggle with Chrome-hosted remote VMs, causing slow and expensive retry loops | MEDIUM — Computer Use + Chrome VM environment |
| #25779 | 2026-06-02 | @FromAriel | Codex Desktop meta-bug: unbounded session/turn state causes freezes, context bloat, and lost active-… | LOW — session state, not Computer Use |
| #25772 | 2026-06-02 | @0Chan-smc | Esc-aborting npm run dev leaves orphaned Next.js dev server process holding port 3000 | LOW — dev tooling |
| #25762 | 2026-06-02 | @GGBondBlueWhale | Codex Desktop Profile token activity shows next day instead of local date | LOW — UI date display |
| #25761 | 2026-06-02 | @GGBondBlueWhale | Codex Desktop left sidebar only shows ~50 conversations, making older project chats disappear | LOW — sidebar pagination |
| #25758 | 2026-06-02 | @nguyentrungtu | Codex App overwrites bundled plugin config/cache and removes Computer Use/Browser plugins | **HIGH** — Computer Use plugin removed on update |
| #25744 | 2026-06-02 | @quasa0 | Codex for macOS accumulates Computer Use / MCP helper processes and unreaped zombie children, causin… | **HIGH** — macOS + Computer Use process leak |
| #25719 | 2026-06-01 | @energissimo-mg | Codex Desktop for macOS repeatedly triggers `syspolicyd` / `trustd` CPU and memory runaway | MEDIUM — macOS system policy; may relate to unsigned Computer Use helper |
| #25695 | 2026-06-01 | @halidaee | Codex Pet overlay too large — inhibits clicking inside other windows that are inches away on screen | LOW — UI overlay sizing |
| #25692 | 2026-06-01 | @alaw4k1 | Codex Desktop loses pinned remote-root sessions after macOS sleep/wake (thread not loaded) | MEDIUM — macOS sleep/wake + session loss |
| #25685 | 2026-06-01 | @pezezzle | Codex retains wrong worktree/thread binding for Linear-delegated tasks and applies fixes to wrong… | LOW — worktree/Linear integration |
| #25667 | 2026-06-01 | @yorhasaber | [Bug] macOS app leaves code_sign_clone directories after quit (~965MB per launch) | LOW — cleanup on quit |
| #25641 | 2026-06-01 | @iamhectorlopez | "Add to chat" selection toolbar does not appear for some selected response text | LOW — selection UI |
| #25622 | 2026-06-01 | @h3nock | TUI resize reflow emits full clear outside synchronized output, causing blank flash | LOW — TUI rendering |
| #25606 | 2026-06-01 | @ayalshachar | Codex mobile loses remote task/goal state: missed approvals, stale progress, and stop does not pause | LOW — mobile remote state |
| #25601 | 2026-06-01 | @ssyan110 | Codex Mac App: Appshots Settings UI missing on 26.527 despite bundled resources | **HIGH** — macOS Appshots (Computer Use capture layer) UI missing |
| #25596 | 2026-06-01 | @ginping | Attach \<App\> (computer-use / Appshot capture) permanently freezes the session when the target is a b… | **HIGH** — computer-use Appshot capture freeze on macOS |
| #25591 | 2026-06-01 | @ArchieeR | keep having issues compacting | LOW — context compaction |
| #25588 | 2026-06-01 | @mdecon | Pasting .tex text freezes the app | LOW — paste handling |
| #25559 | 2026-06-01 | @bt1943 | Codex mobile QR scan always opens old offline host page and cannot reconnect | LOW — mobile QR/offline |
| #25532 | 2026-06-01 | @basajang | Codex Desktop remote-control keeps using revoked client when connecting Mac to Windows, no approval… | LOW — remote-control auth |
| #25516 | 2026-06-01 | @rlimberger | Codex crashes frequently on macOS | MEDIUM — macOS stability, broad |
| #25502 | 2026-06-01 | @Nevery-qiao | macOS Appshot shows generic "Unable to attach appshot" when Computer Use blocks a disallowed URL aft… | **HIGH** — Computer Use URL blocking + macOS Appshot error |
| #25500 | 2026-06-01 | @kezh9527 | Codex Desktop Projects sidebar shows "No chats" for projects with older non-archived conversations | LOW — sidebar display |

**HIGH-priority candidates for next comment (9 issues):** #25817, #25813, #25809, #25788, #25758, #25744, #25601, #25596, #25502

---

## Posted rows scanned

**3 issues checked** (all have POSTED status + openai/codex URL in lead-log.md):
- #18803
- #22927
- #22949

All 3 were posted on 2026-05-18. None fall within the 7-day lookback window (2026-05-26 → 2026-06-02). Comment-reply scan was skipped; extend lookback to 30 days if monitoring older threads is desired.
