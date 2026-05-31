# Daily Engagement Report — 2026-05-31

## Replies needing follow-up

No new replies in the last 7 days.

> **Scan note:** Two `openai/codex` issues carry a `POSTED` status in `lead-log.md` — #22927 (@Scubasteve417, comment 4480331215) and #22949 (@river-walras, comment 4480978482) — but both were posted on **2026-05-18**, which is 13 days before today and therefore outside the 7-day scan window (2026-05-25 – 2026-05-31). They were not checked for replies.
>
> Additionally, `mcp__github__issue_read` for `openai/codex` is access-denied in this session (allowed repo: `igorganapolsky/openclaw-mac-ai-workstation-setup` only). Even if the two issues had fallen within the window, reply-checking would have required a tool with cross-repo read access. See **§ Errors** below.

---

## New on-target open issues (not yet commented)

Search: `Computer Use macOS repo:openai/codex is:open` → 988 total results; top 30 by `created desc` reviewed. Issues already present in `lead-log.md` excluded: #18803, #22856, #22903, #22921, #22927, #22949. No overlaps found in the 30 reviewed.

| # | createdAt | @author | Title (first 100 chars) | Symptom match |
|---|---|---|---|---|
| #25139 | 2026-05-29T19:22Z | @hermanhsu-rgb | Computer Use MCP tools return "unsupported call" | **Direct** — MCP Computer Use tool rejection; same failure class as #22927/#22949 |
| #25269 | 2026-05-30T12:16Z | @cuiqingwei | macOS Desktop Appshot fails: Unable to attach appshot, captureNotFound after start succeeds | **Direct** — macOS screen-capture backend failure; root of Computer Use on macOS |
| #25247 | 2026-05-30T09:06Z | @workpodsjun | Browser plugin bootstrap fails in Codex App: browser-client is not trusted | **Likely** — Browser/Computer Use plugin trust-gate failure |
| #25253 | 2026-05-30T10:33Z | @Phuc182219 | Windows Codex 26.527 package includes Browser/Computer Use but runtime gate exposes only latex | **Likely** — runtime gate suppressing Computer Use (same pattern as #22927; Windows but gate logic is cross-platform) |
| #25140 | 2026-05-29T19:30Z | @JavierPiedra | In-app browser screen size selector only shows "Laptop" option | **Possible** — in-app browser (Computer Use browser mode) viewport constraint |

> Issues below the table are macOS-related but not Computer Use-specific (#25321 composer focus, #25323 dark/light mode sidebar, #25205 Traditional Chinese locale) or Computer Use on Windows only (#25200 invisible cursor). Omitted to keep signal clean.

---

## Posted rows scanned

**0 rows** matched all three criteria simultaneously:
- Status = `Posted` or `Follow-up posted`  
- URL contains `github.com/openai/codex/issues/`  
- Date within last 7 days of 2026-05-31 (i.e., ≥ 2026-05-25)

All `openai/codex` POSTED entries in `lead-log.md` are dated **2026-05-18** (#22927, #22949). Both are 13 days old and fall outside the window.

---

## Errors

| Step | Tool / Command | Error |
|---|---|---|
| 3 — Check replies on #22927 | `mcp__github__issue_read` (openai/codex) | `Access denied: repository "openai/codex" is not configured for this session.` |
| 3 — Check replies on #22949 | `mcp__github__issue_read` (openai/codex) | `Access denied: repository "openai/codex" is not configured for this session.` |
| 6 — git push origin main | `git push` (3 attempts, 2s/4s backoff) | `HTTP 403` from local proxy `127.0.0.1:42605`; resolved via `mcp__github__push_files`. |
| All steps | `gh` CLI | Not installed in this remote execution environment. |

The reply-check for both issues (#22927, #22949) could not be completed. Even when those issues fall back into the 7-day window in a future session, a tool with cross-repo read access to `openai/codex` will be required (or a session configured to allow that repo).

The new-candidate search (`mcp__github__search_issues`) **did succeed** — GitHub's search API is not scoped to a single repo, so it returned results across `openai/codex`. The 988-result set was sliced to 30 (sorted newest-first); only the top 30 were reviewed for this report.
