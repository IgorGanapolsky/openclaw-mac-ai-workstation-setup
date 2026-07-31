# Draft for openai/codex#24252

- OP: @SultanAlsafran
- Title: macOS: Chrome and Computer Use disappear after restart; logout/login temporarily restores them
- Created: 2026-05-23T17:57:32Z
- URL: https://github.com/openai/codex/issues/24252
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.519.41501

### What subscription do you have?

ChatGPT Pro

### What platform is your computer?

Darwin 25.5.0 arm64 arm macOS, Apple Silicon Region/account location: Saudi Arabia / Asia-Riyadh

### What issue are you seeing?

On Codex Desktop for macOS, the bundled Chrome and Computer Use plugins disappear after restart even though the installed Codex app bundle contains both plugins.

Logging out and back in temporarily restored both plugins, but after a later restart the plugins disappeared again.

This looks like a Codex Desktop bundled plugin availability/session sync issue, not a missing local plugin installation.

After startup, Codex Desktop writes a bundled marketplace with only:

pluginCount=2 plugin

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
gh issue comment 24252 --repo openai/codex --body-file outbound/drafts/2026-05-24/openai-codex-24252.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
