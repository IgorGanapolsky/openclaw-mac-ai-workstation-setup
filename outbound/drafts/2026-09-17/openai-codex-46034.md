# Draft for openai/codex#46034

- OP: @wattsos
- Title: [macOS desktop] Chrome native-host manifest missing; Computer use settings cannot open repair controls
- Created: 2026-09-16T21:48:02Z
- URL: https://github.com/openai/codex/issues/46034
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

The Chrome extension opens but cannot connect to the desktop app. Settings > Computer use reports “Browser extension not installed,” and clicking the Google Chrome row does not open the repair controls. The bundled diagnostic confirms that the Chrome native-host manifest is missing.

## Environment

- macOS (exact OS version not collected)
- Installed app: `/Applications/ChatGPT.app`
- App version: `26.908.70816` (build `9275`), read from the installed app's Info.plist
- Bundle identifier: `com.openai.codex`
- Google Chrome extension ID observed in the open sidebar: `hehggadaopoacecdllhhajmbjkdcmajg`
- Session ID supplied for investigation: `01a0abe7-6d97-7f51-adfd-c8edbd8cc6fa`

## Observed behavior

1. With the desktop app running, open the ChatGPT extension sidebar in Chrome

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
gh issue comment 46034 --repo openai/codex --body-file outbound/drafts/2026-09-17/openai-codex-46034.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
