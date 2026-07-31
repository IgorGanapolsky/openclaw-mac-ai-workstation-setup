# Draft for openai/codex#25139

- OP: @hermanhsu-rgb
- Title: # Bug Report: Computer Use MCP tools return "unsupported call"
- Created: 2026-05-29T19:22:28Z
- URL: https://github.com/openai/codex/issues/25139
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Description

Computer Use plugin MCP tools (`mcp__computer_use__list_apps`, `mcp__computer_use__get_app_state`, etc.) consistently return `"unsupported call"` despite the MCP server processes running correctly.

## Steps to Reproduce

1. Enable Computer Use plugin in Codex App
2. Grant Accessibility permissions to Codex App and Codex Computer Use
3. Restart Codex App
4. Attempt to call any `mcp__computer_use__*` tool
5. Tool returns `"unsupported call"`

## Expected Behavior

MCP tools should route calls to the SkyComputerUseClient MCP server and return results.

## Actual Behavior

All Computer Use MCP tool calls return `"unsupported call"` immediately.

## Environment

- **Codex App version**: 26.527.30818 (also reproduced on 26.519.81530)
- **macOS**: Sequoia 15.x
- **Hardware**: App

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
gh issue comment 25139 --repo openai/codex --body-file outbound/drafts/2026-05-30/openai-codex-25139.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
