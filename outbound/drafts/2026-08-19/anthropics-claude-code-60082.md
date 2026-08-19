# Draft for anthropics/claude-code#60082

- OP: @apstorenet
- Title: Feature request: real-time multi-user collaboration on a single Claude Code session
- Created: 2026-05-18T00:20:19Z
- URL: https://github.com/anthropics/claude-code/issues/60082
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Summary
There is currently no way for two different user accounts to share and collaborate on a single Claude Code session in real time (think Google Docs / VS Code Live Share, but for a Claude Code chat).

## Current state (as I understand it)
- "Share" links from claude.ai are read-only views, not collaborative.
- "Teammates" and "peer sessions" all belong to the same account — different devices/processes, not different humans.
- Remote Control lets *you* drive *your* session from another device, but again — single user.
- The only workarounds are screen sharing (one person types) or tmux session sharing (not officially supported).

## Use cases this would unlock
- **Pair programming** with a colleague where both can prompt the same agent.
- **Mentoring / onboarding**: a senior dev wa

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
gh issue comment 60082 --repo anthropics/claude-code --body-file outbound/drafts/2026-08-19/anthropics-claude-code-60082.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
