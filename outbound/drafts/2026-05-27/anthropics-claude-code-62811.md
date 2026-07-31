# Draft for anthropics/claude-code#62811

- OP: @kylemarham
- Title: [FEATURE] CLI flag / settings.json key to pre-select session-resume mode (auto-restart use case)
- Created: 2026-05-27T12:17:38Z
- URL: https://github.com/anthropics/claude-code/issues/62811
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Use case

I run Claude Code as a long-running unattended assistant inside a tmux session, managed by macOS launchd. The session is resumed across reboots via:

```bash
claude --resume <session-id> --channels plugin:discord@... --dangerously-skip-permissions
```

When the underlying session grows large (e.g. 13h, 761k tokens), Claude Code 2.1+ shows this interactive prompt on resume:

```
This session is 13h 22m old and 761k tokens.
Resuming the full session will consume a substantial portion of your usage limits. We recommend resuming from a summary.

❯ 1. Resume from summary (recommended)
  2. Resume full session as-is
  3. Don't ask me again
```

After a reboot, nobody is at the terminal to answer it. The session sits at the prompt indefinitely until manually attended. That defeats th

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
gh issue comment 62811 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-27/anthropics-claude-code-62811.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
