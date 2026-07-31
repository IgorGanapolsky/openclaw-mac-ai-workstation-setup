# Draft for anthropics/claude-code#36503

- OP: @RookieX
- Title: --channels plugin shows 'Channels are not currently available' but inbound notifications are ignored
- Created: 2026-03-20T06:32:35Z
- URL: https://github.com/anthropics/claude-code/issues/36503
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Description

When running `claude --channels plugin:telegram@claude-plugins-official`, Claude Code displays **"Channels are not currently available"** at startup. Despite this message, the plugin runs correctly and polls Telegram successfully. However, inbound messages never trigger a Claude response.

## Environment

- Claude Code version: 2.1.80
- OS: macOS 23.6.0 (Darwin)
- Plugin: `telegram@claude-plugins-official` v0.0.1

## Steps to Reproduce

1. Configure Telegram plugin: `~/.claude/channels/telegram/.env` with `TELEGRAM_BOT_TOKEN=...`
2. Run: `claude --channels plugin:telegram@claude-plugins-official --debug`
3. Claude Code shows: **"Channels are not currently available"**
4. DM the Telegram bot — Claude never replies

## Evidence

The plugin IS polling and IS sending correct `n

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
gh issue comment 36503 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-28/anthropics-claude-code-36503.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
