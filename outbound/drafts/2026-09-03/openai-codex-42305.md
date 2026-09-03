# Draft for openai/codex#42305

- OP: @dan-justiniac
- Title: Computer Use loses Shift when typing into a Tart VM window on macOS
- Created: 2026-09-02T16:34:25Z
- URL: https://github.com/openai/codex/issues/42305
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Computer Use `type_text` and shifted `press_key` input lose Shift when the target is a running Tart macOS VM window. Ordinary characters reach the guest, but uppercase letters and shifted punctuation arrive as their unshifted keys.

## Environment

- ChatGPT/Codex desktop: 26.825.51511 (7377), Apple silicon
- Computer Use plugin: 1.0.1000633
- `@oai/sky`: 0.6.24-premerge-pr-1369830-395ab116910c
- host: macOS 26.5.2 (25F84), Mac16,10, U.S./ABC input sources
- Tart: official 2.32.1 app, window targeted as `com.github.cirruslabs.tart`
- guest: macOS 26.6.2 (25G83), U.S. keyboard layout

## Minimal reproduction

1. Run a macOS guest in Tart and focus a blank TextEdit document inside the guest.
2. Target the Tart app with the documented macOS Computer Use API:

```js
await sky.type_

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
gh issue comment 42305 --repo openai/codex --body-file outbound/drafts/2026-09-03/openai-codex-42305.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
