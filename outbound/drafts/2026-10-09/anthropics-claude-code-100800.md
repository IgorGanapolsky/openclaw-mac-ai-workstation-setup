# Draft for anthropics/claude-code#100800

- OP: @suzuinstagram-coder
- Title: [BUG] --channels (Discord bridge) silently stops processing inbound messages after background auto-update; persists on latest version
- Created: 2026-10-09T13:01:29Z
- URL: https://github.com/anthropics/claude-code/issues/100800
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

### Preflight Checklist

- [x] I have searched [existing issues](https://github.com/anthropics/claude-code/issues?q=is%3Aissue%20state%3Aopen%20label%3Abug) and this hasn't been reported yet
- [x] This is a single bug report (please file separate reports for different bugs)
- [x] I am using the latest version of Claude Code

### What's Wrong?

The `--channels` background bridge (`claude --channels plugin:discord@claude-plugins-official`, run as a long-lived launchd service wrapping a `screen` session) stops delivering inbound messages to the model. It silently stops auto-replying to new Discord messages — no crash, no error, the process stays alive and healthy indefinitely.

This started partway through 2026-10-07 after working normally for weeks. It has persisted across 3 silent backgroun

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
gh issue comment 100800 --repo anthropics/claude-code --body-file outbound/drafts/2026-10-09/anthropics-claude-code-100800.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
