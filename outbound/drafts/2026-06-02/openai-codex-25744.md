# Draft for openai/codex#25744

- OP: @quasa0
- Title: Codex for macOS accumulates Computer Use / MCP helper processes and unreaped zombie children, causing HID lag and WindowServer/TCC stalls
- Created: 2026-06-02T01:19:22Z
- URL: https://github.com/openai/codex/issues/25744
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

# Codex macOS Resource Leak / Unreaped Child Processes Report

## GitHub Issue Draft

### Title

Codex for macOS accumulates Computer Use / MCP helper processes and unreaped zombie children, causing HID lag and WindowServer/TCC stalls

### Summary

On macOS, a long-running Codex session accumulated a large number of Codex-owned helper processes related to Computer Use / MCP tooling. The machine became visibly laggy. Inspection showed:

- Dozens of live `SkyComputerUseClient mcp` processes.
- Dozens of live `node_repl` processes.
- Dozens of live `codex app-server --listen stdio://` helper processes.
- More than 100 zombie child processes whose parent was the main Codex GUI process.
- macOS spin reports for Codex showing slow HID event handling, with WindowServer blocked in the TCC event-mo

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
gh issue comment 25744 --repo openai/codex --body-file outbound/drafts/2026-06-02/openai-codex-25744.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
