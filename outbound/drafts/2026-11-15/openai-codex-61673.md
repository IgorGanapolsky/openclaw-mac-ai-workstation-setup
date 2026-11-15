# Draft for openai/codex#61673

- OP: @LemonTreee
- Title: [macOS Work] Recurring Computer Use approval prompts and failure to release after task completion
- Created: 2026-11-15T17:24:16Z
- URL: https://github.com/openai/codex/issues/61673
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Problem

Reporting with the affected user's explicit request to submit this issue to the OpenAI Codex issue tracker.

In the macOS desktop Work experience, the user repeatedly encounters two problems:

1. Computer Use asks for application access again even though the user reports having authorized it previously. This behavior used to work automatically for the user.
2. After a Computer Use task finishes and the assistant acknowledges completion, the user still sees Computer Use as active instead of an automatic return to the normal state.

The user requests a reliable automatic release and retained app approvals, rather than repeated manual approvals, forced termination, or reinstallation.

The second symptom has recurred after the assistant used the documented completion-summary operat

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
gh issue comment 61673 --repo openai/codex --body-file outbound/drafts/2026-11-15/openai-codex-61673.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
