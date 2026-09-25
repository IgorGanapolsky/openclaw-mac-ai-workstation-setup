# Draft for anthropics/claude-code#96937

- OP: @0xNagato
- Title: Plugin submission: message-queue for rate-limit recovery across messaging channels
- Created: 2026-09-25T02:06:08Z
- URL: https://github.com/anthropics/claude-code/issues/96937
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Plugin: message-queue

**Author:** Femi Odunaiya (@0xNagato)
**Repository:** https://github.com/0xNagato/claude-code/tree/feat/message-queue-plugin
**PR in fork:** https://github.com/0xNagato/claude-code/pull/1

## Summary

Adds a new  plugin that provides idempotent message queuing with automatic rate-limit recovery across all messaging channels (iMessage, WhatsApp, Telegram, Signal, Discord, Slack).

## Problem

When messaging APIs return rate-limit errors (429, retry-after headers, quota exceeded), messages are lost or require manual retry. This is especially painful for automated agents that need to respond to incoming messages reliably.

## Solution

This plugin provides:

1. **Idempotent enqueue** - Messages are deduplicated by content hash (SHA-256), so retries never create dupli

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
gh issue comment 96937 --repo anthropics/claude-code --body-file outbound/drafts/2026-09-25/anthropics-claude-code-96937.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
