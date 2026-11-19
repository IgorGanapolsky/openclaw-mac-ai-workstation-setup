# Draft for openai/codex#62497

- OP: @jcaprado
- Title: [macOS][Computer Use] Agent leaves auxiliary Force Quit window open after task completion
- Created: 2026-11-19T12:10:36Z
- URL: https://github.com/openai/codex/issues/62497
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?

26.1111.71025

### What subscription do you have?

Not included in this public report.

### What platform is your computer?

`Darwin 27.2.0 arm64 arm` (macOS 27.2.1)

### What issue are you seeing?

During a Codex Computer Use intervention on November 19, 2026, the agent opened the macOS “Force Quit Applications” window while troubleshooting a stalled desktop application. It then switched to Activity Monitor and successfully completed the main repair, but declared the task finished while the “Force Quit Applications” window remained open on the desktop.

The agent later confirmed that this window was residue from its own intervention rather than a window that had already been open.

Impact is low, but the leftover UI causes confusion and re

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
gh issue comment 62497 --repo openai/codex --body-file outbound/drafts/2026-11-19/openai-codex-62497.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
