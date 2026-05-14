# Draft for anthropics/claude-code#58084

- OP: @Nazim22
- Title: Plugin install pipeline strips top-level dotfiles (.mcp.json, .npmrc), breaking channel plugins
- Created: 2026-05-11T17:00:12Z
- URL: https://github.com/anthropics/claude-code/issues/58084
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

The Claude Code plugin install/cache pipeline appears to drop top-level dotfiles when copying a marketplace plugin into `~/.claude/plugins/cache/...`. This breaks official channel plugins that declare their MCP server in `.mcp.json`.

Observed with `discord@claude-plugins-official` v0.0.4 on Linux/WSL. The marketplace source includes `.mcp.json` and `.npmrc`; the cached install initially did not. As a result, `claude --channels plugin:discord@claude-plugins-official` accepted the channel flag but only loaded the plugin's skills. It did not spawn the Discord MCP server, so there was no `bun server.ts` child and no channel registration.

Manually copying `.mcp.json` and `.npmrc` from the marketplace source into the cache unblocked server startup.

## Environment

- Claude Code: 2

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
gh issue comment 58084 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-14/anthropics-claude-code-58084.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
