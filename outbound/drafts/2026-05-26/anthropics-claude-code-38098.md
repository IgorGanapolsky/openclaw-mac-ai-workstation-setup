# Draft for anthropics/claude-code#38098

- OP: @neuralneeraj
- Title: [BUG] Telegram plugin auto-loads in all Claude Code sessions, not just --channels sessions
- Created: 2026-03-24T05:58:31Z
- URL: https://github.com/anthropics/claude-code/issues/38098
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

### Preflight Checklist

- [x] I have searched [existing issues](https://github.com/anthropics/claude-code/issues?q=is%3Aissue%20state%3Aopen%20label%3Abug) and this hasn't been reported yet
- [x] This is a single bug report (please file separate reports for different bugs)
- [x] I am using the latest version of Claude Code

### What's Wrong?

When the Telegram plugin is installed, every `claude -c` session (without --channels flag) automatically spawns a Telegram bun process that polls for messages. This causes multiple consumers competing for the same Telegram bot token, resulting in dropped/lost messages.

Steps to reproduce:
1. Install Telegram plugin: `claude plugin add telegram@claude-plugins-official`
2. Start session A: `claude --channels plugin:telegram@claude-plugins-official`
3.

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
gh issue comment 38098 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-26/anthropics-claude-code-38098.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
