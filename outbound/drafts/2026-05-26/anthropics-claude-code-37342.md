# Draft for anthropics/claude-code#37342

- OP: @simonbucher
- Title: [FEATURE] Support slash commands (/clear, /compact) from Channels (Telegram/Discord)
- Created: 2026-03-22T07:17:22Z
- URL: https://github.com/anthropics/claude-code/issues/37342
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Problem

When using Claude Code via Channels (Telegram or Discord), users cannot trigger built-in CLI slash commands like `/clear`, `/compact`, or `/cost`. These commands are only processed when typed directly in the terminal session.

This means channel users have no way to reset conversation context, compress the context window, or check usage without asking the terminal operator to intervene — which defeats the purpose of async remote access.

## Proposed Solution

Allow a configurable subset of built-in slash commands to be forwarded from channel messages to the Claude Code session. For example:

- `/clear` — reset conversation context
- `/compact` — compress context window
- `/cost` — show token usage

These could be whitelisted in the channel plugin config (e.g., `access.json`) so

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
gh issue comment 37342 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-26/anthropics-claude-code-37342.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
