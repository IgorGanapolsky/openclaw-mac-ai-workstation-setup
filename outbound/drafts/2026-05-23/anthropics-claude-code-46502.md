# Draft for anthropics/claude-code#46502

- OP: @loganratix
- Title: Telegram plugin (and all stdio MCP plugins) disconnect after minutes of inactivity - makes messaging channels unusable
- Created: 2026-04-11T02:36:21Z
- URL: https://github.com/anthropics/claude-code/issues/46502
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

The Telegram channel plugin disconnects after roughly 5-10 minutes of conversation inactivity because Claude Code closes stdio MCP child processes when a session goes idle.

This makes the plugin completely unusable for its intended purpose - being reachable via Telegram when away from the computer. The connection only stays alive while actively using the conversation, which defeats the point of a messaging bridge.

Key findings from investigating the code:
- Claude Code's StdioClientTransport closes the pipe when the session ends
- server.ts detects EOF/orphan state and shuts down (lines 635-664)
- Stdio transports are explicitly excluded from automatic reconnection in cli.js - only SSE/HTTP transports get retry logic
- There is no exposed config (settings.json, .mcp.json) to control sess

---

## Draft comment

<!--
HUMAN REVIEW REQUIRED. Write a personalized diagnostic below.

Rules:
- DO NOT fabricate diagnostic commands, log labels, or internal behaviors
  you cannot verify in the actual source repo or the OP's bug report.
- Lead with one specific detail from the OP's report (proves you read it).
- Name one verified check or workaround.
- Link to https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/claude-code-channels-not-working.html
  with UTM tag ?utm_source=channels-issue&utm_medium=funnel&utm_campaign=qr-2026.
- End with the $19 quick-read CTA: https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u?utm_source=channels-issue&utm_medium=funnel&utm_campaign=qr-2026
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 46502 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-23/anthropics-claude-code-46502.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
