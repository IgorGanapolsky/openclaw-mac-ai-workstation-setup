# Draft for openai/codex#20851

- OP: @its-DeFine
- Title: Feature request: first-class Computer Use support from the Codex CLI
- Created: 2026-05-03T07:14:03Z
- URL: https://github.com/openai/codex/issues/20851
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Problem

Computer Use is currently exposed as a Codex desktop/app plugin, but it is not presented as a first-class, supported CLI capability.

The local implementation appears to be a bundled MCP helper:

```text
computer-use -> ./Codex Computer Use.app/Contents/SharedSupport/SkyComputerUseClient.app/Contents/MacOS/SkyComputerUseClient mcp
```

On my machine, `codex mcp list` shows the `computer-use` server enabled from the OpenAI-bundled plugin cache, and the plugin metadata describes it as controlling Mac apps through screenshots/accessibility with user approval. The Codex CLI itself has general `mcp` commands, but `codex --help` does not expose a clear supported Computer Use workflow, permission setup, diagnostic path, or Desktop-bridge path for CLI sessions.

This is related to the

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
gh issue comment 20851 --repo openai/codex --body-file outbound/drafts/2026-05-17/openai-codex-20851.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
