# Draft for openai/codex#27164

- OP: @jackwjtaylor
- Title: Codex Desktop: runaway memory/swap during Computer Use dev task on macOS (M4/16GB)
- Created: 2026-06-09T10:23:43Z
- URL: https://github.com/openai/codex/issues/27164
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Environment
- MacBook Pro (Apple Silicon M4), 16GB RAM
- macOS (June 2026)
- Codex Desktop (Computer Use enabled)
- ChatGPT Atlas also running

### Summary
Codex Desktop regularly enters a runaway memory state during Computer Use tasks (often involving a Next.js dev server / localhost preview). The system shows “Your system has run out of application memory”, memory pressure goes red, swap grows to tens of GB, and the machine becomes unusable / crashes.

### Symptoms observed
- Codex process memory reported as high as ~71.8 GB
- Swap used grew to ~38.8 GB with red memory pressure
- Activity Monitor became inconsistent (showed impossible values like 0 bytes physical memory while swap remained very large)
- Kernel panic logs referenced `Codex (Service)` during the failure

### Steps to r

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
gh issue comment 27164 --repo openai/codex --body-file outbound/drafts/2026-06-09/openai-codex-27164.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
