# Draft for openai/codex#37663

- OP: @deSkyl1ne
- Title: [macOS][ChatGPT Work] Computer Use is not injected; turn stays active and app must be force-quit
- Created: 2026-08-09T04:49:34Z
- URL: https://github.com/openai/codex/issues/37663
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.803.41515 (build 6321)

Bundled Codex CLI: `0.147.0-alpha.6.5`  
Bundled Computer Use plugin: `1.0.1000633`

### What subscription do you have?

Not specified.

### What platform is your computer?

```text
Darwin 25.6.0 arm64 arm
```

macOS 26.6.0, Apple Silicon.

### What issue are you seeing?

In the unified ChatGPT/Codex macOS desktop app, **ChatGPT Work does not inject the enabled Computer Use / node_repl capability into a new Work conversation**.

Work instead replies that Computer Use is unavailable or was not loaded for the conversation. After the text response appears, the turn does not finalize: the stop button and sidebar spinner remain active. The window then becomes operationally unusable—the red c

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
gh issue comment 37663 --repo openai/codex --body-file outbound/drafts/2026-08-09/openai-codex-37663.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
