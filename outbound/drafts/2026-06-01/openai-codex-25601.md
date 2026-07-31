# Draft for openai/codex#25601

- OP: @ssyan110
- Title: Codex Mac App: Appshots Settings UI missing on 26.527 despite bundled resources
- Created: 2026-06-01T10:47:18Z
- URL: https://github.com/openai/codex/issues/25601
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.527.31326 (3390)

### What subscription do you have?

ChatGPT Pro

### What platform is your computer?

Darwin 25.5.0 arm64 arm; macOS 26.5 (25F71); Apple Silicon M1

### What issue are you seeing?

Appshots is completely missing from my Codex Mac app.

Symptoms:
- Settings has Computer Use and Browser, but no Appshots section.
- Keyboard Shortcuts has no Appshots entries.
- Appshots does not appear anywhere in Settings.
- Bundled plugins: browser, chrome, computer-use, latex.

Local investigation shows Appshots is bundled but hidden:
- app.asar contains settings.nav.appshots, settings.section.appshots, settings.appshotHotkey.label, composer.appshotCapture.attach, composer.appshotCapture.firstUse.title, and co

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
gh issue comment 25601 --repo openai/codex --body-file outbound/drafts/2026-06-01/openai-codex-25601.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
