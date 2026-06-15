# Draft for openai/codex#28274

- OP: @GGBondBlueWhale
- Title: Codex 26.609.41114 crashes and triggers “Codex Computer Use is damaged and can’t be opened” on macOS 26.5.1
- Created: 2026-06-15T08:32:55Z
- URL: https://github.com/openai/codex/issues/28274
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Version 26.609.41114  
Build 3888  
Released Jun 12, 2026

### What subscription do you have?

ChatGPT Pro

### What platform is your computer?

macOS Tahoe 26.5.1 (25F80)  
Apple Silicon / ARM64  
MacBook Pro 16-inch, Apple M5 Max, 128 GB memory  
Hardware Model: Mac17,6

### What issue are you seeing?

Codex quit unexpectedly while I was using the Codex desktop app. Around the same time, macOS also displayed a Gatekeeper-style warning for the Computer Use helper:

> “Codex Computer Use” is damaged and can’t be opened.  
> You should move it to the Trash.  
> This file was downloaded on an unknown date.

This appears to be related to the Codex desktop app’s Computer Use / browser automation helper. The crash rep

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
gh issue comment 28274 --repo openai/codex --body-file outbound/drafts/2026-06-15/openai-codex-28274.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
