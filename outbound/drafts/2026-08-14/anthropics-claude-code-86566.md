# Draft for anthropics/claude-code#86566

- OP: @SeRDic0705
- Title: --channels: inbound notifications silently dropped from the very first message (Team plan) — looks like a regression of the 2.1.105 fix
- Created: 2026-08-14T01:41:22Z
- URL: https://github.com/anthropics/claude-code/issues/86566
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

**Claude Code version:** 2.1.232
**OS:** Windows 11
**Install method:** global npm install
**Plan:** Claude Team
**Command:** `claude --dangerously-skip-permissions --channels plugin:discord@claude-plugins-official`

### Symptom

Inbound messages from the Discord channel plugin never turn into a visible `<channel source="discord" ...>` conversation turn — not even the very first message of a completely fresh session.

Everything checkable locally is healthy:
- `/mcp` shows the `discord` server as **connected**.
- The plugin's own MCP server subprocess (`bun run server.ts`) has a live, established TCP connection to Discord's gateway (verified via `Get-NetTCPConnection`).
- The plugin's own access-control gate is passing the message (Discord shows the bot's "typing..." indicator, which in th

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
gh issue comment 86566 --repo anthropics/claude-code --body-file outbound/drafts/2026-08-14/anthropics-claude-code-86566.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
