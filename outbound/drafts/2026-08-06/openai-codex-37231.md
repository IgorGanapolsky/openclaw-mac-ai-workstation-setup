# Draft for openai/codex#37231

- OP: @danieltty
- Title: macOS Locked Computer Use exits before password field appears after display-sleep lock
- Created: 2026-08-06T07:04:38Z
- URL: https://github.com/openai/codex/issues/37231
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Locked Computer Use intermittently cannot unlock macOS after a display-sleep lock, although automatic unlocking works when the session was locked directly.

The lock-screen guardian checks the accessibility tree and exits with `didUnlock=false` immediately before loginwindow exposes the password field.

## Environment

- ChatGPT desktop app: 26.730.61639 (6234)
- Computer Use service: 26.803.1000621 (1000621)
- macOS: 27.0 (26A5388g)
- Architecture: arm64
- Hardware: Mac mini
- Computer Use service remained running throughout the incident

## Steps to reproduce

1. Enable Locked Computer Use.
2. Leave macOS awake while allowing the display to sleep naturally.
3. Let loginwindow create a display-dim lock.
4. Start a Computer Use request remotely.
5. Computer Use wakes the logica

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
gh issue comment 37231 --repo openai/codex --body-file outbound/drafts/2026-08-06/openai-codex-37231.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
