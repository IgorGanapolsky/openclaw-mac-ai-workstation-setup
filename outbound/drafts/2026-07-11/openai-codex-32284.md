# Draft for openai/codex#32284

- OP: @johnsilvavlogs
- Title: macOS Computer Use returns blank wrong-sized capture on sole external display and times out for LSUIElement apps
- Created: 2026-07-10T22:45:55Z
- URL: https://github.com/openai/codex/issues/32284
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?

ChatGPT desktop app `26.707.31428` (build `5059`) with the bundled Codex Computer Use integration.

### What subscription do you have?

ChatGPT Pro

### What platform is your computer?

- `Darwin 25.5.0 arm64 arm`
- macOS `26.5.1`
- MacBook in closed-clamshell mode
- Exactly one active external HDMI display (`QCQ90`)
- `CGMainDisplayID=5`, built-in flag `0`, logical resolution `2304x1296`, scale factor `2.0`

### What issue are you seeing?

A fresh Computer Use session does not consistently bind capture and app discovery to the sole active external main display. Two related symptoms reproduce in the same display topology:

1. `get_app_state` for Finder returns Accessibility data quickly (about `307 ms`) but the JPEG is blank and `1366x768`,

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
gh issue comment 32284 --repo openai/codex --body-file outbound/drafts/2026-07-11/openai-codex-32284.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
