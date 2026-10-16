# Draft for openai/codex#54399

- OP: @israelazo
- Title: macOS: Chrome extension connected, but Computer Use says not installed and site approval denies access
- Created: 2026-10-15T19:53:38Z
- URL: https://github.com/openai/codex/issues/54399
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary

On macOS, the official ChatGPT Chrome extension is connected and exposes an active Chrome tab to Computer Use, but Settings → Computer Use reports **“Browser extension not installed”**. A saved website-permission gate also denies access to a local Home Assistant origin even though the local `browser_use.origins` configuration lists that origin as allowed. This leaves no working in-app **Manage** control to inspect or repair the saved browser permission.

### Environment

- macOS 27.0.1, Apple Silicon
- ChatGPT/Codex desktop app 26.1007.71326 (`/Applications/ChatGPT.app`, bundle ID `com.openai.codex`)
- Google Chrome 155.0.8059.79
- Official ChatGPT extension ID `hehggadaopoacecdllhhajmbjkdcmajg`

### Verified observations

- The extension can open side chat, and Computer Use l

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
gh issue comment 54399 --repo openai/codex --body-file outbound/drafts/2026-10-16/openai-codex-54399.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
