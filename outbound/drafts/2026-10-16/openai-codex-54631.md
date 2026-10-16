# Draft for openai/codex#54631

- OP: @joshpetras
- Title: [macOS Computer Use] Safari approval repeats after "Allow once"; task remains stalled
- Created: 2026-10-16T15:22:15Z
- URL: https://github.com/openai/codex/issues/54631
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Installed ChatGPT desktop bundle: 26.1007.71326 (20398), verified from local application information. The running Codex build was not independently identified; this is not an About-dialog confirmation of that build.

### What subscription do you have?

ChatGPT Pro (Lite).

### What platform is your computer?

macOS 27.0.1 (26A434); Safari 27.0.1.

### What issue are you seeing?

During a read-only Computer Use task targeting an already-open Safari window, the native app-access prompt repeatedly appeared after selecting **Allow once**. The task never returned the requested inspection result and was eventually canceled.

The prompt read:

> Allow Computer Use to use "Safari"?

It showed an Elevated Risk notice and 

---

## Draft comment

<!--
HUMAN REVIEW REQUIRED. Write a personalized diagnostic below.

Rules:
- DO NOT fabricate diagnostic commands, log labels, or internal behaviors
  you cannot verify in the actual source repo or the OP's bug report.
- Lead with one specific detail from the OP's report (proves you read it).
- Name one verified check or workaround.
- Link to https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html
  with UTM tag ?utm_source=codex-issue&utm_medium=funnel&utm_campaign=qr-2026.
- End with the $19 quick-read CTA: https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u?utm_source=codex-issue&utm_medium=funnel&utm_campaign=qr-2026
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 54631 --repo openai/codex --body-file outbound/drafts/2026-10-16/openai-codex-54631.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
