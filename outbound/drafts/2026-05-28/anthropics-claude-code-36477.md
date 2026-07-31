# Draft for anthropics/claude-code#36477

- OP: @mohfoda1982-create
- Title: [BUG] --channels mode stops processing incoming messages after first response
- Created: 2026-03-20T04:41:07Z
- URL: https://github.com/anthropics/claude-code/issues/36477
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

# [BUG] --channels mode stops processing incoming messages after first response

## Environment
- **Claude Code version:** 2.1.80
- **OS:** Ubuntu 24.04 (also affects other platforms)
- **Plugin:** telegram@claude-plugins-official v0.0.1

## Description

When running Claude Code with `--channels plugin:telegram@claude-plugins-official`, the session correctly receives and responds to the first incoming Telegram message. However, after responding, Claude Code returns to the interactive prompt and stops processing subsequent incoming MCP channel notifications.

## Steps to Reproduce

1. Install the Telegram plugin:
   ```
   /plugin install telegram@claude-plugins-official
   ```

2. Configure the bot token:
   ```
   /telegram:configure <BOT_TOKEN>
   ```

3. Set up access.json with allowlis

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
gh issue comment 36477 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-28/anthropics-claude-code-36477.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
