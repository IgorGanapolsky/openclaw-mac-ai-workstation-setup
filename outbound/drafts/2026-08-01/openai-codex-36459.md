# Draft for openai/codex#36459

- OP: @rootsid-GovernSafe
- Title: macOS Computer Use: fresh Safari state succeeds, then coordinate click fails with -10005 noWindowsAvailable after app restart
- Created: 2026-08-01T10:43:53Z
- URL: https://github.com/openai/codex/issues/36459
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary

On macOS, Computer Use can successfully return a fresh full screenshot and accessibility tree for the visible Safari window, and accessibility-index plus keyboard actions work, but a coordinate click derived from that same screenshot immediately fails with:

```text
SkyComputerUseError: Computer Use server error -10005: noWindowsAvailable
```

The first occurrence was reproduced immediately after quitting and reopening the ChatGPT desktop app. A fresh reproduction about 30 hours later produced the same split-path result. The failure is not tied to a hidden, narrow, off-screen, or multi-display Safari window.

### Environment

- ChatGPT desktop app: `26.727.40816` (bundle build `6067`), bundle ID `com.openai.codex`
- Computer Use JS client: `@oai/sky 0.6.2`
- Signed helper: `co

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
gh issue comment 36459 --repo openai/codex --body-file outbound/drafts/2026-08-01/openai-codex-36459.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
