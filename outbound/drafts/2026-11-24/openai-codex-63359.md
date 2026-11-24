# Draft for openai/codex#63359

- OP: @sampastukhov
- Title: macOS: Computer Use tools disappear despite enabled permission, then recover after tool refresh
- Created: 2026-11-23T15:40:03Z
- URL: https://github.com/openai/codex/issues/63359
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Environment
- ChatGPT desktop / Codex app bundle: `com.openai.codex`
- App version read from the installed bundle: **26.1117.41037 (29803)**
- macOS **27.2.1 (26B131)**
- Observed November 23, 2026, morning, America/New_York
- Subscription: not inspected

### Problem
In an existing desktop chat, the assistant's callable tool catalog temporarily had no Computer Use or browser-control entry point, even though the user had already enabled **Codex Computer Use** in macOS **Device Control and Data Access**. This blocked native Image Playground export and simulator UI work. This may be related to #53587, but this observation includes a later successful recovery after a tool-catalog refresh; the underlying cause has not been established.

### Observed sequence
1. The assistant could use shell

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
gh issue comment 63359 --repo openai/codex --body-file outbound/drafts/2026-11-24/openai-codex-63359.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
