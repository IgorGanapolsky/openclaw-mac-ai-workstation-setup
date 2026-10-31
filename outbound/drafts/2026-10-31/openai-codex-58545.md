# Draft for openai/codex#58545

- OP: @qbattersby
- Title: macOS Computer Use treats password-free screensaver as locked and refuses input
- Created: 2026-10-31T12:54:51Z
- URL: https://github.com/openai/codex/issues/58545
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Computer Use refuses native input while the macOS screensaver is active, even when “Require password after screen saver begins or display is turned off” is set to **Never** and dismissing the saver manually requires no authentication.

Normal password-free screensaver dismissal and display wake should be supported without requiring Locked Use or disabling the screensaver/display sleep.

## Environment

- ChatGPT desktop / Codex: 26.1027.30824 (build 22943), read from installed app metadata.
- macOS 27.0.1 (26A434).
- Native screensaver: 10 minutes.
- Native display sleep: 20 minutes on AC and battery.
- Require password: Never, independently verified in System Settings and with `sysadminctl -screenLock status` reporting `screenLock is off`.

## Reproduction verified on October 

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
gh issue comment 58545 --repo openai/codex --body-file outbound/drafts/2026-10-31/openai-codex-58545.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
