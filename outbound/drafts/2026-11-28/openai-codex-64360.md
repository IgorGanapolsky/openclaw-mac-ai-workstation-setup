# Draft for openai/codex#64360

- OP: @williamchen2029-rgb
- Title: [macOS][Computer Use] Intermittently unavailable in ChatGPT conversations while Codex still works (26.1120.50957)
- Created: 2026-11-27T17:54:48Z
- URL: https://github.com/openai/codex/issues/64360
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

The bundled Computer Use plugin intermittently loses the ability to access native Safari in ChatGPT desktop conversations, even though Codex can still use Computer Use on the same Mac. A Configuration adjustment temporarily restored access on November 26, 2026, but the failure returned on November 27. This is an affected-user report, not a confirmed root-cause diagnosis.

## Environment

- ChatGPT/Codex desktop app: `26.1120.50957` (reported by the current desktop client; not independently checked in the About dialog)
- Platform: macOS, Apple Silicon (arm64)
- Plugin: bundled Computer Use (`computer-use@openai-bundled`)
- Affected app: native Safari
- Exact macOS, Safari, and helper build versions: not collected
- Observed dates: November 26–27, 2026

## Observed sequence

1. I

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
gh issue comment 64360 --repo openai/codex --body-file outbound/drafts/2026-11-28/openai-codex-64360.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
