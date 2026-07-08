# Draft for anthropics/claude-code#38335

- OP: @karenrebecag
- Title: [BUG] Claude Max plan session limits exhausted abnormally fast since March 23, 2026 (CLI usage)
- Created: 2026-03-24T17:23:05Z
- URL: https://github.com/anthropics/claude-code/issues/38335
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

### Preflight Checklist

- [x] I have searched [existing issues](https://github.com/anthropics/claude-code/issues?q=is%3Aissue%20state%3Aopen%20label%3Abug) and this hasn't been reported yet
- [x] This is a single bug report (please file separate reports for different bugs)
- [x] I am using the latest version of Claude Code

### What's Wrong?

Since March 23, 2026, the 5-hour session window on Claude Max plan is being exhausted abnormally fast when using Claude via the CLI (Claude Code).

With the exact same workload and prompts as previous days, the usage limit is now hit within 1-2 hours instead of the usual full 5-hour window. The consumption rate appears to have increased drastically without any changes on our end.

Other users are reporting the same issue on Reddit (r/ClaudeCode and r

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
gh issue comment 38335 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-31/anthropics-claude-code-38335.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
