# Draft for openai/codex#29584

- OP: @GGBondBlueWhale
- Title: [macOS] Codex Computer Use helper is damaged after 26.616.71553 update
- Created: 2026-06-23T07:46:22Z
- URL: https://github.com/openai/codex/issues/29584
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Version `26.616.71553` • Released Jun 23, 2026

### What subscription do you have?

ChatGPT Pro

### What platform is your computer?

- macOS Tahoe `26.5.1`
- MacBook Pro 16-inch
- Apple M5 Max
- 128 GB memory
- Apple Silicon / ARM64

### What issue are you seeing?

After updating to the latest Codex Desktop build, `Codex Computer Use` can no longer be opened. macOS immediately shows this warning:

> “Codex Computer Use” is damaged and can’t be opened. You should move it to the Trash.
>
> This file was downloaded on an unknown date.

This blocks Computer Use completely after the update.

### What steps can reproduce the bug?

1. Update Codex Desktop to version `26.616.71553`.
2. Open Codex Desktop after the updat

---

## Draft comment

<!--
HUMAN REVIEW REQUIRED. Write a personalized diagnostic below.

Rules:
- DO NOT fabricate diagnostic commands, log labels, or internal behaviors
  you cannot verify in the actual source repo or the OP's bug report.
- Lead with one specific detail from the OP's report (proves you read it).
- Name one verified check or workaround.
- Link to https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html
  with UTM tag ?utm_source=codex-issue&utm_medium=funnel&utm_campaign=qr-2026.
- End with the $19 quick-read CTA: https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u?utm_source=codex-issue&utm_medium=funnel&utm_campaign=qr-2026
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 29584 --repo openai/codex --body-file outbound/drafts/2026-06-23/openai-codex-29584.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
