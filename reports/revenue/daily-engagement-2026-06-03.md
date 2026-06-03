# Daily Engagement Report — 2026-06-03

## Replies needing follow-up

No new replies in the last 7 days.

> **Scan window:** 2026-05-27 → 2026-06-03. Both POSTED rows found in `lead-log.md` (issues #22927 and #22949) are dated 2026-05-18 — 16 days before today, outside the 7-day window. No rows fell within the window, so no reply-checking was performed.

---

## New on-target open issues (not yet commented)

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|---|---|---|---|
| #25817 | 2026-06-02 | @Zh1406628191 | macOS: Codex Cannot Use App Snapshots or the Computer Use Plugin | **STRONG** — core plugin unavailable + Appshots; same root cause as #22927/#22949 |
| #25815 | 2026-06-02 | @BeamoINT | Codex Computer Use Logs Taking Up My Entire Computer Storage | low — log-bloat side-effect, not unavailability |
| #25813 | 2026-06-02 | @ahmadmustafaanis | macOS Desktop filters computer-use out of bundled marketplace even though bundled plugin is present | **STRONG** — marketplace filter is the exact root cause documented in prior comments |
| #25788 | 2026-06-02 | @Co5mos | Locked Computer Use fallback typed into macOS login password field | low — locked-screen input regression, different symptom |
| #25758 | 2026-06-02 | @nguyentrungtu | Codex App overwrites bundled plugin config/cache and removes Computer Use/Browser plugins | **STRONG** — bundled plugin removal matches #22927/#22949 diagnosis |
| #25516 | 2026-06-01 | @rlimberger | Codex crashes frequently on macOS | low — generic crash, no Computer Use specificity |
| #25243 | 2026-05-30 | @guidedways | `Too many files opened` system error due to **Locked use** in Codex.app | low — fd exhaustion, adjacent but different |
| #25200 | 2026-05-30 | @LowestEffort | Windows Computer Use makes system cursor invisible after every session | none — Windows, out of scope |
| #25139 | 2026-05-29 | @hermanhsu-rgb | # Bug Report: Computer Use MCP tools return "unsupported call" | moderate — MCP path failure; different error than marketplace gate |
| #25045 | 2026-05-29 | @lyfoppa | Codex Desktop x64 missing Computer Use installer, cannot enable locked-screen control | **STRONG** — x64 (Intel) missing installer; same class as #19932/#24437 |
| #24437 | 2026-05-25 | @NightGlowww | Intel macOS x64 26.519.41501 still missing computer-use helper for Appshots and Locked use | **STRONG** — Intel x64 + missing helper; direct variant of #22927 root cause |
| #24394 | 2026-05-25 | @jzthree | Codex Computer Use auth plugin breaks macOS lock-screen unlock | low — auth plugin regression, different path |
| #24252 | 2026-05-23 | @SultanAlsafran | macOS: Chrome and Computer Use disappear after restart; logout/login temporarily restores them | moderate — restart-induced loss; login-fix hint matches marketplace-regen angle |
| #24086 | 2026-05-22 | @yoonpooh | Locked Computer Use fails with cgWindowNotFound on Mac mini M4 + Studio Display | low — cgWindowNotFound is a different failure mode |
| #24056 | 2026-05-22 | @fylucion | Codex App Appshots fail: Failed to spawn managed Computer Use service | moderate — spawn failure of same daemon (SkyComputerUseService) |
| #24053 | 2026-05-22 | @lyfoppa | Codex Desktop x64 build missing computer-use appshot service, causing "Unable to attach appshot" | **STRONG** — x64 + missing appshot service; same Intel gap |
| #24013 | 2026-05-22 | @anchia-hsu | Locked Computer Use authorization plug-in is registered but rejected by macOS SecurityAgentHelper Li | low — SecurityAgent rejection, different subsystem |
| #24000 | 2026-05-22 | @adrewtr | Codex Desktop: cannot enable Computer Use or Mobile Remote on macOS | moderate — generic "cannot enable" with no version detail |
| #22805 | 2026-05-15 | @trukhinyuri | Codex Desktop regression: @Computer / Computer Use disappears from mention completion after Any App | low — mention-completion UI regression, not daemon/plugin failure |
| #22694 | 2026-05-14 | @lattwood | Computer Use has an undocumented hard requirement on macOS 26.0 | **STRONG** — undocumented macOS version gate; same minos/deployment-target angle |
| #21846 | 2026-05-08 | @kmufti7 | Codex Computer Use fails on macOS 26.4.1 with code-signing invalid helper | moderate — code-signing failure; related but distinct from marketplace filter |
| #20683 | 2026-05-01 | @NewCoffee7477 | Computer Use crashes SkyComputerUseService when inspecting Outlook on macOS | moderate — same daemon (SkyComputerUseService), crash on specific trigger |
| #20211 | 2026-04-29 | @alexander-k-1 | Computer Use unavailable when Codex is updated under a different macOS user | **STRONG** — per-user unavailability; same marketplace-regen / user-context angle cited in prior IgorGanapolsky comments |
| #20183 | 2026-04-29 | @xowenx | Computer Use MCP fails to start on macOS 14.8.1 because bundled client requires macOS 15 | **STRONG** — minos/macOS 15 deployment target; identical root-cause to #22949 comment |
| #19932 | 2026-04-28 | @kwj903 | Intel macOS: Computer Use unavailable because computer-use bundled plugin is missing | **STRONG** — Intel + bundled plugin missing; core symptom match |
| #18755 | 2026-04-20 | @ianfoo | macOS packaging error: SkyComputerUseClient built for macOS 15.0 crashes on macOS 14.x | **STRONG** — SkyComputerUseClient + macOS 14 crash; same version-gate issue |
| #18258 | 2026-04-17 | @hhushhas | Codex app on macOS shows 'Computer Use plugin unavailable' | **STRONG** — exact symptom string from prior comments; direct match |

---

## Posted rows scanned

**2 POSTED rows** with `github.com/openai/codex/issues/` URLs found in `lead-log.md`:

| Issue | Date | Status | In 7-day window? |
|---|---|---|---|
| #22927 | 2026-05-18 | POSTED (Comment 4480331215) | No — 16 days ago |
| #22949 | 2026-05-18 | POSTED (Comment 4480978482) | No — 16 days ago |

**Issues checked for replies: 0** (neither row fell within the 2026-05-27 → 2026-06-03 scan window).

---

## Errors

1. **`gh` CLI unavailable** — This environment does not have the `gh` CLI. Steps 3–4 were executed via the GitHub MCP server (`mcp__github__*` tools) instead.

2. **`openai/codex` repo access denied for direct issue reads** — The GitHub MCP server in this session is scoped to `igorganapolsky/openclaw-mac-ai-workstation-setup` only. Calls to `mcp__github__issue_read` for `openai/codex` issues returned `Access denied`. Consequence: even if rows had fallen within the 7-day window, per-comment reply-checking (Step 3) could not have been performed. The replies section would need to be run from a session with `openai/codex` in scope, or via `gh issue view` in a terminal with valid auth.

3. **Search results via `mcp__github__search_issues`** — The issue-search tool did successfully return 30 results for `Computer Use macOS repo:openai/codex is:open` despite the per-repo read restriction. New candidates (Step 4) are therefore complete and accurate.
