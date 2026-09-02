# Draft for openai/codex#42220

- OP: @max-jang
- Title: [macOS][Computer Use] Accessibility traversal freezes DataGrip result grids and drives CPU to 100%
- Created: 2026-09-02T06:37:35Z
- URL: https://github.com/openai/codex/issues/42220
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.831.20005 (build 7524)

### What subscription do you have?

Personal ChatGPT account (ChatGPT Pro 5X)

### What platform is your computer?

Darwin 25.6.0 arm64 arm (macOS 26.6.2, build 25G83)

### What issue are you seeing?

This is a duplicate of #40305 and is related to #38873, filed with additional runtime evidence from a separate machine.

When Codex Computer Use reads the active DataGrip window containing a non-trivial SQL result grid, DataGrip becomes unresponsive. The DataGrip process rises from approximately 0.2% CPU to 98–102% and the accessibility read can take more than two minutes.

Disabling macOS Accessibility access for ChatGPT / Codex Computer Use, or quitting the ChatGPT app, prevents the free

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
gh issue comment 42220 --repo openai/codex --body-file outbound/drafts/2026-09-02/openai-codex-42220.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
