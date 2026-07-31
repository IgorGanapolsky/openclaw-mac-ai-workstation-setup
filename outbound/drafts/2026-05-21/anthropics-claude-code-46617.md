# Draft for anthropics/claude-code#46617

- OP: @snadboy
- Title: Telegram channel plugin MCP server not spawned with --channels in v2.1.101
- Created: 2026-04-11T11:00:34Z
- URL: https://github.com/anthropics/claude-code/issues/46617
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Description

When using `--channels plugin:telegram@claude-plugins-official`, Claude Code v2.1.101 loads the plugin metadata and shows "Listening for channel messages" but **never spawns the plugin's bun MCP server process**. Messages sent to the Telegram bot queue in the Telegram API but are never consumed.

## Environment

- Claude Code v2.1.101
- Ubuntu Linux (x86_64)
- Bun v1.3.11
- Plugin: telegram@claude-plugins-official v0.0.5

## Steps to Reproduce

1. Install telegram plugin: `claude plugin install telegram@claude-plugins-official`
2. Configure bot token in `~/.claude/channels/telegram/.env`
3. Start Claude Code with channels:
   ```bash
   claude --channels plugin:telegram@claude-plugins-official --permission-mode bypassPermissions
   ```
4. Send a message to the Telegram bot


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
gh issue comment 46617 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-21/anthropics-claude-code-46617.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
