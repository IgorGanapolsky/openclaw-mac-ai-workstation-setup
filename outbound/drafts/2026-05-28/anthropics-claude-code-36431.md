# Draft for anthropics/claude-code#36431

- OP: @gokhunguneyhan
- Title: Telegram plugin: inbound MCP channel notifications not delivered to conversation
- Created: 2026-03-20T01:45:41Z
- URL: https://github.com/anthropics/claude-code/issues/36431
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Description

The Telegram plugin (`telegram@claude-plugins-official` v0.0.1) receives inbound messages correctly but they are never delivered to the active Claude Code conversation. Outbound messages (via the `reply` tool) work fine.

## Environment

- Claude Code: 2.1.80
- OS: macOS (Darwin 24.6.0)
- Plugin version: 0.0.1 (commit `8908a582`)
- Runtime: Bun

## Steps to Reproduce

1. Install the Telegram plugin (`claude plugin install telegram`)
2. Configure bot token and allowlist a user via `/telegram:access`
3. Send a message to the bot on Telegram
4. Observe that the bot shows "typing..." (confirming the message passes the gate and `handleInbound` runs)
5. The `mcp.notification({ method: 'notifications/claude/channel', ... })` call fires but nothing appears in the Claude Code conver

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
gh issue comment 36431 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-28/anthropics-claude-code-36431.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
