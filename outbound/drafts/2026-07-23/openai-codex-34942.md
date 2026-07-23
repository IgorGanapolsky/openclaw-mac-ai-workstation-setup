# Draft for openai/codex#34942

- OP: @vanjaoljaca
- Title: Chrome and Computer Use fail with two concurrent macOS users on one Mac
- Created: 2026-07-23T13:23:21Z
- URL: https://github.com/openai/codex/issues/34942
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What platform is your computer?

macOS on one MacBook with two macOS login users concurrently logged in via Fast User Switching. Both users run the ChatGPT desktop app / Codex.

### What issue are you seeing?

When both macOS users run Codex concurrently on the same Mac, Chrome control and Computer Use become unavailable or appear to confuse the two active desktop sessions.

Chrome control fails before reading tabs or navigating:

```text
Browser is not available: extension
```

The failure occurs even though Chrome is running and the ChatGPT Chrome Extension and native-host setup checks pass.

Computer Use independently fails on its first app-state request:

```text
Sky Computer Use native pipe startup failed
```

Both failures reproduced in a fresh Codex task. The same errors also oc

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
gh issue comment 34942 --repo openai/codex --body-file outbound/drafts/2026-07-23/openai-codex-34942.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
