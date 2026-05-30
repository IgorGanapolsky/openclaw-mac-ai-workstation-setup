# Draft for anthropics/claude-code#61010

- OP: @sunnysunthar
- Title: Channels: notifications/claude/channel delivered after a tool-only turn lands in the prompt buffer instead of starting a new turn
- Created: 2026-05-21T00:15:15Z
- URL: https://github.com/anthropics/claude-code/issues/61010
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)


### What happened

When using a custom Claude Channel (via `--dangerously-load-development-channels server:<name>`), a `notifications/claude/channel` MCP notification delivered to Claude *after a turn whose only output was a single tool call* is rendered into the TUI's prompt buffer (`❯ <inbound text>` with the post-task `new task? /clear to save Nk tokens` hint underneath) instead of being processed as a synthetic user turn.

The user has to manually press Enter to submit, or the message sits in the buffer indefinitely. From Claude's perspective the turn never starts. From the user's perspective the bot has gone silent.

### What I expected

`notifications/claude/channel` should always start a new turn for Claude to process, regardless of the shape of the previous turn. This is the Chann

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
gh issue comment 61010 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-30/anthropics-claude-code-61010.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
