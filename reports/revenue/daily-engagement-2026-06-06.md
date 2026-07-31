# Daily Engagement Report — 2026-06-06

## Replies needing follow-up

No new replies in the last 7 days.

> **Note:** Two `openai/codex` issues appear in `lead-log.md` with Status **POSTED** — #22927 (2026-05-18) and #22949 (2026-05-18). Both dates fall outside the 7-day scan window (2026-05-30 → 2026-06-06), so neither was queried for replies. See **Errors** section for additional access constraints.

---

## New on-target open issues (not yet commented)

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|---|---|---|---|
| #26743 | 2026-06-06T05:22:45Z | @be-student | Codex Desktop: Locked Computer Use stays on loginwindow; app GUI access returns cgWindowNotFound whi | **Strong** — locked CU / loginwindow hang, macOS |
| #26738 | 2026-06-06T04:31:04Z | @chenyh200807 | Codex Desktop Computer Use can trigger memory runaway to 172GB on macOS | **Strong** — CU memory runaway, macOS |
| #26736 | 2026-06-06T04:24:30Z | @cmmchina | Codex Desktop on macOS drives high GPU only while window is visible; minimizing immediately drops us | Medium — macOS Desktop GPU spike, CU-adjacent |
| #26592 | 2026-06-05T11:18:14Z | @1h20496138-source | Codex App on macOS repeatedly prompts to reinstall bundled computer-use plugin after every restart | **Strong** — CU plugin missing/reinstall loop, macOS |
| #26536 | 2026-06-05T05:11:39Z | @psybhan1 | Windows Codex app: Computer Use shows "Computer Use plugins unavailable" despite current docs saying | Medium — CU unavailable (Windows; cross-platform signal) |
| #26507 | 2026-06-05T03:23:03Z | @danbenmoshe | Mac desktop app freezes on launch (blank screen, high CPU) — corrupted ~/.codex session; fixed by mo | Medium — macOS Desktop launch freeze |
| #26458 | 2026-06-04T20:33:42Z | @jsduke246 | Codex desktop repeatedly crashes when using Computer Use. | **Strong** — CU crash, Desktop |
| #26451 | 2026-06-04T19:36:59Z | @fatgingercats | Codex Desktop macOS: bundled Computer Use plugin skipped as missing after update | **Strong** — CU plugin skipped/missing, macOS |
| #26429 | 2026-06-04T17:05:44Z | @LockyJohn | Computer Use plugin becomes unavailable after Codex Desktop restart | **Strong** — CU unavailable after restart, exact prior-issue pattern |
| #26415 | 2026-06-04T15:59:28Z | @heyobravo | Codex Desktop: Locked Computer Use hangs on macOS 26.6; SkyComputerUseService spins at high CPU | **Strong** — locked CU / SkyComputerUseService, macOS |
| #26381 | 2026-06-04T12:20:59Z | @aflekkas | Browser Use installed/enabled but node_repl JS tool is not exposed on macOS | Medium — macOS plugin not exposed, CU-adjacent |
| #26377 | 2026-06-04T11:28:05Z | @michikaru | Computer Use plugin install does not persist after restart in Codex desktop | **Strong** — CU plugin persistence failure, Desktop |
| #26685 | 2026-06-05T22:16:30Z | @chilu18 | Codex Desktop macOS crash: git worker OOM after branch-diff git add scans home directory | Low — macOS Desktop crash (OOM), not CU-specific |
| #26627 | 2026-06-05T15:17:27Z | @bhandras | ChatGPT app remote control does not sync back the session to the CLI | Low — remote control sync, not CU-specific |
| #26470 | 2026-06-04T22:12:46Z | @noirtim | Codex Browser/Chrome plugins installed, but no browser backend registers; `agent.browsers.list()` st | Low — browser plugin, not macOS CU |
| #26485 | 2026-06-04T23:43:33Z | @light12222 | Codex fails on shared Linux systems due to global /tmp/codex-ipc permissions | Low — Linux /tmp permissions, off-target |
| #26779 | 2026-06-06T12:54:06Z | @Sankora | Bug report: Codex mobile via ChatGPT mobile app remote Mac connection tries to run powershell.exe | Low — mobile/remote, Windows shell mismatch |
| #26762 | 2026-06-06T09:31:45Z | @su6 | Feature request: Support pinning and custom sorting for Codex threads in the project sidebar | Low — feature request, off-target |
| #26747 | 2026-06-06T06:31:10Z | @Gan-lyncr | 10k TPM limit not enough | Low — rate limit, off-target |
| #26677 | 2026-06-05T20:57:06Z | @charlotteliang | `codex plugin add firebase@firebase` fails | Low — plugin install, not CU |
| #26655 | 2026-06-05T18:07:33Z | @javis63 | exceeded retry limit, last status: 429 Too Many Requests | Low — 429 rate limit, off-target |
| #26626 | 2026-06-05T15:12:02Z | @bhandras | Codex iOS app slow scrolling often blocking for seconds | Low — iOS, off-target |
| #26596 | 2026-06-05T11:50:04Z | @tonnd21413ca | Windows Codex app missing "Control this PC" tab in Settings > Connections | Low — Windows, off-target |
| #26595 | 2026-06-05T11:41:16Z | @hepei8304 | codex imagegen bug 无法生图 | Low — image gen, off-target |
| #26572 | 2026-06-05T09:32:12Z | @liowald | Built-in image_gen returns unrelated infographic outputs in Codex CLI session | Low — image gen, off-target |
| #26560 | 2026-06-05T08:16:42Z | @Sakura125809 | Remote Control: target node_repl launches with controller CODEX_HOME env despite correct target conf | Low — remote control env, off-target |
| #26529 | 2026-06-05T04:49:04Z | @farbodg | Background automation cannot consistently resolve or reach external hosts while interactive shell an | Low — networking, off-target |
| #26415 | 2026-06-04T15:59:28Z | @heyobravo | Codex Desktop: Locked Computer Use hangs on macOS 26.6; SkyComputerUseService spins at high CPU | (see above) |
| #26408 | 2026-06-04T15:43:48Z | @kmizuta | Project-scoped custom subagent in `.codex/agents` is advertised but cannot be spawned | Low — subagent, off-target |
| #26391 | 2026-06-04T13:30:31Z | @kevinmnm | Fast mode is not working in Codex App Automations | Low — fast mode, off-target |
| #26368 | 2026-06-04T10:15:18Z | @justinPengPeng | [Bug] Input freezes after prolonged idle period — unable to type or activate IME | Low — input/IME, off-target |

**Strong-match candidates (7):** #26743, #26738, #26592, #26458, #26451, #26429, #26415, #26377

---

## Posted rows scanned

**0 issues checked** (within 7-day window 2026-05-30 → 2026-06-06).

Found in `lead-log.md` with Status **POSTED** and URL `github.com/openai/codex/issues/`:

| Date | Issue | Note |
|---|---|---|
| 2026-05-18 | #22927 | Outside 7-day window — excluded from reply scan |
| 2026-05-18 | #22949 | Outside 7-day window — excluded from reply scan |

---

## Errors

1. **Reply scan unavailable (access denied):** `mcp__github__issue_read` is restricted to `igorganapolsky/openclaw-mac-ai-workstation-setup`. Cross-repo comment reads on `openai/codex` are blocked. Even if issues #22927 and #22949 were within the 7-day window, their comment history could not be fetched via this session's MCP tools. `gh` CLI is not available in this remote environment. To unblock: add `openai/codex` to this session's allowed repositories, or run the reply-scan step locally with `gh issue view <num> --repo openai/codex --comments --json comments`.

2. **Search results de-duplicated manually:** The `mcp__github__search_issues` response exceeded the token limit and was redirected to a temp file; all 30 results were parsed successfully from that file.
