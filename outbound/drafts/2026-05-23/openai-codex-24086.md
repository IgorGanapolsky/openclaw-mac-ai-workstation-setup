# Draft for openai/codex#24086

- OP: @yoonpooh
- Title: Locked Computer Use fails with cgWindowNotFound on Mac mini M4 + Studio Display
- Created: 2026-05-22T14:47:56Z
- URL: https://github.com/openai/codex/issues/24086
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

# Locked Computer Use fails with `cgWindowNotFound` on Mac mini M4 + Studio Display

## Summary

Locked Computer Use fails only while the Mac is locked.

Normal Computer Use works correctly when the Mac is unlocked. The issue persists after reinstalling Codex, rebooting, re-enabling Locked Computer Use, testing in a new thread, and preventing display/system sleep with `caffeinate`.

## Environment

- Mac: Mac mini M4
- Display: Apple Studio Display
- macOS: 26.5, build `25F71`
- Codex: `26.519.31651`, build `3017`
- Computer Use helper: `1.0.799`
- Region: South Korea

## Error

When trying to use Computer Use while the Mac is locked:

```text
Computer Use server error -10005: cgWindowNotFound
```

## What works

Computer Use works normally when the Mac is unlocked.

For example, Codex can

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
gh issue comment 24086 --repo openai/codex --body-file outbound/drafts/2026-05-23/openai-codex-24086.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
