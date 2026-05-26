# Daily Engagement Report — 2026-05-26

## Replies needing follow-up

> **Note:** The 3 posted `openai/codex` issues (all dated 2026-05-18) fall **outside** the 7-day window ending 2026-05-26 (window = 2026-05-19 → 2026-05-26). Zero issues qualified for reply-detection. Additionally, direct comment-level access to `openai/codex` is blocked in this session — see `## Errors` below.

No new replies in the last 7 days.

## New on-target open issues (not yet commented)

Search: `Computer Use macOS repo:openai/codex state:open` sorted by `created desc`, limit 30.
None of the 30 results appear in `lead-log.md`. All are new candidates. Symptom-match ratings reference site assets: `computer-use-plugin-unavailable.html`, `codex-computer-use-intel-mac.html`, `troubleshooting.html`.

### STRONG match — direct Computer Use symptom

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|-----------|---------|-------------------------|----------------------|
| #24437 | 2026-05-25 | @NightGlowww | Intel macOS x64 26.519.41501 still missing computer-use helper for Appshots and Locked use | **STRONG** — Intel Mac + missing computer-use helper = exact match for `codex-computer-use-intel-mac.html` + `computer-use-plugin-unavailable.html` |
| #24435 | 2026-05-25 | @Taz-dingo | Appshots hotkey dispatches but capture never starts on macOS arm64 | **STRONG** — Computer Use capture never starts = `computer-use-plugin-unavailable.html` Cause 2 (runtime registered but never activates) |
| #24566 | 2026-05-26 | @hnsy2016 | Codex Desktop plugin marketplace rendering broken on macOS 12.7.6 | **STRONG** — plugin marketplace entry-point broken = Computer Use is unreachable; matches `troubleshooting.html` Cause 1 (marketplace/install step fails) |
| #24397 | 2026-05-25 | @coderZoe | Bug: Codex startup blocks on MCP/App connector initialization, causing very slow launches | **STRONG** — MCP/App connector init block = `computer-use-plugin-unavailable.html` root cause angle (MCP server never completes handshake) |

### MODERATE match — macOS Desktop, adjacent symptoms

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|-----------|---------|-------------------------|----------------------|
| #24571 | 2026-05-26 | @imsunhao | Codex Desktop on macOS gets stuck thinking after interrupted/resumed turn with Item not found in tur | Moderate — macOS Desktop hang; general `troubleshooting.html` audience |
| #24551 | 2026-05-26 | @rogierx | Codex Desktop macOS silently dies overnight with powerd ClientDied and no crash report | Moderate — macOS background-process crash; `troubleshooting.html` Cause 5 (daemon dies silently) |
| #24548 | 2026-05-26 | @fragpit | GitHub plugin connector shows unrelated installed accounts and a private repo after reinstall | Moderate — plugin connector state corruption; adjacent to Computer Use install path |
| #24536 | 2026-05-26 | @yanxiyue | codex exec can silently complete empty when configured MCP tools are deferred behind tool_search | Moderate — MCP tools deferred/silent; `computer-use-plugin-unavailable.html` MCP angle |
| #24458 | 2026-05-25 | @qtnx | Codex macOS app becomes slow, unstable and crashed with high CPU when using inline browser on large | Moderate — macOS crash under load; general `troubleshooting.html` audience |
| #24440 | 2026-05-25 | @qoli | macOS remote sessions cannot write to external-volume workspaces on 0.130/0.132/0.133 (Operation no | Moderate — macOS 0.130-0.133 regression; version-specific troubleshooting audience |
| #24433 | 2026-05-25 | @EYHN | Codex Desktop ambient_suggestions used Computer Use to open/read Gmail in Chrome without a visible u | Moderate — Computer Use IS working (privacy/safety concern, not install failure); different angle |
| #24410 | 2026-05-25 | @KeisukeNagakawa | Goal tracking fails with missing thread_goals table in remote macOS Codex app session | Moderate — macOS remote session DB error; `troubleshooting.html` general audience |

### LOW / NO match — general Codex or non-Computer-Use

| # | createdAt | @author | title (first 100 chars) | likely-symptom-match |
|---|-----------|---------|-------------------------|----------------------|
| #24585 | 2026-05-26 | @SIGMAREAL | GPT-5.4 Fast and GPT-5.5 Fast are extremely slow (~1 token/s) | Low — model speed, not macOS/Computer Use |
| #24582 | 2026-05-26 | @EthanSK | code-mode rollout: exec_command stdout framing leaks into input_image base64, corrupting Responses A | Low — API framing bug; no macOS/Computer Use overlap |
| #24575 | 2026-05-26 | @liuchongxiao | Add intraline diff highlighting to Codex review. | None — feature request |
| #24554 | 2026-05-26 | @cyl6 | waiting for a long time but no result! | None — vague, no symptom detail |
| #24550 | 2026-05-26 | @KwakYounHo | Responses WebSocket falls back when compacted replacement_history contains large inline images | Low — API/WebSocket issue |
| #24526 | 2026-05-26 | @SGT-Cho | Shell tool appears stuck when a completed git push output is not surfaced promptly | Low — shell tool, not Computer Use |
| #24525 | 2026-05-26 | @beikeliu | Dropdown box obstruction | None — UI micro-bug |
| #24520 | 2026-05-26 | @jicki | The status display shows that the ID and credit limit are not displaying correctly. | None — account display |
| #24501 | 2026-05-26 | @bowmandesign | Severe Codex Safety Failure: Docker Container / Host Filesystem Boundary Confusion Risked 31 Years o | Low — safety/sandboxing, not Computer Use macOS |
| #24475 | 2026-05-25 | @XinShuichen | Codex App/CLI: subagent tasks trigger reconnect loop and stream disconnect | Low — subagent reconnect |
| #24466 | 2026-05-25 | @dshanklin-bv | Failed to set goal | None — goal feature |
| #24462 | 2026-05-25 | @inVains | Mobile Remote briefly shows a local project/thread, then removes both after sync | None — mobile |
| #24445 | 2026-05-25 | @puneetduggal | Codex Desktop shows "You're out of Codex messages" despite 99% usage remaining | None — quota display |
| #24436 | 2026-05-25 | @nooblyf | Personality "none" doesn't work anymore | None — personality setting |
| #24425 | 2026-05-25 | @nialse | Session disappear. Codex trips over bad JSON history. | Low — JSON history corruption |
| #24422 | 2026-05-25 | @GGBondBlueWhale | GPT-5.5 Fast suddenly feels as slow as Standard, with long thinking/context/search stalls | None — model speed |
| #24414 | 2026-05-25 | @Yong-yuan-X | Codex IDE extension often stays on "Thinking" for a long time even for simple prompts | Low — IDE extension |
| #24406 | 2026-05-25 | @ouatu-ro | Broken continuous horizontal text oscillation animation causes motion sickness | None — animation UI bug |

## Posted rows scanned

**3 issues found** with Status = `Posted` and URL containing `github.com/openai/codex/issues/` in `lead-log.md`.
All 3 are dated **2026-05-18**, which is **8 days before TODAY (2026-05-26)** — outside the 7-day window (2026-05-19 → 2026-05-26). Zero issues qualified for reply detection.

| Issue | Date | Status | Comment ID |
|-------|------|--------|------------|
| `openai/codex#22927` — @Scubasteve417 — "Computer Use 'runtime app missing'" | 2026-05-18 | POSTED | 4480331215 |
| `openai/codex#22949` — @river-walras — "MCP startup incomplete (computer-use)" | 2026-05-18 | POSTED | 4480978482 |
| `openai/codex#18803` — @JOJOMRJ — "Computer Use plugin unavailable" | 2026-05-18 | POSTED (edited) | 4480934144 |

Rows excluded from scan (Status ≠ Posted/Follow-up posted, or URL ≠ openai/codex, or outside window):
- `openai/codex#22856`, `#22903`, `#22921` — DRAFT IN `_holding/`
- `#81917`, `#81908`, `#81907`, `#81906` — different repo (openai/chatgpt-app or similar), VERIFIED PITCH / CLOSED
- `anthropics/claude-code#50903` — different repo

## Errors

### Step 3 — Reply detection blocked (access restriction)

```
mcp__github__issue_read on openai/codex#22927:
  Error: Access denied: repository "openai/codex" is not configured for this session.
  Allowed repositories: igorganapolsky/openclaw-mac-ai-workstation-setup
```

This applies to all three posted issues. Per-issue comment threads on `openai/codex` cannot be read without expanding the allowed-repository list in the session configuration. **Workaround:** run reply detection locally with `gh issue view <num> --repo openai/codex --comments --json comments` (requires `gh` CLI authenticated to GitHub) or re-run this monitor from a session with broader repository access.

Note: this error is moot for today's report because all 3 posted issues fall outside the 7-day window anyway. This error will re-surface as soon as a new comment is posted to an `openai/codex` issue and that row is within the rolling window.

### Step 4 — `gh` CLI unavailable

`gh` is not installed in this container (`command not found`). Step 4 was executed via `mcp__github__search_issues` instead, which accepted the `repo:openai/codex` scope and returned 30 results. Search results are not blocked by the per-session repository restriction — only direct repository reads are restricted.
