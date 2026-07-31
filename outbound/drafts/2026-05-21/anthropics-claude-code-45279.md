# Draft for anthropics/claude-code#45279

- OP: @centaurverse
- Title: [BUG] Buddy/Companion can inject ghost messages into the input stream as role: "user", impersonating the user
- Created: 2026-04-08T15:11:05Z
- URL: https://github.com/anthropics/claude-code/issues/45279
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

The Buddy/Companion feature (April seasonal companion) can write messages into the input stream that appear as `Human:` (user role) messages. The model cannot distinguish these from genuine user input, leading to unintended actions and responses.

## Reproduction

1. Start a Claude Code session with the Buddy companion active
2. Use Telegram channels (`--channels plugin:telegram@claude-plugins-official`)
3. Observe that Buddy occasionally injects text into the session as `⏺ Human:` entries
4. The model treats these as genuine user messages and responds accordingly — including sending replies through the Telegram channel to the real user

## Observed behavior

- Buddy-generated text appears as `⏺ Human:` in the terminal, indistinguishable from real user input
- The model acts on

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
gh issue comment 45279 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-21/anthropics-claude-code-45279.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
