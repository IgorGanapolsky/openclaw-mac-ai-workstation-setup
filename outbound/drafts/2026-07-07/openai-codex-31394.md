# Draft for openai/codex#31394

- OP: @cschanhniem
- Title: Codex computer-use auth plugin hijacks `system.login.screensaver`, locking user out of macOS at the unlock screen
- Created: 2026-07-07T10:37:47Z
- URL: https://github.com/openai/codex/issues/31394
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Version 26.623.141536 • Released Jul 7, 2026

### What subscription do you have?

plus

### What platform is your computer?

_No response_

### What issue are you seeing?

## Severity
**Critical** — full lockout. The only recovery is a hard power-cycle, and any unsaved work / running processes are lost. This affects the OS login/unlock path, not just the app.

## Summary
Installing / enabling Codex computer-use registers a SecurityAgent authorization plugin
(`CodexComputerUseAuthorizationPlugin.bundle`, mechanism `com.openai.sky.CUAService.AuthorizationPlugin.remote`)
and **rewrites the macOS `system.login.screensaver` authorization right** to route unlock through that plugin.

When the plugin's remote CUA servic

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
gh issue comment 31394 --repo openai/codex --body-file outbound/drafts/2026-07-07/openai-codex-31394.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
