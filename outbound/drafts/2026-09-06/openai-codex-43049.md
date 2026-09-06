# Draft for openai/codex#43049

- OP: @evbuildsnet
- Title: [macOS] Disabled Browser remains callable through unified Computer Use and advertised in tool instructions
- Created: 2026-09-05T16:13:09Z
- URL: https://github.com/openai/codex/issues/43049
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.901.41600, build 7982, read from the installed macOS app's Info.plist. The installed bundle is ChatGPT.app; this occurred in a local Codex task in the desktop app.

### What subscription do you have?

Not specified.

### What platform is your computer?

macOS 26.6.2, Apple silicon. `uname -mprs`: `Darwin 25.6.0 arm64 arm`.

### What issue are you seeing?

Disabling Browser does not prevent the agent from opening and controlling the in-app browser through **unified Computer Use**. The agent-facing tool instructions also continue advertising the disabled backend.

The following settings were read from `~/.codex/config.toml` after the successful browser operation:

```toml
[plugins."browser@openai-bundled"]
enabl

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
gh issue comment 43049 --repo openai/codex --body-file outbound/drafts/2026-09-06/openai-codex-43049.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
