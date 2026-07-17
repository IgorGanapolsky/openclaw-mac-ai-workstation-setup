# Draft for openai/codex#33674

- OP: @PradeepVelugu
- Title: Computer Use runtime is unavailable (Feedback ID: 019f6c4d-4115-77b2-9aa8-c56c29eb7326)
- Created: 2026-07-16T19:14:53Z
- URL: https://github.com/openai/codex/issues/33674
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.707.91948

### What subscription do you have?

ChatGPT Plus

### What platform is your computer?

Darwin 25.3.0 arm64 arm

### What issue are you seeing?

Feedback ID:
019f6c4d-4115-77b2-9aa8-c56c29eb7326

## Environment

- ChatGPT Desktop for macOS
- Version: 26.707.91948
- macOS Tahoe 26.3.1
- Computer Use plugin version: 1.0.1000387

## Issue

Computer Use cannot start in any task.

The Computer Use plugin is installed correctly.

- MCP server is ON
- Computer Use skill is ON
- Launching through the official "Try now" button creates a task that immediately reports:

> "Computer Use interaction runtime isn't available in this task's toolset."

Other messages observed:

- "UI-control tool wasn't exposed."
- "

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
gh issue comment 33674 --repo openai/codex --body-file outbound/drafts/2026-07-17/openai-codex-33674.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
