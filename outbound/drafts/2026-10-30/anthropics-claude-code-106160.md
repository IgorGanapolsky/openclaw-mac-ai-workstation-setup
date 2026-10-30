# Draft for anthropics/claude-code#106160

- OP: @takujiabe
- Title: [Bug] Discord channel plugin MCP server intermittently fails to connect at startup
- Created: 2026-10-30T09:04:32Z
- URL: https://github.com/anthropics/claude-code/issues/106160
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

**Bug Description**
With `claude --channels plugin:discord@claude-plugins-official` (v2.1.308, macOS, plugin discord 0.0.4 enabled at user scope), the plugin MCP server "plugin:discord:discord" often shows ✘ failed right after startup. Config location: "Dynamically configured", no error text.--debug log shows NO connection attempt for plugin:discord:discord at startup (other MCP servers connect), and no file is created in mcp-logs-plugin-discord-discord for that session./mcp → Reconnect then succeeds: "Starting connection" → "Successfully connected (transport: stdio) in 322ms" → "Channel notifications registered".Same setup sometimes connects at startup. Launched with DISCORD_BOT_TOKEN / DISCORD_STATE_DIR env, --add-dir <state dir>, --append-system-prompt, and an initial prompt ("/loop 

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
gh issue comment 106160 --repo anthropics/claude-code --body-file outbound/drafts/2026-10-30/anthropics-claude-code-106160.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
