# Draft for anthropics/claude-code#68419

- OP: @natman95
- Title: --channels: plugin channel not binding under non-root user (works as root)
- Created: 2026-06-14T14:23:24Z
- URL: https://github.com/anthropics/claude-code/issues/68419
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

### Summary
The experimental `--channels` feature does not bind a plugin-provided channel MCP server when Claude Code runs as a **non-root user**, even though the same plugin + identical command binds correctly as `root`. The Discord MCP connects fine, but channel notifications are silently skipped, so inbound Discord messages never inject into the session.

### Environment
- Claude Code **v2.1.177**
- Linux (Ubuntu), `bun` 1.3.13, Node 20
- Plugin: `discord@claude-plugins-official` v0.0.4

### Symptom
Launching:
```
claude --channels plugin:discord@claude-plugins-official
```
The startup banner correctly shows `Channels (experimental) messages from plugin:discord@claude-plugins-official inject directly in this session`, and the MCP debug log shows the server connects:
```
Starting connect

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
gh issue comment 68419 --repo anthropics/claude-code --body-file outbound/drafts/2026-06-15/anthropics-claude-code-68419.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
