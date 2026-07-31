# Draft for openai/codex#25758

- OP: @nguyentrungtu
- Title: Codex App overwrites bundled plugin config/cache and removes Computer Use/Browser plugins
- Created: 2026-06-02T03:14:58Z
- URL: https://github.com/openai/codex/issues/25758
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Codex App 26.527.60818 Bundle version: 3437 Bundle identifier: com.openai.codex

### What subscription do you have?

Plus

### What platform is your computer?

Darwin 25.5.0 arm64 arm

### What issue are you seeing?

Codex App is repeatedly removing the bundled Computer Use, Browser, and Chrome plugins from the active config/cache.

Computer Use disappeared from the available tools. I inspected `~/.codex/config.toml` and found that `computer-use@openai-bundled` had previously appeared under disabled tools, and later the plugin enable stanzas were missing entirely.

The bundled plugins do exist inside the app bundle:

- `/Applications/Codex.app/Contents/Resources/plugins/openai-bundled/plugins/browser`
- `/Applica

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
gh issue comment 25758 --repo openai/codex --body-file outbound/drafts/2026-06-03/openai-codex-25758.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
