# Draft for openai/codex#29190

- OP: @GGBondBlueWhale
- Title: Regression: Codex Computer Use helper is damaged after 26.616.41845 auto-update
- Created: 2026-06-20T08:15:39Z
- URL: https://github.com/openai/codex/issues/29190
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

After updating Codex Desktop to version `26.616.41845` and letting it restart automatically, macOS immediately shows the damaged-app warning for the bundled Computer Use helper.

This appears to be a regression: the same `Codex Computer Use` damaged-app problem occurred in previous builds, seemed to be fixed in the last few versions, and has now returned after the latest update.

## Environment

- Codex Desktop version: `26.616.41845`
- About window release date: `Jun 20, 2026`
- macOS: `Tahoe 26.5.1`
- Device: MacBook Pro 16-inch, Apple M5 Max, 128 GB memory
- Plan: ChatGPT Pro

## Steps to reproduce

1. Update Codex Desktop to version `26.616.41845`.
2. Let Codex complete the update and restart automatically.
3. After restart, macOS displays the damaged-app warning for `Codex

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
gh issue comment 29190 --repo openai/codex --body-file outbound/drafts/2026-06-20/openai-codex-29190.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
