# Draft for openai/codex#62950

- OP: @DH-REALESTATE
- Title: macOS Computer Use URL stop prevents owner-authorized publishing; no actionable recovery
- Created: 2026-11-21T10:57:33Z
- URL: https://github.com/openai/codex/issues/62950
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Problem
Owner-authorized publishing on the user's own NAVER blog stopped with a Computer Use URL restriction. Normal login and owner administration had previously succeeded. This requests supported diagnosis and recovery, not a bypass.

## Environment
Codex desktop 26.1117.41037, build 29803, production channel, macOS, Safari Computer Use. Official update checker reports up_to_date. Incident date: November 21, 2026 (Asia/Seoul).

## Observations
The earlier operation record reports successful owner login and publishing, then a session stop stating that Computer Use is not allowed on the current browser URL, including if the user navigates there themselves. Subsequent Safari control was rejected by automatic review because the prior URL-based termination had not been resolved. User autho

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
gh issue comment 62950 --repo openai/codex --body-file outbound/drafts/2026-11-21/openai-codex-62950.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
