# Draft for anthropics/claude-code#45852

- OP: @gueysito
- Title: Telegram channel plugin: MCP connection silently drops, zombie processes pile up
- Created: 2026-04-09T17:25:16Z
- URL: https://github.com/anthropics/claude-code/issues/45852
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

The Telegram channel plugin (`plugin:telegram:telegram`) has two critical issues that make it unusable in practice:

1. **Zombie process pile-up:** Every Claude Code session (terminal or VS Code) auto-spawns a Telegram plugin process. When sessions end, these processes are never cleaned up. They accumulate and compete for the same bot token via Telegram's long-polling API, causing message delivery to randomly route to dead sessions.

2. **MCP connection silently drops:** Even after killing all zombie processes and isolating a single instance, the MCP pipe between the plugin and Claude Code disconnects silently. The plugin process stays alive (still polling Telegram), receives messages, sends the "typing" indicator to the user, but the `mcp.notification()` call fails because the

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
gh issue comment 45852 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-24/anthropics-claude-code-45852.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
