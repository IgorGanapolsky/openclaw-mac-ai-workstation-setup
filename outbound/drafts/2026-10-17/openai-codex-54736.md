# Draft for openai/codex#54736

- OP: @michaelrad100
- Title: Native Computer Use getApp() stays in_progress when codex exec is started by a macOS LaunchAgent
- Created: 2026-10-16T23:33:07Z
- URL: https://github.com/openai/codex/issues/54736
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What issue are you seeing?

The first native Computer Use call in a fresh persisted `codex exec` session stays `in_progress` when the CLI is launched by a macOS GUI-user LaunchAgent. The same call succeeds from an active desktop chat. A separate persisted CLI worker launched from that desktop chat also successfully opened, read and closed one temporary local Chrome tab.

The background probe was bounded at 240 seconds. Its first tool call never produced a completed native result before the wrapper terminated the worker process group. There was no explicit permission-denial response. The root cause is unknown.

I am not assuming that LaunchAgent-hosted native Computer Use is supported. If this execution context is unsupported, an actionable unavailable-host response or documented way to

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
gh issue comment 54736 --repo openai/codex --body-file outbound/drafts/2026-10-17/openai-codex-54736.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
