# Draft for anthropics/claude-code#80543

- OP: @gtapps
- Title: Channels: no way to remotely stop/interrupt an in-progress turn
- Created: 2026-07-23T12:45:49Z
- URL: https://github.com/anthropics/claude-code/issues/80543
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

### Summary

Claude Code Channels let a remote user message an agent and get replies, and there is a permission-relay bridge for approving tool calls mid-turn. But there is no way for a channel user to **stop or interrupt an in-progress turn**, and no hook fires on inbound channel messages, so this cannot be built in a plugin either. For an unattended or remotely-operated agent, "stop" is a baseline safety control, and today it cannot be made binding while the agent is mid-action.

### Current behavior

- Inbound channel messages arrive as `notifications/claude/channel` and are injected as `<channel>` context. Delivered to a busy session, a message is treated as steering text at the next tool-call boundary and does not interrupt the running turn; the binding effect only lands on the next t

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
gh issue comment 80543 --repo anthropics/claude-code --body-file outbound/drafts/2026-07-23/anthropics-claude-code-80543.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
