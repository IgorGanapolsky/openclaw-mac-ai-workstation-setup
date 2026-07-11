# Draft for openai/codex#32340

- OP: @cloverclover-web
- Title: Computer Use crashes on macOS 15.3 after ChatGPT update: missing _swift_task_addPriorityEscalationHandler
- Created: 2026-07-11T05:38:21Z
- URL: https://github.com/openai/codex/issues/32340
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

ChatGPT：26.707.41301，build 5103

### What subscription do you have?

Pro

### What platform is your computer?

Darwin 24.3.0 arm64 arm

### What issue are you seeing?

After updating to the unified ChatGPT desktop app, the bundled Computer Use
plugin can no longer start on macOS 15.3.

Environment:
- ChatGPT desktop app: 26.707.41301, build 5103
- Computer Use helper: 26.708.1000366, build 1000366
- macOS: 15.3 (24D60)
- Architecture: Apple Silicon arm64
- uname -mprs: Darwin 24.3.0 arm64 arm

Error returned by Computer Use:

Sky Computer Use native pipe startup failed

Both SkyComputerUseClient and SkyComputerUseService terminate immediately.
The macOS crash report contains:

Termination Reason: Namespace DYLD, 

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
gh issue comment 32340 --repo openai/codex --body-file outbound/drafts/2026-07-11/openai-codex-32340.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
