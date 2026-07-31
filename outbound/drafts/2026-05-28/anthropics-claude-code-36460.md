# Draft for anthropics/claude-code#36460

- OP: @syn-otani
- Title: Channels not available on personal Max plan - --channels ignored
- Created: 2026-03-20T03:40:50Z
- URL: https://github.com/anthropics/claude-code/issues/36460
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Environment
- Claude Code v2.1.80
- macOS (Darwin 24.3.0)
- Bun 1.3.9
- Personal Max plan (subscriptionType: "max")
- Auth method: claude.ai login

## Issue

The `--channels` flag is silently ignored with the message:

```
--channels ignored (plugin:discord@claude-plugins-official)
Channels are not currently available
```

## Steps taken

1. Created a Discord bot and configured all required permissions
2. Successfully installed the discord plugin via `/plugin install discord@claude-plugins-official`
3. Configured the bot token via `/discord:configure`
4. Pairing completed successfully — bot responded with "Paired! Say hi to Claude."
5. Launched with `claude --channels plugin:discord@claude-plugins-official`
6. Got the "ignored / not currently available" message

## What I've tried

- Cr

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
gh issue comment 36460 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-28/anthropics-claude-code-36460.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
