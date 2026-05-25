# Draft for anthropics/claude-code#43177

- OP: @RedhatEnt
- Title: MCP stdio servers never auto-reconnect after disconnect
- Created: 2026-04-03T16:14:20Z
- URL: https://github.com/anthropics/claude-code/issues/43177
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Bug

When a stdio-type MCP server process dies or disconnects, Claude Code marks it as `failed` and never attempts reconnection. HTTP/SSE/WebSocket servers get automatic reconnection with exponential backoff (5 attempts), but stdio servers are explicitly excluded. Users must manually run `/mcp` to reconnect.

## Root Cause

**File:** `src/services/mcp/useManageMCPConnections.ts`
**Lines:** 354-356

```typescript
// Handle automatic reconnection for remote transports
// Skip stdio (local process) and sdk (internal) - they don't support reconnection
if (configType !== 'stdio' && configType !== 'sdk') {
```

The comment says "they don't support reconnection" but this is incorrect. `reconnectMcpServerImpl()` in `src/services/mcp/client.ts:2137` works for ALL transport types — it calls `conn

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
gh issue comment 43177 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-25/anthropics-claude-code-43177.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
