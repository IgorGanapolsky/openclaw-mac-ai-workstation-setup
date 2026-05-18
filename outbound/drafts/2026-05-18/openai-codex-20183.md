# Draft for openai/codex#20183

- OP: @xowenx
- Title: Computer Use MCP fails to start on macOS 14.8.1 because bundled client requires macOS 15
- Created: 2026-04-29T09:43:34Z
- URL: https://github.com/openai/codex/issues/20183
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Computer Use MCP fails to start on macOS 14.8.1 because bundled client requires macOS 15

### Summary

  The bundled `computer-use` plugin fails during MCP startup on macOS 14.8.1. Codex reports an MCP handshake failure, but the underlying process exits immediately because the bundled
  `SkyComputerUseClient` binary was built for macOS 15.0 and depends on a Swift runtime library unavailable on macOS 14.

### Environment

  - Codex CLI: `codex-cli 0.125.0`
  - macOS: `14.8.1`
  - Build: `23J30`
  - Architecture: `arm64`
  - Plugin: `computer-use@openai-bundled`
  - Plugin version path: `computer-use/1.0.758`

### Error shown by Codex

  ```text
  MCP client for `computer-use` failed to start:
  MCP startup failed: handshaking with MCP server failed:
  connection closed: initialize respon

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
gh issue comment 20183 --repo openai/codex --body-file outbound/drafts/2026-05-18/openai-codex-20183.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
