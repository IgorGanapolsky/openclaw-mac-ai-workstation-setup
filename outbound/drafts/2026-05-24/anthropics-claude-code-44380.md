# Draft for anthropics/claude-code#44380

- OP: @adamfarag
- Title: Channel messages don't wake idle sessions (--channels plugin)
- Created: 2026-04-06T20:06:19Z
- URL: https://github.com/anthropics/claude-code/issues/44380
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Description

When using `--channels plugin:telegram@claude-plugins-official`, incoming messages display in the terminal (as `← telegram · user: message`) but do not trigger Claude to process them when the session is idle at the prompt. The REPL waits for keyboard input instead of interrupting to handle the MCP channel notification.

## Steps to Reproduce

1. Start Claude Code with `--channels plugin:telegram@claude-plugins-official`
2. Let the session complete a task and return to the idle prompt (`❯`)
3. Send a message to the bot via Telegram
4. The message appears in the terminal as `← telegram · user: ...`
5. Claude does NOT automatically process it — just sits at the prompt

## Expected Behavior

Incoming channel messages should interrupt the idle prompt and trigger Claude to proces

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
gh issue comment 44380 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-24/anthropics-claude-code-44380.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
