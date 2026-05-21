# Daily Engagement Report — 2026-05-21

## Replies needing follow-up

> **Note:** Direct comment-level access to `openai/codex` is blocked in this session (GitHub MCP tools are restricted to `igorganapolsky/openclaw-mac-ai-workstation-setup`). Reply detection for issues #22927 and #22949 could not be performed. See `## Errors` section below.

No new replies confirmed (access blocked — see Errors).

## New on-target open issues (not yet commented)

The following issues were returned by searching `openai/codex` for `Computer Use macOS` (state:open, sorted by created desc, limit 30). Issues already present in `lead-log.md` have been excluded. Issues with the strongest symptom match to the site's landing page assets (`troubleshooting.html`, `computer-use-plugin-unavailable.html`, `codex-computer-use-intel-mac.html`) are flagged.

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|-----------|---------|-------------------------|----------------------|
| #23840 | 2026-05-21 | @SSBrouhard | Codex Desktop Computer Use MCP initialize times out, but same client handshakes from Terminal | **STRONG** — MCP initialize timeout matches `computer-use-plugin-unavailable.html` root cause |
| #23645 | 2026-05-20 | @agentropolis | Computer Use get_app_state hang and relative hook path failure are hard to diagnose | **STRONG** — get_app_state hang matches troubleshooting.html Cause 3 (runtime not registering) |
| #23452 | 2026-05-19 | @pranaysuyash | Codex Desktop: Computer Use blocks get_app_state(Codex) with "not allowed ... for safety reasons" | **STRONG** — safety-block on get_app_state matches troubleshooting.html Cause 4 (entitlement/sandbox) |
| #23811 | 2026-05-21 | @jding8190-source | Persistent ghost overlay / duplicated blurred layer in Codex Desktop plugins page on Intel Mac | Moderate — Intel Mac rendering bug, matches `codex-computer-use-intel-mac.html` audience |
| #23640 | 2026-05-20 | @Melin00 | Codex Desktop plugin marketplace is covered by a large white overlay on macOS Intel | Moderate — macOS Intel marketplace overlay, same Intel Mac asset match |
| #23670 | 2026-05-20 | @tjlicc | Codex Desktop composer overlay renders incorrectly on built-in Mac display, but works on external mo | Moderate — macOS display rendering, general Desktop audience |
| #23787 | 2026-05-21 | @xdifu | Recovery tool for Codex App 0.130→0.131 startup crash: SQLx checksum drift + 30s backfill timeout | Moderate — startup crash on macOS matches troubleshooting.html Cause 1 (app won't launch) |
| #23849 | 2026-05-21 | @ACuteTomcat | Codex Desktop on macOS loses message hover after long session; main/renderer/GPU stay hot until app | Low — macOS Desktop performance, general audience |
| #23482 | 2026-05-19 | @KeisukeNagakawa | macOS remote control stalls: host app-server responsive but remote manager stays disconnected | Low — macOS-specific but remote control focus, not Computer Use directly |
| #23520 | 2026-05-19 | @shamsghi | [BUG] macOS App sidebar fully broken after switching to light mode | Low — macOS UI bug, general Desktop audience |

(All other 20 results in the search page were general Codex CLI/TUI/Windows/Linux/mobile issues with no Computer Use or macOS specificity.)

## Posted rows scanned

**2 issues scanned** (both dated 2026-05-18, within the 7-day window ending 2026-05-21):

- `openai/codex#22927` — @Scubasteve417 — "Computer Use 'runtime app missing'" — POSTED (Comment 4480331215)
- `openai/codex#22949` — @river-walras — "MCP startup incomplete (computer-use)" — POSTED (Comment 4480978482)

Rows excluded from scan (Status ≠ Posted/Follow-up posted, or URL ≠ openai/codex):
- `#81917` (openai/chatgpt-app, VERIFIED PITCH)
- `#81908` (openai/chatgpt-app, CLOSED)
- `#81907` (openai/chatgpt-app, VERIFIED PITCH)
- `#81906` (openai/chatgpt-app, VERIFIED PITCH)
- `#18803` (GitHub #18803, POSTED — but URL does not contain `github.com/openai/codex/issues/`)
- `openai/codex#22856`, `#22903`, `#22921`, `#22949-hold`, `#22949-hold` (DRAFT IN `_holding/`)
- `anthropics/claude-code#50903` (different repo)

## Errors

### Step 3 — Reply detection blocked (access restriction)

Attempting `mcp__github__issue_read` with `get_comments` on `openai/codex#22927` and `openai/codex#22949` returned:

```
Access denied: repository "openai/codex" is not configured for this session.
Allowed repositories: igorganapolsky/openclaw-mac-ai-workstation-setup
```

The GitHub MCP server in this session is scoped to a single repository. Per-issue comment threads on `openai/codex` cannot be read without expanding the allowed-repository list in the session configuration. **Workaround:** run reply detection locally with `gh issue view <num> --repo openai/codex --comments --json comments` or re-run this monitor from a session with broader repository access.

### Step 4 — Search executed but repo:openai/codex scope not enforced by MCP filter

The `mcp__github__search_issues` tool accepted the query `Computer Use macOS repo:openai/codex state:open` and returned 834 total matches (30 items in the first page). The tool did NOT block on the repository restriction for search queries, only for direct repository reads. The 30 items on this page have been filtered and reported above.
