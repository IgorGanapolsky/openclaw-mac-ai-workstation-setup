# Draft for anthropics/claude-code#37327

- OP: @takish
- Title: Feature: persistent --channels config in settings.json
- Created: 2026-03-22T06:07:29Z
- URL: https://github.com/anthropics/claude-code/issues/37327
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

Currently, `--channels` must be passed as a CLI flag every time a session starts. There is no way to persist channel configuration so that a plugin (e.g., `plugin:discord@claude-plugins-official`) is automatically enabled.

## Use Case

Users who regularly use Discord/Telegram channels want them active by default without remembering the flag. The current workaround is a shell alias:

```bash
alias claude-discord='claude --channels plugin:discord@claude-plugins-official'
```

This works but is fragile — it doesn't compose with other flags, doesn't help IDE integrations, and isn't discoverable.

## Proposal

Allow configuring default channels in `settings.json` (user or project level):

```json
{
  "channels": [
    "plugin:discord@claude-plugins-official"
  ]
}
```

The CLI flag

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
gh issue comment 37327 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-26/anthropics-claude-code-37327.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
