# Daily Engagement Report — 2026-06-14

## Replies needing follow-up

No new replies in the last 7 days.

_(Rationale: The only `openai/codex` issues with **POSTED** status in lead-log.md are #18803, #22927, and #22949, all dated 2026-05-18 — 27 days before today. None fall within the 7-day window 2026-06-07 → 2026-06-14. Because there were no in-window posted issues to look up, step 3 was skipped entirely. `gh` CLI is not available in this environment; GitHub MCP tools are restricted to `igorganapolsky/openclaw-mac-ai-workstation-setup` and cannot read `openai/codex` comments — so even if in-window issues existed, comment-level lookup would have fallen into the Errors section.)_

---

## New on-target open issues (not yet commented)

Search: `Computer Use macOS repo:openai/codex is:issue is:open` → 1 203 total matches; top 30 shown below. All 30 are absent from lead-log.md.

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|-----------|---------|-------------------------|----------------------|
| #28184 | 2026-06-14T11:09Z | @GGBondBlueWhale | "Codex Computer Use" is damaged and can't be opened after Mac restart | **HIGH** — direct Computer Use startup failure on macOS |
| #27891 | 2026-06-12T15:21Z | @luvi-hub | macOS Computer Use app-group entitlement/provisioning mismatch | **HIGH** — Computer Use entitlement mismatch (same root as #22927) |
| #27895 | 2026-06-12T15:41Z | @marknefedov | Computer Use helper crashes while controlling iPhone Mirroring, then actions report inactive session | **HIGH** — Computer Use helper crash / inactive session |
| #28180 | 2026-06-14T10:19Z | @michaelkiki | Remotion causes Codex syspolicyd and trustd CPU usage to hit 100%, freezing the system | MED — syspolicyd starvation; overlaps Computer Use sandbox exhaustion pattern |
| #28088 | 2026-06-13T15:04Z | @xiqijia | Codex Chrome extension's extension-host helper saturates syspolicyd, freezing system-wide app launch | MED — syspolicyd exhaustion on macOS |
| #28071 | 2026-06-13T10:47Z | @ychulin | Codex Desktop 26.609.41114 repeatedly exhausts syspolicyd and cannot relaunch until reboot | MED — syspolicyd exhaustion; similar to #22927 pattern |
| #28090 | 2026-06-13T15:15Z | @bryanwuyw | Trace/BPT trap: 5 (SIGTRAP) on macOS 15 | MED — macOS 15 crash at launch |
| #27829 | 2026-06-12T09:34Z | @kchristidis | macOS Appshots fail with cgWindowNotFound even though screencapture works | MED — macOS screen-capture failure (Computer Use dependency) |
| #27880 | 2026-06-12T14:06Z | @Culaliya | Repeated macOS Codex Desktop 26.609 crashes: CrBrowserMain EXC_BREAKPOINT, Renderer SIGABRT, stale a | MED — macOS Codex Desktop crash loop |
| #27776 | 2026-06-12T05:32Z | @SparklesKitchen | macOS Dock helper crashes recursively in CodexDockTilePlugin setDockTile after app update | MED — macOS crash post-update |
| #28190 | 2026-06-14T12:02Z | @atacan | rg is blocked by macOS | LOW — macOS Gatekeeper blocking (tangential) |
| #28155 | 2026-06-14T04:48Z | @GGBondBlueWhale | GPT-5.5 Fast session freezes shortly after start, then resumes with extremely slow streaming | LOW — streaming issue |
| #28115 | 2026-06-13T20:14Z | @hiphamster | Keep getting "websocket closed by server before response.completed" | LOW — websocket/connectivity |
| #28101 | 2026-06-13T18:17Z | @Accademia | [BUG] A script for the automated bulk installation of third-party apps was flagged as a 'cybersecuri | LOW — macOS Gatekeeper script flagging |
| #28095 | 2026-06-13T17:29Z | @zengwq18 | Archived chats show a Delete button, but deletion does not work | LOW — UI/UX |
| #28087 | 2026-06-13T14:58Z | @wsy150728 | Codex Desktop can get stuck on sqlite state backfill with partial new index while legacy state is co | LOW — desktop state issue |
| #28078 | 2026-06-13T12:51Z | @guhans6 | Xcode 27 beta Codex sign-in fails only for ChatGPT Pro account requiring email OTP; Go account work | LOW — auth flow |
| #28077 | 2026-06-13T11:51Z | @mazukabz | Codex tasks regressed from under 5 minutes to 30-50 minutes | LOW — performance regression |
| #28019 | 2026-06-13T03:26Z | @Rajahn | Codex Chrome extension 1.1.5 uses Chrome 143+ runtime.getVersion(), breaking backend discovery on Ch | LOW — Chrome extension |
| #27980 | 2026-06-12T23:38Z | @rajsundesha | I am constantly using it the other plugin work fine now new featured plugin launch @Sites and many m | LOW — plugin |
| #27978 | 2026-06-12T23:25Z | @yuchonghua | The Codex desktop application has poor compatibility with SSH development | LOW — SSH |
| #27957 | 2026-06-12T21:43Z | @su-nyx | [Windows] documents plugin render_docx.py: malformed -env:UserInstallation URI crashes soffice; mi | LOW — Windows, off-target |
| #27928 | 2026-06-12T18:29Z | @sagi6s | CLI /review follow-up fails with review_rollout_user id: Expected an ID that begins with 'msg' | LOW — CLI |
| #27922 | 2026-06-12T18:08Z | @RohanAdwankar | Side thread launched with /side while main thread is running disconnects stream | LOW — streaming |
| #27876 | 2026-06-12T13:51Z | @Kemoke | Chat hang | LOW — general hang |
| #27872 | 2026-06-12T13:39Z | @peeky-co | Codex Local auth redirects to add-phone in Israel; no SMS option, Cloud/API work | LOW — auth |
| #27850 | 2026-06-12T11:11Z | @lgkvidfar | Usage limit bug, blocking with 100% left | LOW — usage limits |
| #27843 | 2026-06-12T10:29Z | @duarteadv | Desktop sidebar shows "No chats" for all projects — thread/list with useStateDbOnly:true returns 0 t | LOW — UI/desktop state |
| #27821 | 2026-06-12T08:23Z | @samwisegamge-eth | UI not responding despite all efforts | LOW — general hang |
| #27811 | 2026-06-12T07:28Z | @yuebozhang | [TUI][macOS][Warp] Ctrl+V after copying plain terminal text freezes the TUI | LOW — TUI/macOS |

**Priority picks for next comment cycle:** #28184, #27891, #27895 — all three directly name "Computer Use" and are ≤2 days old.

---

## Posted rows scanned

3 rows in lead-log.md have Status=POSTED and a `github.com/openai/codex/issues/` URL:

| Issue | Date | In 7-day window? |
|-------|------|------------------|
| #18803 | 2026-05-18 | No (27 days ago) |
| #22927 | 2026-05-18 | No (27 days ago) |
| #22949 | 2026-05-18 | No (27 days ago) |

**0 issues were within the 2026-06-07 → 2026-06-14 window → 0 reply lookups performed.**

---

## Errors

- **`gh` CLI not installed** in this execution environment. Commands `gh issue view` and `gh issue list` were unavailable; GitHub MCP tools (`mcp__github__search_issues`) were used for step 4 instead. Step 4 succeeded.
- **Reply lookup (step 3) not possible via MCP:** GitHub MCP tools in this session are restricted to `igorganapolsky/openclaw-mac-ai-workstation-setup`. Cross-repo comment lookup for `openai/codex` issues is blocked. This is moot for today's run (0 in-window posted issues) but will be a constraint if/when recent-posted rows appear in lead-log.md.
