# Draft for anthropics/claude-code#44409

- OP: @honicky
- Title: [BUG] Discord plugin: DM channels in access.groups fail allowlist check intermittently
- Created: 2026-04-06T21:43:13Z
- URL: https://github.com/anthropics/claude-code/issues/44409
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

### Preflight Checklist

- [x] I have searched [existing issues](https://github.com/anthropics/claude-code/issues?q=is%3Aissue%20state%3Aopen%20label%3Abug) and this hasn't been reported yet
- [x] This is a single bug report (please file separate reports for different bugs)
- [x] I am using the latest version of Claude Code

### What's Wrong?

Bug: fetchAllowedChannel() in the Discord plugin checks DM channels only against access.allowFrom using ch.recipientId, but DM channels can also be stored in access.groups by channel ID (e.g., after pairing). When Discord.js identifies a channel as ChannelType.DM, the groups check is skipped entirely, causing "not allowlisted" errors even though the channel is configured.



### What Should Happen?

Fix: Check id in access.groups before the DM/non-DM

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
gh issue comment 44409 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-21/anthropics-claude-code-44409.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
