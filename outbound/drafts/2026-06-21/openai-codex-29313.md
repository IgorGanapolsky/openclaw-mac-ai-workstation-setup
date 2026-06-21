# Draft for openai/codex#29313

- OP: @GGBondBlueWhale
- Title: Codex macOS app crashes with SIGABRT in computer-use-capture while loading objc-js native module
- Created: 2026-06-21T07:45:15Z
- URL: https://github.com/openai/codex/issues/29313
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

The Codex macOS app quit unexpectedly while it was actively working on a task in the conversation associated with the Feedback ID below.

The crash immediately interrupted my task and significantly disrupted my work. This is especially problematic for long-running Codex tasks, because an unexpected application-level crash terminates the active execution instead of presenting a recoverable error.

## Feedback ID

`019ee8f8-10a3-7110-842f-ade6115b13d1`

## Environment

- Codex version: `26.616.51431`
- Build: `4212`
- Release date shown in the app: June 21, 2026
- macOS: `26.5.1 (25F80)`
- Device: 16-inch MacBook Pro
- Chip: Apple M5 Max
- Memory: 128 GB
- Architecture: ARM64 native
- System Integrity Protection: Enabled
- Approximate crash time: June 21, 2026 at 15:20:38 UTC+8



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
gh issue comment 29313 --repo openai/codex --body-file outbound/drafts/2026-06-21/openai-codex-29313.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
