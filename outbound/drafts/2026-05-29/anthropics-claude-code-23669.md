# Draft for anthropics/claude-code#23669

- OP: @hugobarauna
- Title: Agent Teams: support per-teammate working directory, CLAUDE.md, and MCP configs
- Created: 2026-02-06T12:39:43Z
- URL: https://github.com/anthropics/claude-code/issues/23669
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Feature Request

### Problem

When working on features that span multiple related repositories (e.g., a main app and its companion server), agent teams would be a natural fit — one teammate per repo, working in parallel.

However, **teammates currently inherit the team lead's working directory, CLAUDE.md, and MCP server configurations**. There's no way to spawn a teammate rooted in a different project directory.

This means a teammate assigned to work in a second repo won't pick up that repo's:
- `CLAUDE.md` (project-specific instructions, guidelines, conventions)
- `.mcp.json` (project-specific MCP server configurations)
- Project context in general

### Use Case

I maintain two related repos:
- **Repo A** — an open-source Phoenix web app
- **Repo B** — a companion server for premium f

---

## Draft comment

<!--
HUMAN REVIEW REQUIRED. Write a personalized diagnostic below.

Rules:
- DO NOT fabricate diagnostic commands, log labels, or internal behaviors
  you cannot verify in the actual source repo or the OP's bug report.
- Lead with one specific detail from the OP's report (proves you read it).
- Name one verified check or workaround.
- Link to https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/claude-code-channels-not-working.html
  with UTM tag ?utm_source=channels-issue&utm_medium=funnel&utm_campaign=qr-2026.
- End with the $19 quick-read CTA: https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u?utm_source=channels-issue&utm_medium=funnel&utm_campaign=qr-2026
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 23669 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-29/anthropics-claude-code-23669.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
