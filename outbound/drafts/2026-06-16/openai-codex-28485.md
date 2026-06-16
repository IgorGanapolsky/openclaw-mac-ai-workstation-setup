# Draft for openai/codex#28485

- OP: @GGBondBlueWhale
- Title: Codex Computer Use helper reported damaged after latest desktop app update
- Created: 2026-06-16T08:01:12Z
- URL: https://github.com/openai/codex/issues/28485
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

After updating Codex Desktop to the latest version and letting the app auto-restart, macOS reports that the `Codex Computer Use` helper is damaged and cannot be opened.

The dialog says:

> “Codex Computer Use” is damaged and can’t be opened. You should move it to the Trash.

This still occurs on the latest build I just updated to, so the issue does not appear to be fixed yet.

## Environment

- Codex Desktop version: `26.609.71450`
- About window release date: `Jun 15, 2026`
- macOS: `Tahoe 26.5.1`
- Device: MacBook Pro 16-inch, Apple M5 Max, 128 GB memory

## Steps to reproduce

1. Update Codex Desktop to version `26.609.71450`.
2. Let Codex complete the update and restart automatically.
3. Observe the macOS warning for `Codex Computer Use`.

## Expected behavior

The Codex a

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
gh issue comment 28485 --repo openai/codex --body-file outbound/drafts/2026-06-16/openai-codex-28485.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
