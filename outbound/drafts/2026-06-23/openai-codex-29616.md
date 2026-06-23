# Draft for openai/codex#29616

- OP: @willren5
- Title: Codex Computer Use auth plugin caused a 17-minute macOS lock-screen unlock stall
- Created: 2026-06-23T11:43:18Z
- URL: https://github.com/openai/codex/issues/29616
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?

Codex Desktop `26.616.71553` / `CFBundleVersion` `4265`

### What subscription do you have?

Not specified.

### What platform is your computer?

- macOS `26.5.1` build `25F80`
- `Darwin 25.5.0 arm64 arm`
- Apple Silicon Mac

### Component

Codex Desktop / Computer Use / Locked Computer Use authorization plugin on macOS.

### Summary

After Codex Computer Use installed its macOS lock-screen authorization plugin, local macOS lock-screen unlock could stall for a very long time after entering the correct password.

In the observed incident, the lock screen showed the spinner for about 17.5 minutes after password entry. The password was eventually accepted and the desktop unlocked. Local unified logs show the delay in the `system.login.screensa

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
gh issue comment 29616 --repo openai/codex --body-file outbound/drafts/2026-06-23/openai-codex-29616.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
