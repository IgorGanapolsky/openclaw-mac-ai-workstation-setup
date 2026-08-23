# Draft for openai/codex#40235

- OP: @yuhkis
- Title: [macOS][Computer Use] Secure Event Input remains active after screen unlock and app quit until logout
- Created: 2026-08-23T13:14:49Z
- URL: https://github.com/openai/codex/issues/40235
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## What version of the Codex App are you using (From “About Codex” dialog)?

26.818.41509 (build 6962)

## What subscription do you have?

Unknown (not available from local diagnostics)

## What platform is your computer?

`Darwin 25.6.0 arm64 arm` (macOS 26.6.1, Apple Silicon)

## What issue are you seeing?

After a Locked Computer Use authorization attempt during screen unlock, Codex became the owner of macOS session-wide Secure Event Input. Secure Event Input then remained enabled while an ordinary, non-secure application was active, causing a `CGEventTap`-based keyboard tool that intentionally fails closed during Secure Event Input to stop transforming keys. The behavior was confirmed in a new TextEdit document, not in a password or other secure field.

Fully quitting Codex did not cle

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
gh issue comment 40235 --repo openai/codex --body-file outbound/drafts/2026-08-23/openai-codex-40235.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
