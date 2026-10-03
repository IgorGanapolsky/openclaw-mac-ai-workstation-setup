# Draft for openai/codex#50611

- OP: @tomhundley
- Title: macOS Chrome Computer Use clicks leave focus on bookmarks bar while Safari input works
- Created: 2026-10-03T11:37:55Z
- URL: https://github.com/openai/codex/issues/50611
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Codex Computer Use can read the intended Chrome page and its accessibility tree, but clicking an empty input or a harmless policy link leaves the page unchanged and accessibility focus on a saved tab group in the bookmarks bar. The same native Computer Use surface successfully focuses fields and follows links in Safari.

This is an observed Chrome-specific input failure. The underlying cause is not established.

## Installed versions

- macOS 26.5.2, build 25F84
- Codex CLI 0.160.0
- Google Chrome 154.0.8037.97
- Computer Use helper 26.831.1000926 (build 1000926)
- Computer Use plugin 1.0.1000926

Versions were read from local CLI/bundle metadata. They are not a claim that every running component was restarted on these versions.

## Observed sequence

1. Bind Google Chrome usin

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
gh issue comment 50611 --repo openai/codex --body-file outbound/drafts/2026-10-03/openai-codex-50611.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
