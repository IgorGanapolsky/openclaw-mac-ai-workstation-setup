# Draft for openai/codex#24056

- OP: @fylucion
- Title: Codex App Appshots fail: Failed to spawn managed Computer Use service
- Created: 2026-05-22T10:20:40Z
- URL: https://github.com/openai/codex/issues/24056
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.519.31651

### What subscription do you have?

ChatGPT Pro x5

### What platform is your computer?

Darwin 25.5.0 arm64 arm

### What issue are you seeing?

Appshots consistently fail with “Unable to attach appshot”.
The Appshot hotkey is received, Appshots are enabled, and the frontmost app is detected, but the capture worker fails before producing either a screenshot or Accessibility text.
This happens with Finder / Shortcuts / Chrome, so it does not appear to be specific to Chrome, Gmail, or a website.
Relevant logs:
* appshotsEnabled=true
* Appshot hotkey pressed hotkey=DoubleCommand
* Dispatching appshot hotkey target=existing-chat
* Appshot shortcut received
* Appshot shortcut found target bundleIdentifi

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
gh issue comment 24056 --repo openai/codex --body-file outbound/drafts/2026-05-22/openai-codex-24056.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
