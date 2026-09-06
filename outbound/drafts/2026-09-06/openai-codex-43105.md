# Draft for openai/codex#43105

- OP: @garetjaxor
- Title: [macOS][Computer Use] iOS Simulator Save Password prompt cannot be clicked: windowNotFoundAtPosition
- Created: 2026-09-05T21:38:31Z
- URL: https://github.com/openai/codex/issues/43105
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

# [macOS][Computer Use] iOS Simulator Save Password prompt cannot be clicked: windowNotFoundAtPosition

## Summary

Native computer use could not dismiss the visible **Not Now** button on an iOS **Save Password** system prompt in two of three open Simulator windows. The prompt buttons were absent from the accessibility tree returned by the tool, and screenshot-based coordinate clicks failed with `Computer Use server error -10005: windowNotFoundAtPosition`.

The same coordinate-click operation dismissed the prompt in the third simulator. A person could manually click the affected buttons and continue. On one affected window, the error persisted after selecting, raising, and centering the window and taking a fresh screenshot.

## Environment and component scope

- Desktop host: ChatGPT app *

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
gh issue comment 43105 --repo openai/codex --body-file outbound/drafts/2026-09-06/openai-codex-43105.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
