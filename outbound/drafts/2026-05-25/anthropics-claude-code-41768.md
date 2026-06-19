# Draft for anthropics/claude-code#41768

- OP: @kiskysd
- Title: [BUG] DISCORD_STATE_DIR not passed to Discord plugin subprocess (regression from 2.1.88)
- Created: 2026-04-01T03:34:07Z
- URL: https://github.com/anthropics/claude-code/issues/41768
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Bug Description
The Discord plugin's `server.ts` relies on `DISCORD_STATE_DIR` to locate
per-instance token and access config. Since upgrading from 2.1.88 to 2.1.89,
the environment variable is no longer passed to the plugin subprocess.
When running multiple Claude Code sessions with different Discord bots,
only the first session connects successfully — all others fall back to
the default `~/.claude/channels/discord` path.

## Steps to Reproduce
1. Set `DISCORD_STATE_DIR` to a custom directory before launching
   `claude --channels plugin:discord@claude-plugins-official`
2. Verify the env var is set in the parent shell (`echo $env:DISCORD_STATE_DIR`)
3. Observe that the plugin subprocess does not receive the variable
   and falls back to the default path

## Expected Behavior
`DISCORD_S

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
gh issue comment 41768 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-25/anthropics-claude-code-41768.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
