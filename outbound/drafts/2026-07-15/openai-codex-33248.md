# Draft for openai/codex#33248

- OP: @mkandan
- Title: macOS: stale bundled Chrome/Computer Use marketplace installs revoked helpers and prevents native-host registration
- Created: 2026-07-15T05:11:05Z
- URL: https://github.com/openai/codex/issues/33248
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

On macOS, Codex/ChatGPT Desktop continued using a stale local snapshot of the `openai-bundled` marketplace even though the installed application contained newer Chrome and Computer Use plugins.

This produced a misleading combination of symptoms:

- Computer Use could be toggled on and the UI showed a success toast, but the tool was unavailable or disappeared after restart.
- The Chrome plugin/extension appeared installed, but `@chrome` could not connect.
- The Chrome native-messaging manifest was never created.
- macOS never displayed a Privacy & Security approval prompt.
- Reinstalling or toggling the plugins in the UI repeatedly did not repair the state.

The underlying problem was not a missing macOS TCC permission. The stale plugin helpers failed macOS trust validation bef

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
gh issue comment 33248 --repo openai/codex --body-file outbound/drafts/2026-07-15/openai-codex-33248.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
