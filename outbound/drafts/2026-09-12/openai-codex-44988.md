# Draft for openai/codex#44988

- OP: @isaac13141919
- Title: macOS Chrome Computer Use fails to load browser request-header policy
- Created: 2026-09-12T06:55:06Z
- URL: https://github.com/openai/codex/issues/44988
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Chrome Computer Use is detected by Codex Desktop on macOS, but external Chrome control repeatedly fails during browser request-header policy initialization. The built-in Codex browser is available, but Chrome cannot be controlled.

## Environment

- Platform: macOS
- ChatGPT Desktop version: `26.908.40834`
- Model tested: GPT-5.6 Sol
- macOS Accessibility permission: enabled
- Screen Recording permission: enabled
- ChatGPT Chrome extension: installed and enabled
- Chrome Computer Use integration: enabled
- OpenAI feedback ID: `no-active-thread-01a09463-fbd9-7642-acbb-f7439488a50c`

## Observed errors

Initial attempts reported that Chrome was not exposed to the session and only the Codex in-app browser was available.

After reconnecting the Chrome extension, Codex detected Chro

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
gh issue comment 44988 --repo openai/codex --body-file outbound/drafts/2026-09-12/openai-codex-44988.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
