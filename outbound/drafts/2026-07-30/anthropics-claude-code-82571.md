# Draft for anthropics/claude-code#82571

- OP: @Ashr4f
- Title: No way for a user to allow third-party channel plugins for inbound notifications
- Created: 2026-07-30T12:23:37Z
- URL: https://github.com/anthropics/claude-code/issues/82571
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Problem

MCP channel plugins (capabilities.experimental["claude/channel"]) only deliver inbound notifications when they are on the hard-coded allowlist (the official discord/telegram/fakechat/imessage plugins). A third-party channel plugin installed from a custom marketplace connects fine and its tools all work, but every inbound message is silently dropped with:

```
Channel notifications skipped: server plugin:<name>:<server> not in --channels list for this session
```

I maintain a fork of the official Discord plugin (adds per-session channel routing) and hit this wall. Everything I tried, all on 2.1.220 / Windows 11:

- `channelsEnabled` + `allowedChannelPlugins` in user settings.json: ignored
- the same keys in C:\ProgramData\ClaudeCode\managed-settings.json: still skipped after re

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
gh issue comment 82571 --repo anthropics/claude-code --body-file outbound/drafts/2026-07-30/anthropics-claude-code-82571.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
