# Draft for openai/codex#42690

- OP: @saberpp77
- Title: macOS: Computer Use-correlated FullWake cycles followed by WindowServer/AGX GPU exhaustion
- Created: 2026-09-04T07:08:11Z
- URL: https://github.com/openai/codex/issues/42690
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.901.20858 (Computer Use helper 26.831.1000926)

### What subscription do you have?

ChatGPT individual paid plan

### What platform is your computer?

macOS 14.8.9, Apple silicon (device model and unique identifiers intentionally omitted)

### What issue are you seeing?

On one overnight interval, the Mac was locked with the lid closed and connected to AC power. It later became unusable: an external display showed only a large solid-color block, while the built-in display showed only a charging indication instead of a usable login/session UI. A forced power-off was required.

Post-incident log reconstruction found a strong temporal correlation between Computer Use activity and repeated wake/display reconfigura

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
gh issue comment 42690 --repo openai/codex --body-file outbound/drafts/2026-09-04/openai-codex-42690.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
