# Draft for openai/codex#24394

- OP: @jzthree
- Title: Codex Computer Use auth plugin breaks macOS lock-screen unlock
- Created: 2026-05-25T01:59:15Z
- URL: https://github.com/openai/codex/issues/24394
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

After enabling Codex Computer Use / mobile remote control, local macOS lock-screen unlock fails. The failure is isolated to the `system.login.screensaver` authorization path. Disabling Codex mobile access did not remove the Codex authorization mechanism, but manually restoring the screensaver auth rule fixed local unlock immediately.

## Environment

- Codex desktop: 26.519.41501
- Codex Computer Use plugin: 1.0.799
- macOS: observed before upgrading, and still reproduced after upgrading to macOS 26.5 (25F71)
- Architecture: arm64

## Symptoms

- `Control-Command-Q`, wait, enter password: unlock fails
- Log out and log back in: works
- Cold boot / hard reboot login: works
- Different cold-boot/preboot login screen still accepts the same credentials

This points to the lock-scre

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
gh issue comment 24394 --repo openai/codex --body-file outbound/drafts/2026-05-25/openai-codex-24394.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
