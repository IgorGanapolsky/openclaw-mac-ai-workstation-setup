# Draft for openai/codex#26458

- OP: @jsduke246
- Title: Codex desktop repeatedly crashes when using Computer Use.
- Created: 2026-06-04T20:33:42Z
- URL: https://github.com/openai/codex/issues/26458
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Version 26.601.21317 •

### What subscription do you have?

Pro ($20/mo)

### What platform is your computer?

Darwin 25.5.0 arm64 arm

### What issue are you seeing?

Codex desktop repeatedly crashes when using Computer Use.

Environment:
- App: Codex
- Version: 26.601.21317 (3511)
- macOS: 26.5 (25F71)
- Hardware: Mac14,2
- Date: June 4, 2026

Observed pattern:
- HighLevel connector works after reinstall.
- Computer Use causes repeated Codex crashes.
- Reinstalling/resetting Computer Use helper did not fix it.
- Crash repeats after Computer Use is invoked.

Crash signature:
- Process: Codex
- Exception: EXC_CRASH (SIGABRT)
- Termination: Abort trap: 6
- Triggered thread: git
- Stack includes: node::OOMErrorHand

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
gh issue comment 26458 --repo openai/codex --body-file outbound/drafts/2026-06-05/openai-codex-26458.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
