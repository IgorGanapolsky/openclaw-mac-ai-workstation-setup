# Draft for anthropics/claude-code#36800

- OP: @greghughespdx
- Title: [BUG] Claude Code spawns duplicate channel plugin instances mid-session, causing 409 Conflict and tool loss
- Created: 2026-03-20T20:11:38Z
- URL: https://github.com/anthropics/claude-code/issues/36800
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

### TL;DR

Claude Code spawns a second Telegram channel plugin process ~3 minutes into a healthy session, with no crash or error preceding it. This triggers a cascade:

1. **Harness bug (this repo)**: Duplicate spawn with no apparent trigger. Tools not re-registered after the lifecycle churn. No debug logging.
2. **Plugin-side damage (claude-plugins-official)**: 409 Conflict, zombie process, silent notification failures. PRs [#812](https://github.com/anthropics/claude-plugins-official/pull/812), [#813](https://github.com/anthropics/claude-plugins-official/pull/813), [#814](https://github.com/anthropics/claude-plugins-official/pull/814) mitigate these but don't address the harness trigger.

**What needs investigation here**: Why does the harness spawn a duplicate plugin process when the exi

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
gh issue comment 36800 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-27/anthropics-claude-code-36800.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
