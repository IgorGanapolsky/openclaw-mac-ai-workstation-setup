# Draft for anthropics/claude-code#46742

- OP: @pwelty
- Title: Support custom channel plugins beyond the hard-coded allowlist
- Created: 2026-04-11T18:30:29Z
- URL: https://github.com/anthropics/claude-code/issues/46742
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Problem

The `--channels` flag only accepts plugins from a hard-coded allowlist (discord, telegram, fakechat). Custom MCP plugins that correctly implement the `notifications/claude/channel` protocol and declare `experimental: { 'claude/channel': {} }` are rejected with:

```
plugin:irc@synaxis-plugins · not on the approved channels allowlist
```

## Use case

I run a fleet of ~11 Claude Code sessions coordinating via a shared chat channel. I built a custom IRC channel plugin (ngircd server on my tailnet, MCP server in TypeScript/Bun, same architecture as the Discord plugin) so the fleet can communicate over a lightweight, terminal-native protocol instead of Discord.

The plugin works — it connects, sends/receives messages, uses the same `notifications/claude/channel` notification method

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
gh issue comment 46742 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-21/anthropics-claude-code-46742.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
