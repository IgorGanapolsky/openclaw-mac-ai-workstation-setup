# Draft for anthropics/claude-code#36837

- OP: @keezppc
- Title: [BUG] Discord plugin shows connected under --channels but does not receive gateway messages on Linux
- Created: 2026-03-20T22:05:16Z
- URL: https://github.com/anthropics/claude-code/issues/36837
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

### Preflight Checklist

- [x] I have searched [existing issues](https://github.com/anthropics/claude-code/issues?q=is%3Aissue%20state%3Aopen%20label%3Abug) and this hasn't been reported yet
- [x] This is a single bug report (please file separate reports for different bugs)
- [x] I am using the latest version of Claude Code

### What's Wrong?

When running `claude --channels plugin:discord@claude-plugins-official` on Linux, the Discord plugin reports `✔ connected` in `/mcp`, but the bot never receives Discord DMs. No pairing codes are issued, and no messages are delivered to the Claude session.

The same bot token works immediately on macOS. Running the plugin's bun server standalone on the same Linux machine also works correctly — DMs are received and MCP notifications are generated.

**E

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
gh issue comment 36837 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-27/anthropics-claude-code-36837.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
