# Draft for openai/codex#46679

- OP: @trenchlordb
- Title: [macOS][Computer Use] Inconsistent review of an explicitly approved recoverable grocery-cart edit
- Created: 2026-09-19T17:43:03Z
- URL: https://github.com/openai/codex/issues/46679
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

# Inconsistent approval review for an explicitly approved recoverable grocery-cart edit

## Environment
- Codex desktop / ChatGPT app for macOS, version 26.911.61220, build 9647 (verified from the installed app bundle).
- macOS 27.0, build 26A428.
- Computer-use browser control with automatic approval review.
- Observed September 19, 2026.

## Observed sequence
1. The assistant identified the exact existing cart lines to clear and presented that action as option A.
2. The user explicitly selected that option; the approved scope remained unchanged.
3. The first quantity-decrement click was denied by automatic review despite its own high authorization assessment.
4. After a read-only check of the approval context and public review decision, one retry through the same tool and browser succeed

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
gh issue comment 46679 --repo openai/codex --body-file outbound/drafts/2026-09-20/openai-codex-46679.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
