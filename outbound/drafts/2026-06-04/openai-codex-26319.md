# Draft for openai/codex#26319

- OP: @ahmedasmar
- Title: Codex Computer Use auth plugin adds 3-5s delay to macOS lock-screen unlock
- Created: 2026-06-04T05:43:43Z
- URL: https://github.com/openai/codex/issues/26319
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

After Codex Computer Use / Locked Computer Use installs its macOS screensaver authorization hook, local lock-screen unlock can become noticeably slow even when unlock eventually succeeds.

On this machine, both Touch ID and password unlock now take about 3-5 seconds to complete from the macOS lock screen. Local logs show the delay is in the `system.login.screensaver` authorization path, specifically around the Codex Computer Use authorization plug-in.

This is related to existing locked-use/auth-plugin reports such as #24013, #24086, and #24394, but this issue is specifically about the latency case: normal local unlock does not fully fail, but the Codex authorization hook adds a visible delay/spinner before unlock succeeds.

## Environment

- macOS: 26.5.1, build `25F80`
- Hard

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
gh issue comment 26319 --repo openai/codex --body-file outbound/drafts/2026-06-04/openai-codex-26319.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
