# Draft for anthropics/claude-code#55841

- OP: @tjhucka
- Title: [BUG] plugin:telegram@claude-plugins-official reports connected but does not poll Bot API in claude 2.1.126
- Created: 2026-05-03T18:30:08Z
- URL: https://github.com/anthropics/claude-code/issues/55841
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

### Preflight Checklist

- [x] I have searched [existing issues](https://github.com/anthropics/claude-code/issues?q=is%3Aissue%20state%3Aopen%20label%3Abug) and this hasn't been reported yet
- [x] This is a single bug report (please file separate reports for different bugs)
- [x] I am using the latest version of Claude Code

### What's Wrong?

### Summary

When `claude` is started with `--channels plugin:telegram@claude-plugins-official` in version 2.1.126, the Telegram plugin completes its MCP handshake successfully (`/mcp` UI shows `plugin:telegram:telegram · ✔ connected`) and prints the standard "Listening for channel messages from: plugin:telegram@claude-plugins-official" banner, but the plugin does not actually poll the Telegram Bot API for incoming messages. Messages sent to the bot 

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
gh issue comment 55841 --repo anthropics/claude-code --body-file outbound/drafts/2026-06-19/anthropics-claude-code-55841.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
