# Draft for anthropics/claude-code#58018

- OP: @KAGDACI
- Title: VS Code extension 2.1.138 drops notifications/claude/channel — Telegram plugin polls but messages never inject into chat
- Created: 2026-05-11T11:47:43Z
- URL: https://github.com/anthropics/claude-code/issues/58018
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

`anthropic.claude-code-2.1.138-win32-x64` no longer surfaces `notifications/claude/channel` events from stdio MCP servers into the chat UI. The official Telegram plugin (`claude-plugins-official/telegram@0.0.6`) polls Telegram via grammy and successfully consumes Update messages from `getUpdates`, but the resulting `mcp.notification({ method: 'notifications/claude/channel', params: ... })` call does not produce a `<channel source="telegram">` block in the active VS Code conversation.

The plugin source is unchanged since 2026-04-15; the regression coincides with the extension dir mtime jumping to `2026-05-09 11:26` local time on this machine (auto-update). Reproducible across two clean VS Code restarts on 2026-05-11. The same plugin works correctly when launched via `claude --c

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
- End with the $19 quick-read CTA: https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 58018 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-14/anthropics-claude-code-58018.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
