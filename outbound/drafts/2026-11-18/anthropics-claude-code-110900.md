# Draft for anthropics/claude-code#110900

- OP: @andreachiari-it
- Title: [BUG]  Telegram channel plugin stuck on "failed to connect", messages never consumed (Linux/ChromeOS)
- Created: 2026-11-18T09:22:12Z
- URL: https://github.com/anthropics/claude-code/issues/110900
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

### Preflight Checklist

- [x] I have searched [existing issues](https://github.com/anthropics/claude-code/issues?q=is%3Aissue%20state%3Aopen%20label%3Abug) and this hasn't been reported yet
- [x] This is a single bug report (please file separate reports for different bugs)
- [x] I am using the latest version of Claude Code

### What's Wrong?

After configuring the Telegram channel plugin (plugin:telegram@claude-plugins-official) with a valid bot token via /telegram:configure, the connection stays stuck in a "failed to connect" state and the bot never receives/processes any messages.

Tool-search/MCP status repeatedly shows:
"plugin:telegram:telegram: Skipping connection (recent failure cached retries automatically in 15 min, or edit the plugin config to retry now)"

I independently verifi

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
gh issue comment 110900 --repo anthropics/claude-code --body-file outbound/drafts/2026-11-18/anthropics-claude-code-110900.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
