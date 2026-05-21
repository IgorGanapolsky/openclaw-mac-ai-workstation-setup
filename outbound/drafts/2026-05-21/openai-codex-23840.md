# Draft for openai/codex#23840

- OP: @SSBrouhard
- Title: Codex Desktop Computer Use MCP initialize times out, but same client handshakes from Terminal
- Created: 2026-05-21T07:35:56Z
- URL: https://github.com/openai/codex/issues/23840
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Codex Desktop 26.513.31313; computer-use@openai-bundled 1.0.793

### What subscription do you have?

Pro

### What platform is your computer?

Darwin 25.5.0 arm64 arm

### What issue are you seeing?

Computer Use has moved past the earlier "runtime app is missing" failure, but now Codex Desktop appears unable to complete the MCP initialize handshake with the same bundled client binary that works from Terminal.

Current behavior:

- In Codex Desktop, a clean Computer Use MCP smoke test fails before tools are available: the MCP client starts but no initialize response is received, so `list_apps` and `get_app_state` cannot be called.
- Direct invocation from Terminal of the same `SkyComputerUseClient mcp` binary res

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
gh issue comment 23840 --repo openai/codex --body-file outbound/drafts/2026-05-21/openai-codex-23840.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
