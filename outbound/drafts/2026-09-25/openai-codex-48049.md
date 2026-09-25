# Draft for openai/codex#48049

- OP: @lucasamyers-cmd
- Title: Bug Report: Computer Use runtime crash on macOS Sonoma (TIOCSTI sandbox-exec error)
- Created: 2026-09-25T10:01:47Z
- URL: https://github.com/openai/codex/issues/48049
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Version 26.917.71314  Released Sep 23, 2026

### What subscription do you have?

ChatGPT+

### What platform is your computer?

macOS Sonoma 14.1 (Intel/Apple Silicon)

### What issue are you seeing?

Feedback ID 01a0d7a4-ebdb-7ea3-82c4-746f0e73315c

App Version: 26.917.71314OS 

Version: macOS Sonoma 14.1 (Intel/Apple Silicon)

Problem: The local browser-control runtime process (node_repl) crashes immediately upon startup before any browser state can initialize.

Error Log / Blocker:Browser-control runtime crashes at initialization (TIOCSTI sandbox error).

Technical Details: The issue is caused by a hardcoded (deny file-ioctl (ioctl-command TIOCSTI)) rule within the compiled sandbox initialization profile. Beca

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
gh issue comment 48049 --repo openai/codex --body-file outbound/drafts/2026-09-25/openai-codex-48049.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
