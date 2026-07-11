# Draft for openai/codex#32175

- OP: @JofArnold
- Title: Computer Use helper 26.708.1000366 crashes on macOS 15.7.4 due to missing Swift runtime symbol
- Created: 2026-07-10T14:23:54Z
- URL: https://github.com/openai/codex/issues/32175
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of Codex CLI is running?

0.144.1

### What subscription do you have?

Pro

### Which model were you using?

gpt-5.6-sol

### What platform is your computer?

darwin 24.6.0 arm64 arm

### What terminal emulator and version are you using (if applicable)?

iTerm2

### Codex doctor report

Redacted

### What issue are you seeing?

Codex's Computer Use helper crashes immediately on macOS 15.7.4, and the in-app Browser does not expose a controllable backend.

Prompt used:
"Use Browser to open http://127.0.0.1:5173"

Browser errors:
Browser is not available: iab

Browser backend discovery result:
[]

Computer Use service error, with PII redacted:

dyld[<pid>]: Symbol not found: _swift_task_addPriorityEscalationHandler
  Referenced from:
  /Users/<redacted>/.codex/computer-use/Co

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
gh issue comment 32175 --repo openai/codex --body-file outbound/drafts/2026-07-11/openai-codex-32175.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
