# Draft for openai/codex#28600

- OP: @GGBondBlueWhale
- Title: Codex Computer Use still reported damaged after 26.611.61049 update and auto-restart
- Created: 2026-06-16T22:20:10Z
- URL: https://github.com/openai/codex/issues/28600
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)


## Summary

After updating Codex Desktop to the newest build and letting the app restart automatically, macOS still reports that the `Codex Computer Use` helper is damaged and cannot be opened.

This means the issue is still not fixed in the latest version I just installed.

## Environment

- Codex Desktop version: `26.611.61049`
- About window release date: `Jun 16, 2026`
- macOS: `Tahoe 26.5.1`
- Device: MacBook Pro 16-inch, Apple M5 Max, 128 GB memory

## Steps to reproduce

1. Update Codex Desktop to version `26.611.61049`.
2. Let Codex complete the update and restart automatically.
3. After restart, macOS shows a warning for `Codex Computer Use`.

## Expected behavior

After the update and automatic restart, Codex Desktop and its helper components should open normally.

## Actual beh

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
gh issue comment 28600 --repo openai/codex --body-file outbound/drafts/2026-06-17/openai-codex-28600.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
