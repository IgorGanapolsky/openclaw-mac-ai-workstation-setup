# Draft for openai/codex#29276

- OP: @orangejustin
- Title: Computer Use screen-recording permission picker loops and never registers helper on macOS 15.7.3
- Created: 2026-06-21T00:55:16Z
- URL: https://github.com/openai/codex/issues/29276
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Version 26.616.51431 (build 4212), Computer Use helper 1.0.829

### What subscription do you have?

Unknown / not relevant to the local permission flow

### What platform is your computer?

macOS 15.7.3 (24G419), Apple Silicon arm64

### What issue are you seeing?

Computer Use cannot complete its Screen & System Audio Recording onboarding.

The onboarding overlay says:

> Drag Codex Computer Use to the list above to allow Screenshots

System Settings is open at Privacy & Security > Screen & System Audio Recording. The main `Codex` app is already enabled, but `Codex Computer Use` is absent. Selecting or dragging the offered helper causes the picker/onboarding surface to disappear as if it crashed. Retrying return

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
gh issue comment 29276 --repo openai/codex --body-file outbound/drafts/2026-06-21/openai-codex-29276.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
