# Draft for anthropics/claude-code#78428

- OP: @Tudorick1313
- Title: [BUG] Remote Control registration: orphans on OAuth access-token rotation (~8h), dead session names never re-register, CLAUDE_CODE_OAUTH_TOKEN in env silently blocks registration
- Created: 2026-07-17T08:39:13Z
- URL: https://github.com/anthropics/claude-code/issues/78428
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary

Three coupled Remote Control registration failures found over a 24h investigation on a headless always-on box. Together they make the desktop/mobile app channel unusable unattended: the app session dies roughly every 8 hours and no relaunch strategy short of a specific ritual brings it back.

1. **Registration appears bound to the OAuth access token and orphans when the token rotates (~8h).** A registered, actively-used session loses its app bridge at the next silent credential refresh, mid-turn, while the CLI process on the box stays healthy.
2. **A session name whose registration died is burned.** Relaunching under the same `--name` never re-registers, even with fully valid auth. Only a never-used name (plus condition 3 below) registers.
3. **`CLAUDE_CODE_OAUTH_TOKEN` in the 

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
gh issue comment 78428 --repo anthropics/claude-code --body-file outbound/drafts/2026-07-17/anthropics-claude-code-78428.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
