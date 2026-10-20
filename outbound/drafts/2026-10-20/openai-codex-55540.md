# Draft for openai/codex#55540

- OP: @amodig
- Title: [macOS][Computer Use] Chrome tab cursor marker remains after explicit stop request
- Created: 2026-10-20T11:16:53Z
- URL: https://github.com/openai/codex/issues/55540
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Problem

In the ChatGPT desktop app on macOS, a cursor-shaped control marker remained over the pinned Gmail tab in Chrome after I explicitly said "stop computer use" and the assistant confirmed it had stopped. The persistent marker makes it unclear whether browser control has been released or whether only further actions have stopped.

## Environment

- ChatGPT desktop app: 26.1013.40934
- macOS, Apple Silicon
- Google Chrome with the ChatGPT browser extension
- Observed October 20, 2026

## Steps observed

1. Ask the assistant to configure Gmail filters using an already open Chrome tab.
2. The assistant attempts to bind the Chrome tab through Computer Use; that request times out and the tool session resets.
3. The assistant completes the task using native Chrome app controls.
4. Send "

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
gh issue comment 55540 --repo openai/codex --body-file outbound/drafts/2026-10-20/openai-codex-55540.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
