# Draft for anthropics/claude-code#36814

- OP: @dhruv-anand-aintech
- Title: [FEATURE] WhatsApp channel support (alongside Telegram/Discord)
- Created: 2026-03-20T20:43:23Z
- URL: https://github.com/anthropics/claude-code/issues/36814
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Feature Request

Add WhatsApp as an officially supported Claude Code channel, alongside the existing Telegram and Discord integrations.

## Motivation

Telegram and Discord channels allow developers to control Claude Code remotely from their phones. WhatsApp is significantly more widely used globally than either platform, making it a natural addition for developers who prefer or exclusively use WhatsApp.

Community workarounds exist (e.g. [claude-code-whatsapp](https://github.com/gokapso/claude-code-whatsapp), [whatsapp-mcp](https://github.com/verygoodplugins/whatsapp-mcp)) but they are third-party and lack the reliability and feature parity of the official channel plugin.

## Expected Behavior

- `plugin:whatsapp@claude-plugins-official` channel available in settings
- Send messages to

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
gh issue comment 36814 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-27/anthropics-claude-code-36814.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
