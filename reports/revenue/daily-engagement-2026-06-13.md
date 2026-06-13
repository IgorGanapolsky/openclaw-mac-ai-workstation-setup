# Daily Engagement Report — 2026-06-13

## Replies needing follow-up

No new replies in the last 7 days.

> **Scan note:** Two openai/codex issues carry a `POSTED` status in lead-log.md with a github.com/openai/codex/issues/ URL — #22927 and #22949 — but both were posted on 2026-05-18 (26 days ago), outside the 7-day look-back window (2026-06-06 → 2026-06-13). No issues fell within the window, so no reply checks were executed.

---

## New on-target open issues (not yet commented)

Search: `Computer Use macOS state:open repo:openai/codex` — 30 results returned; all are new (no overlap with lead-log issue numbers).

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|---|---|---|---|
| #28078 | 2026-06-13T12:51:43Z | @guhans6 | Xcode 27 beta Codex sign-in fails only for ChatGPT Pro account requiring email OTP; Go account works | Auth/OTP — off-target |
| #28077 | 2026-06-13T11:51:23Z | @mazukabz | Codex tasks regressed from under 5 minutes to 30-50 minutes | Performance regression — off-target |
| #28071 | 2026-06-13T10:47:02Z | @ychulin | Codex Desktop 26.609.41114 repeatedly exhausts syspolicyd and cannot relaunch until reboot | syspolicyd/spctl exhaustion — adjacent (blocks Computer Use launch) |
| #28019 | 2026-06-13T03:26:39Z | @Rajahn | Codex Chrome extension 1.1.5 uses Chrome 143+ runtime.getVersion(), breaking backend discovery on Ch | Chrome extension — off-target |
| #27980 | 2026-06-12T23:38:51Z | @rajsundesha | I am constantly using it the other plugin work fine now new featured plugin launch @Sites and many | Plugin unavailable — possible match |
| #27978 | 2026-06-12T23:25:51Z | @yuchonghua | The Codex desktop application has poor compatibility with SSH development | SSH compatibility — off-target |
| #27969 | 2026-06-12T22:32:05Z | @vishvish | CodexDockTilePlugin setDockTile recursion crashes Dock on macOS | Dock crash — off-target |
| #27957 | 2026-06-12T21:43:22Z | @su-nyx | [Windows] documents plugin render_docx.py: malformed -env:UserInstallation URI crashes soffice; miss | Windows/soffice — off-target |
| #27928 | 2026-06-12T18:29:19Z | @sagi6s | CLI /review follow-up fails with review_rollout_user id: Expected an ID that begins with 'msg' | CLI review — off-target |
| #27922 | 2026-06-12T18:08:07Z | @RohanAdwankar | Side thread launched with /side while main thread is running disconnects stream | Stream disconnect — off-target |
| #27895 | 2026-06-12T15:41:20Z | @marknefedov | Computer Use helper crashes while controlling iPhone Mirroring, then actions report inactive session | **STRONG MATCH** — Computer Use crash + inactive session |
| #27891 | 2026-06-12T15:21:53Z | @luvi-hub | macOS Intel x64: Computer Use service fails due to application-groups entitlement/provisioning misma | **STRONG MATCH** — Computer Use + macOS Intel + entitlement failure |
| #27880 | 2026-06-12T14:06:58Z | @Culaliya | Repeated macOS Codex Desktop 26.609 crashes: CrBrowserMain EXC_BREAKPOINT, Renderer SIGABRT, stale a | Crash loop macOS — adjacent |
| #27876 | 2026-06-12T13:51:27Z | @Kemoke | Chat hang | Vague — off-target |
| #27872 | 2026-06-12T13:39:03Z | @peeky-co | Codex Local auth redirects to add-phone in Israel; no SMS option, Cloud/API work | Auth/geo — off-target |
| #27850 | 2026-06-12T11:11:16Z | @lgkvidfar | Usage limit bug, blocking with 100% left | Usage limits — off-target |
| #27843 | 2026-06-12T10:29:58Z | @duarteadv | Desktop sidebar shows "No chats" for all projects — thread/list with useStateDbOnly:true returns 0 t | DB state — off-target |
| #27829 | 2026-06-12T09:34:45Z | @kchristidis | macOS Appshots fail with cgWindowNotFound even though screencapture works | **MODERATE MATCH** — macOS screen capture failure (Computer Use dependency) |
| #27821 | 2026-06-12T08:23:33Z | @samwisegamge-eth | UI not responding despite all efforts | Vague — off-target |
| #27811 | 2026-06-12T07:28:27Z | @yuebozhang | [TUI][macOS][Warp] Ctrl+V after copying plain terminal text freezes the TUI | TUI/Warp paste — off-target |
| #27776 | 2026-06-12T05:32:48Z | @SparklesKitchen | macOS Dock helper crashes recursively in CodexDockTilePlugin setDockTile after app update | Dock crash — off-target |
| #27740 | 2026-06-12T02:09:42Z | @0xdevalias | Codex Desktop falsely reports "GitHub CLI unavailable" when shell environment loading times out | Shell env timeout — off-target |
| #27730 | 2026-06-12T01:10:17Z | @dysthymia | Desktop project: Mark all as read does not persist unread state | UI state — off-target |
| #27694 | 2026-06-11T22:12:06Z | @SamirLegacy | Codex Desktop 26.609.30741 crashes Dock external extra via CodexDockTilePlugin setDockTile recursion | Dock crash — off-target |
| #27687 | 2026-06-11T21:23:37Z | @MoeZabetna | Codex Stopped responding | Vague — off-target |
| #27665 | 2026-06-11T20:30:29Z | @rajsundesha | not able to use codex app in macos from last 4 days i am not able to use my codex help me out | macOS app broken — adjacent |
| #27662 | 2026-06-11T20:15:45Z | @sysoft | macOS: Codex Desktop/app-server appears to exhaust syspolicyd, causing spctl "Too many open files" g | **MODERATE MATCH** — syspolicyd exhaustion blocks Computer Use on macOS |
| #27657 | 2026-06-11T19:31:48Z | @jrn4z6vmwj-a11y | Desktop dictation shortcut only works when Codex is focused on macOS | Accessibility/dictation — off-target |
| #27644 | 2026-06-11T17:54:46Z | @lightninglu10 | Inline TUI history inserts use region scrolls that xterm.js deletes — permanent transcript gaps in V | TUI rendering — off-target |
| #27622 | 2026-06-11T15:51:40Z | @teazle | Codex no usable and all the threads are down with this error Invalid Value: 'tools'. Function 'funct | API tools error — off-target |

**Priority candidates for follow-up (if channel re-opens):**
- **#27891** (@luvi-hub) — `Computer Use service fails` + `macOS Intel x64` + `entitlement/provisioning mismatch` — exact symptom match for troubleshooting.html asset
- **#27895** (@marknefedov) — `Computer Use helper crashes` + `inactive session` — matches the "runtime app missing" pattern from prior held drafts
- **#27829** (@kchristidis) — `cgWindowNotFound` on macOS — screencapture dependency failure, related to Computer Use prerequisites
- **#27662** (@sysoft) and **#28071** (@ychulin) — `syspolicyd Too many open files` crashes — blocks Computer Use launch on macOS 15.x, strong asset match

---

## Posted rows scanned

**2 issues checked** (all from lead-log `POSTED` rows with `github.com/openai/codex/issues/` URLs):

| Issue | Date | Within 7-day window? |
|---|---|---|
| #22927 | 2026-05-18 | No (26 days ago) |
| #22949 | 2026-05-18 | No (26 days ago) |

Both are outside the 2026-06-06 → 2026-06-13 window. No reply checks executed. No GitHub API calls made for step 3.

---

## Errors

None. All steps completed successfully.

- Step 2: 0 Posted rows within the 7-day look-back window.
- Step 3: Skipped (no qualifying rows from step 2).
- Step 4: GitHub MCP search returned 30 results for `Computer Use macOS state:open repo:openai/codex`. Search executed via MCP tool (no `gh` CLI available in this environment).
