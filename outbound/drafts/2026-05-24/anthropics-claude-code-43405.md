# Draft for anthropics/claude-code#43405

- OP: @newyewong
- Title: Bug: Discord plugin permission requests cannot be approved from Discord
- Created: 2026-04-04T05:21:33Z
- URL: https://github.com/anthropics/claude-code/issues/43405
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

**Plugin:** `discord@claude-plugins-official` v0.0.4

## Summary

When Claude triggers a permission request (e.g. for the `reply` tool), the server sends a Discord DM with Allow/Deny buttons. However, approving from Discord has no effect — only the CLI prompt works.

## Root Cause (two issues)

**1. No `interactionCreate` handler**

`server.ts` sends Discord messages with button components:
```ts
new ButtonBuilder().setCustomId(`perm:allow:${request_id}`) ...
new ButtonBuilder().setCustomId(`perm:deny:${request_id}`) ...
```
But there is no `client.on('interactionCreate', ...)` handler anywhere in the file. Button clicks are silently ignored.

**2. `request_id` is never shown to the user**

The message content is just `🔐 Permission: <tool_name>`. The `request_id` is only embedded in the b

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
gh issue comment 43405 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-24/anthropics-claude-code-43405.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
