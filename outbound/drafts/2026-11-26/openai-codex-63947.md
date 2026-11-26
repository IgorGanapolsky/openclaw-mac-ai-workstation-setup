# Draft for openai/codex#63947

- OP: @chiao115
- Title: [macOS][Work mode] Native Computer Use fails to initialize in ChatGPT Desktop 26.1120.50957
- Created: 2026-11-25T15:44:12Z
- URL: https://github.com/openai/codex/issues/63947
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Environment

- ChatGPT Desktop / Codex Desktop: `26.1120.50957`
- macOS: `26.5.2` on Apple Silicon
- Mode: ChatGPT Work
- Bundled Computer Use helper build: `1002056`

### Steps to reproduce

1. In a Work conversation in the desktop app, tag the bundled **Computer Use** plugin and ask it to read an open Figma desktop window.
2. Repeat with the built-in macOS Calculator app to check whether the failure depends on Figma.

### Actual behavior

Both attempts consistently fail before any window state or screenshot is returned. The error surfaced by the `@oai/sky` call in `node_repl` is:

```text
sky requires node_repl; configure NODE_REPL_TRUSTED_SERVICES
```

Re-adding the Computer Use helper under **Screen & System Audio Recording** and resetting the JavaScript kernel did not resolve the 

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
gh issue comment 63947 --repo openai/codex --body-file outbound/drafts/2026-11-26/openai-codex-63947.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
