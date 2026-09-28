# Draft for openai/codex#48918

- OP: @x-n2o
- Title: macOS Computer Use repeatedly fails to attach a saved screenshot in Feedback Assistant
- Created: 2026-09-28T08:24:25Z
- URL: https://github.com/openai/codex/issues/48918
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?

26.924.22138 (build 11645), installed as ChatGPT.app, using Codex.

### What subscription do you have?

Not provided.

### What platform is your computer?

macOS 27.2 (26B5091g), Apple Silicon.
`Darwin 27.2.0 arm64 arm`

### What issue are you seeing?

I asked Codex during a voice conversation to attach a screenshot of Tips search results to an existing form in Apple's Feedback Assistant. Codex captured and saved a screenshot, but failed to attach it after numerous computer-use attempts.

Repeated Add Attachment clicks and keyboard interactions frequently returned unchanged accessibility state. Codex continued trying element clicks, coordinate clicks, window raising, and keyboard navigation without completing the attachment. A “Take a Scree

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
gh issue comment 48918 --repo openai/codex --body-file outbound/drafts/2026-09-28/openai-codex-48918.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
