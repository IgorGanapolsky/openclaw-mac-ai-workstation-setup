# Draft for openai/codex#34471

- OP: @antonreshetov
- Title: Computer Use 1.0.1000451 cannot load @oai/sky because nodeRepl.env is empty on macOS 26
- Created: 2026-07-21T05:31:59Z
- URL: https://github.com/openai/codex/issues/34471
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Version 26.715.52143 (5591)

Computer Use plugin: 1.0.1000451

### What subscription do you have?

Pro

### What platform is your computer?

Darwin 25.5.0 arm64 arm

macOS 26.5.1 (25F80), Apple Silicon

### What issue are you seeing?

The bundled Computer Use plugin cannot initialize. Every Computer Use operation fails before accessing the target application because the plugin wrapper cannot locate the bundled `@oai/sky` runtime.

The runtime is installed inside the ChatGPT application bundle, but `nodeRepl.env` is an empty immutable object. Consequently, `computer-use-client.mjs` receives no `NODE_REPL_NODE_MODULE_DIRS`, creates an empty search-root list, and throws:

```text
Computer Use could not load @oai/sky

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
gh issue comment 34471 --repo openai/codex --body-file outbound/drafts/2026-07-21/openai-codex-34471.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
