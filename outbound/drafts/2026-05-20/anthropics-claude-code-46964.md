# Draft for anthropics/claude-code#46964

- OP: @andersonaguiar
- Title: Channels not available on Max plan - was working previously
- Created: 2026-04-12T11:46:52Z
- URL: https://github.com/anthropics/claude-code/issues/46964
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Description

Discord channels plugin was working previously but now shows:

```
--channels ignored (plugin:discord@claude-plugins-official)
Channels are not currently available
```

## Environment

- **Claude Code version**: 2.1.104
- **OS**: macOS (Darwin 25.2.0)
- **Subscription**: Max plan
- **Auth method**: claude.ai login
- **Plugin**: discord@claude-plugins-official v0.0.4

## What I've verified

- Plugin is installed and enabled (`claude plugins list` confirms ✔ enabled)
- Bot token is set in `~/.claude/channels/discord/.env`
- `access.json` is properly configured with allowlist policy
- Auth is via claude.ai (not API key or Console)
- No managed/enterprise settings blocking channels
- `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` is NOT set
- Reinstalled the plugin — same result
- 

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
gh issue comment 46964 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-20/anthropics-claude-code-46964.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
