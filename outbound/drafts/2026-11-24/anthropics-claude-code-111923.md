# Draft for anthropics/claude-code#111923

- OP: @spakov
- Title: Channels docs and Telegram/Discord plugin READMEs should state that messages aren't end-to-end encrypted
- Created: 2026-11-24T02:10:56Z
- URL: https://github.com/anthropics/claude-code/issues/111923
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

### Documentation Type

Missing documentation (feature not documented)

### Documentation Location

https://code.claude.com/docs/en/channels

### Section/Topic

Channels > Security; Telegram and Discord channel plugin READMEs (anthropics/claude-plugins-official, external_plugins/)

### Current Documentation

The "Security" section of the channels docs covers sender allowlists, per-session opt-in via `--channels`, and permission relay.

The Telegram plugin's README.md and ACCESS.md (`external_plugins/telegram` in anthropics/claude-plugins-official) cover setup, pairing, the allowlist, and Telegram's group-message "privacy mode". The Discord plugin docs are similar.

None of these mention message confidentiality, where messages are stored, or what happens if the user's messaging account is c

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
gh issue comment 111923 --repo anthropics/claude-code --body-file outbound/drafts/2026-11-24/anthropics-claude-code-111923.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
