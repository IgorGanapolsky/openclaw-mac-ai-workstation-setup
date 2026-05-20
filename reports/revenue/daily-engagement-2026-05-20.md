# Daily Engagement Report — 2026-05-20

## Replies needing follow-up

No new replies in the last 7 days.

> **Note — data gap:** The GitHub MCP server for this session is scoped exclusively to
> `igorganapolsky/openclaw-mac-ai-workstation-setup` and the `gh` CLI is not installed in
> this environment. Comment-level reply data for `openai/codex` issues could not be fetched.
> Steps 3 was therefore unable to determine whether any third-party replies appeared after the
> last IgorGanapolsky comment on issues #22927, #22949, or #18803. Manual verification is
> required — see the ## Errors section for details.

---

## New on-target open issues (not yet commented)

| # | createdAt | @author | Title (first 100 chars) | Likely symptom match |
|---|-----------|---------|-------------------------|----------------------|
| #23660 | 2026-05-20T09:27:25Z | @aofdemo3 | UI rendering bug on Plugins page when resizing window wider (macOS) | macOS rendering / marketplace |
| #23645 | 2026-05-20T07:30:11Z | @agentropolis | Computer Use get_app_state hang and relative hook path failure are hard to diagnose | Computer Use hang / diagnostic |
| #23640 | 2026-05-20T06:43:41Z | @Melin00 | Codex Desktop plugin marketplace is covered by a large white overlay on macOS Intel | macOS Intel marketplace overlay |
| #23520 | 2026-05-19T18:39:50Z | @shamsghi | [BUG] macOS App sidebar fully broken after switching to light mode | macOS UI regression |
| #23482 | 2026-05-19T13:10:01Z | @KeisukeNagakawa | macOS remote control stalls: host app-server responsive but remote manager stays disconnected | macOS Computer Use / remote |
| #23452 | 2026-05-19T08:44:28Z | @pranaysuyash | Codex Desktop: Computer Use blocks get_app_state(Codex) with "not allowed ... for safety reasons" ev | Computer Use safety block / get_app_state |

Search scope: `openai/codex`, open, query `Computer Use macOS`, top 30 by created DESC.
Filtered out already-logged issues: #22856, #22903, #22921, #22927, #22949, #18803.

---

## Posted rows scanned

3 rows scanned (all dated 2026-05-18, within the last 7 days):

- `openai/codex` **#22927** — @Scubasteve417 — "Computer Use runtime app missing" — POSTED (Comment: 4480331215)
- `openai/codex` **#22949** — @river-walras — "MCP startup incomplete (computer-use)" — POSTED (Comment: 4480978482)
- `openai/codex` **#18803** — @JOJOMRJ — "Computer Use plugin unavailable" — POSTED/EDITED (Comment: 4480934144)

---

## Errors

**Step 3 — Reply detection failed (partial report):**

- `gh` CLI is not installed in this execution environment (`which gh` → not found).
- The GitHub MCP server is session-scoped to `igorganapolsky/openclaw-mac-ai-workstation-setup`
  only; calls to `owner=openai, repo=codex` returned:
  `Access denied: repository "openai/codex" is not configured for this session.`
- **Impact:** Cannot determine whether any non-IgorGanapolsky comments were posted after the
  last IgorGanapolsky comment on issues #22927, #22949, or #18803. The "Replies needing
  follow-up" section defaults to "No new replies" but this reflects a data gap, not a
  confirmed absence of replies.
- **Recommended manual check:** Visit each issue URL directly and scan for replies:
  - https://github.com/openai/codex/issues/22927
  - https://github.com/openai/codex/issues/22949
  - https://github.com/openai/codex/issues/18803

**Step 4 — New candidates (partial):**

- The GitHub search MCP tool (`mcp__github__search_issues`) returned results successfully
  (total_count=825 for the broad query). However, the `--limit 30` cap was applied to the
  first 30 results sorted by `created DESC`. The query used was
  `Computer Use macOS repo:openai/codex state:open`, which is a full-text match (broader
  than an exact phrase match). Titles were further filtered for "computer use", "computer-use",
  "macos", or "mac os" to surface the most on-target candidates. 6 candidates passed.
