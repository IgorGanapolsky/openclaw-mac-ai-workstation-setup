# Draft for openai/codex#63086

- OP: @abcjhby2871
- Title: macOS Locked Use: physical-input pause makes remote Computer Use unusable despite being enabled
- Created: 2026-11-22T06:50:02Z
- URL: https://github.com/openai/codex/issues/63086
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Environment
- macOS 27.2 (26B123), Apple Silicon MacBook Pro
- Locked Use enabled in the Codex desktop app
- Observed November 22, 2026

## Description
Locked Use is unreliable in normal use. Computer Use works immediately when the Mac is unlocked, but after locking it, native app requests can all fail with:

```text
The Mac is locked and automatic unlock is paused because physical input was detected. Ask the user to unlock the Mac manually before continuing.
```

This defeats the primary purpose of Locked Use: allowing a task to continue when I am away from the Mac. The current UX offers no useful explanation of what input actually triggered the pause or when it occurred.

## Reproduction / observed results
1. Enable Locked Use and verify native Computer Use while the desktop is unlock

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
gh issue comment 63086 --repo openai/codex --body-file outbound/drafts/2026-11-22/openai-codex-63086.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
