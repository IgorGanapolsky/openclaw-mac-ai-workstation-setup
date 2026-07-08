# Draft for anthropics/claude-code#54597

- OP: @mnw
- Title: [FEATURE] Permission relay: notify channel server when prompt is resolved locally (close server-side ghost state)
- Created: 2026-04-29T08:46:16Z
- URL: https://github.com/anthropics/claude-code/issues/54597
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

### Summary

The `claude/channel/permission` relay (v2.1.81+) is asymmetric: the channel server is told when a permission prompt **opens**, but never told when it **closes locally**. As a result, every channel implementation that renders the prompt in its own UI is left with a stale "pending" artifact whenever the user answers in the local terminal dialog instead of through the channel.

The docs for the feature explicitly describe this as the intended behavior. From [channels-reference#how-relay-works](https://code.claude.com/docs/en/channels-reference#how-relay-works):

> Both stay live: you can answer in the terminal or on your phone, and Claude Code applies whichever answer arrives first and closes the other.

> If someone at the terminal answers before the remote verdict arrives, that

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
gh issue comment 54597 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-24/anthropics-claude-code-54597.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
