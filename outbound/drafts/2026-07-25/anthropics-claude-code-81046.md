# Draft for anthropics/claude-code#81046

- OP: @KeitaKonno
- Title: [BUG] Discord channels: intermittent "not allowlisted" on reply — still reproduces on v2.1.220 (macOS)
- Created: 2026-07-25T02:53:10Z
- URL: https://github.com/anthropics/claude-code/issues/81046
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)


### Preflight Checklist

- [x] I have searched existing issues
- [x] This is a single bug report
- [x] I am using the latest version of Claude Code

### What's Wrong?

Running `claude --channels plugin:discord@claude-plugins-official`, the `reply` tool intermittently fails with:

```
reply failed: channel <id> is not allowlisted — add via /discord:access
```

`access.json` is correct and untouched (`dmPolicy: allowlist`, my user ID in `allowFrom`). The same session replies successfully before and after the failure, with no configuration change in between.

This is the same symptom as **#47680**, which was closed as a duplicate of **#36837** (a different, Linux-only "gateway never delivers messages" bug). #36837 was then auto-closed as stale and locked. **#41647** (null `recipientId`) was 

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
gh issue comment 81046 --repo anthropics/claude-code --body-file outbound/drafts/2026-07-25/anthropics-claude-code-81046.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
