# Draft for anthropics/claude-code#61374

- OP: @nazt
- Title: claude -p in SDK mode auto-spawns Discord plugin when DISCORD_BOT_TOKEN present (phantom listener)
- Created: 2026-05-22T05:35:54Z
- URL: https://github.com/anthropics/claude-code/issues/61374
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

When `claude -p "<prompt>"` is invoked in an environment that has `DISCORD_BOT_TOKEN` + `DISCORD_STATE_DIR` exported (e.g. via direnv), claude's SDK-mode auto-spawns the Discord MCP plugin as a background bun child — **even though `--channels` was NOT passed.** That child connects to Discord's gateway and remains alive after `claude -p` returns. The user gets a phantom listener they never asked for.

## Environment

- `@anthropic-ai/claude-code` v2.1.146 (the `claude` binary at `~/.local/bin/claude`)
- Linux (Debian/Ubuntu, white.wg host) — also reproducible on macOS per same-token install patterns
- `claude-plugins-official/discord/0.0.4` plugin installed at `~/.claude/plugins/cache/`
- `~/.claude/settings.json` has `"enabledPlugins": { "discord@claude-plugins-official": true 

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
gh issue comment 61374 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-22/anthropics-claude-code-61374.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
