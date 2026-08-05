# Draft for openai/codex#36958

- OP: @sickdude-inc
- Title: [macOS] Computer Use and BUZZ ACP continue after Codex is closed
- Created: 2026-08-04T19:44:08Z
- URL: https://github.com/openai/codex/issues/36958
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

On macOS, after the user closed/stopped the Codex UI/task, Computer Use did not fully stop. The Computer Use cursor remained visible and the external BUZZ desktop app continued to receive or attempt input, including an attempt to change BUZZ settings without an active Codex task.

This is a user-control and safety issue: closing or stopping Codex must guarantee that no agent or Computer Use process can continue acting in another app.

## Environment

- Codex desktop: 26.727.51351 (build 6119)
- macOS: 26.5.2 (25F84)
- BUZZ: 0.5.4
- Observed: 2026-08-05, JST

## What we observed

1. The user closed/stopped Codex after a Computer Use/BUZZ interaction.
2. The Computer Use cursor remained visible.
3. A detached `cua_node ... kernel.js` process remained with PPID 1 and a BUZZ workin

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
gh issue comment 36958 --repo openai/codex --body-file outbound/drafts/2026-08-05/openai-codex-36958.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
