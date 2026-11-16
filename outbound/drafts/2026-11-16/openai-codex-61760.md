# Draft for openai/codex#61760

- OP: @kerryzl77
- Title: macOS: Computer Use retains physical-input pause while desktop is unlocked; helper restart restores access
- Created: 2026-11-16T06:47:48Z
- URL: https://github.com/openai/codex/issues/61760
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Native Computer Use repeatedly returned “The Mac is locked and automatic unlock is paused because physical input was detected” while I was actively using the unlocked desktop. Independent macOS session reads agreed that my current console session was unlocked. Restarting the Computer Use helper restored native access immediately.

The error led the agent to repeatedly ask me to unlock an already-unlocked Mac.

## Environment

- Codex desktop (ChatGPT.app bundle): 26.1111.21308, build 27194.
- Computer Use helper: 26.1111.1001923, build 1001923.
- macOS 27.0.1, build 26A434; Apple silicon Mac mini.
- Any App and Locked use enabled.
- Observed November 15, 2026, America/Los_Angeles.
- Subscription omitted.

## Observed sequence

1. With the desktop visibly unlocked and in active 

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
gh issue comment 61760 --repo openai/codex --body-file outbound/drafts/2026-11-16/openai-codex-61760.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
