# Draft for anthropics/claude-code#40207

- OP: @ignaciomella
- Title: [BUG] Claude Code sends SIGTERM to all healthy stdio MCP servers after 10-60s — root cause analysis with strace evidence
- Created: 2026-03-28T11:32:03Z
- URL: https://github.com/anthropics/claude-code/issues/40207
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Bug Description

Claude Code sends SIGTERM to **all** stdio-based MCP servers simultaneously, 10–60 seconds after successful connection and handshake. No errors precede the kill — servers are healthy and actively responding to tool calls. The timeout interval shrinks over the session lifetime (60s → 30s → 10s). The only recovery is manual `/mcp` reconnection, which itself gets killed again.

This is a systemic issue affecting every stdio MCP server configured in the session. Cloud-hosted MCPs (Gmail, Google Calendar via claude.ai) are unaffected because they use a different transport.

## Root Cause Analysis

I deployed three layers of instrumentation to trace the root cause:

### 1. strace on Claude Code's process tree

```
sudo strace -p <claude_pid> -e kill,tgkill -f -t
```

Captured

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
gh issue comment 40207 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-25/anthropics-claude-code-40207.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
