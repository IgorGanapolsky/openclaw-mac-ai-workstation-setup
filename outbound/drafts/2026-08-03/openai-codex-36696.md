# Draft for openai/codex#36696

- OP: @codeitlikemiley
- Title: macOS: app-server survives WindowServer restart, then Computer Use cannot launch helper
- Created: 2026-08-03T06:41:06Z
- URL: https://github.com/openai/codex/issues/36696
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Version

- ChatGPT/Codex desktop app: `26.727.40816` (build `6067`)
- Bundled Codex app-server: `0.146.0-alpha.9.2`
- Computer Use helper: `26.727.1000550`

## Subscription

Not provided

## Related issues

Related to #11090, #11278, #34534, #34685, and #36627. Those reports cover parts of this failure class; this report connects a WindowServer/loginwindow reset to an orphaned app-server, loss of the macOS GUI bootstrap context, and the resulting Computer Use LaunchServices failure.

## Platform

```text
Darwin 25.5.0 arm64 arm
macOS 26.5.2 (25F84)
MacBookPro18,3, Apple M1 Pro, 16 GB
```

## What issue are you seeing?

Computer Use worked normally after the desktop app launched. After macOS watchdog-terminated and restarted WindowServer/loginwindow, the ChatGPT desktop GUI process disap

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
gh issue comment 36696 --repo openai/codex --body-file outbound/drafts/2026-08-03/openai-codex-36696.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
