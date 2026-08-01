# Draft for anthropics/claude-code#83057

- OP: @kasai-oot
- Title: [BUG] Discord plugin: /discord:access skill writes to the default access.json, ignoring DISCORD_STATE_DIR (server.ts honors it)
- Created: 2026-08-01T05:51:51Z
- URL: https://github.com/anthropics/claude-code/issues/83057
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## What's Wrong?

`server.ts` correctly resolves the state directory from `DISCORD_STATE_DIR`:

```ts
// plugins/.../discord/0.0.4/server.ts
const STATE_DIR = process.env.DISCORD_STATE_DIR ?? join(homedir(), '.claude', 'channels', 'discord')
const ACCESS_FILE = join(STATE_DIR, 'access.json')
```

But the `/discord:access` skill that *manages* that file still hardcodes the default path.
`skills/access/SKILL.md` contains four references to `~/.claude/channels/discord/access.json`
and never mentions `DISCORD_STATE_DIR`:

```
line 22: `~/.claude/channels/discord/access.json`. You never talk to Discord — you
line 31: `~/.claude/channels/discord/access.json`:
line 60: 1. Read `~/.claude/channels/discord/access.json` (handle missing file).
line 66: 1. Read `~/.claude/channels/discord/access.json`

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
gh issue comment 83057 --repo anthropics/claude-code --body-file outbound/drafts/2026-08-01/anthropics-claude-code-83057.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
