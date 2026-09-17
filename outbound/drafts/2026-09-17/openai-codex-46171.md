# Draft for openai/codex#46171

- OP: @meng543267
- Title: Chrome extension and Computer Use fail on macOS 27 with SCStreamErrorDomain -3811
- Created: 2026-09-17T09:25:51Z
- URL: https://github.com/openai/codex/issues/46171
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

ChatGPT desktop: 26.911.61220, build 9647  Codex Computer Use: 26.913.1001068

### What subscription do you have?

ChatGPT plus

### What platform is your computer?

_No response_

### What issue are you seeing?

## Summary

The ChatGPT desktop app cannot connect to the installed Chrome extension, and Computer Use cannot capture application windows on macOS 27.

## Environment

- macOS: 27.0, build 26A428
- Hardware: Apple Silicon
- ChatGPT desktop: 26.911.61220, build 9647
- Codex Computer Use: 26.913.1001068
- Google Chrome: 152.0.7977.84
- Chrome extension ID: `hehggadaopoacecdllhhajmbjkdcmajg`

## Steps to reproduce

1. Install the ChatGPT desktop app and Computer Use plugin.
2. Install and enable the ChatGPT

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
gh issue comment 46171 --repo openai/codex --body-file outbound/drafts/2026-09-17/openai-codex-46171.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
