# Draft for openai/codex#26451

- OP: @fatgingercats
- Title: Codex Desktop macOS: bundled Computer Use plugin skipped as missing after update
- Created: 2026-06-04T19:36:59Z
- URL: https://github.com/openai/codex/issues/26451
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

After updating Codex Desktop for macOS to `26.601.21317`, the bundled `computer-use` plugin cannot be loaded. In the plugin UI it reports as unavailable / unable to load, and after restart/reconcile the plugin disappears or becomes disabled again.

This does not appear to be a macOS TCC permissions issue. Screen capture and Accessibility/System Events both work, and the Computer Use helper binaries are present and runnable. The failure appears to be in the bundled plugin reconcile/install flow.

## Environment

- App: Codex Desktop for macOS
- Bundle ID: `com.openai.codex`
- Codex version: `26.601.21317`
- Codex build: `3511`
- Computer Use helper bundle ID: `com.openai.sky.CUAService`
- Computer Use helper version/build: `1.0` / `799`
- Architecture: Apple Silicon / arm64

## 

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
gh issue comment 26451 --repo openai/codex --body-file outbound/drafts/2026-06-05/openai-codex-26451.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
