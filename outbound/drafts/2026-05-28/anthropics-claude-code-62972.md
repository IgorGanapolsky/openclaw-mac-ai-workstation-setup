# Draft for anthropics/claude-code#62972

- OP: @SideQuestTrading
- Title: Discord plugin inbound notifications silently dropped on CC 2.1.153 (Windows)
- Created: 2026-05-28T01:21:30Z
- URL: https://github.com/anthropics/claude-code/issues/62972
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

The official `discord` plugin (v0.0.4) successfully sends `notifications/claude/channel` JSON-RPC notifications to Claude Code, but they are silently dropped — never converted into `<channel source=\"discord\" ...>` tool-result blocks in the session. Outbound tools (`reply`, `fetch_messages`, etc.) work normally. The asymmetry isolates the bug to the client-side notification dispatch / experimental capability handling.

## Environment

- Claude Code: **2.1.153** (Windows)
- Discord plugin: **0.0.4** (`claude-plugins-official/discord/0.0.4`)
- OS: Windows 11 Home 10.0.26200
- MCP server: bun, parented correctly to the active `claude.exe` (verified via wmic)

## Repro

1. Install the official discord plugin, configure access (`~/.claude/channels/discord/access.json`) with `requir

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
gh issue comment 62972 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-28/anthropics-claude-code-62972.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
