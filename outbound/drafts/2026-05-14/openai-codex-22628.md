# Draft for openai/codex#22628

- OP: @aleksei666777
- Title: Codex Desktop: spawned subagents with Computer Use receive image omitted while parent thread receives screenshots
- Created: 2026-05-14T09:25:45Z
- URL: https://github.com/openai/codex/issues/22628
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Environment

- App: Codex Desktop for macOS
- Codex version: `26.506.31421`
- Codex build: `2620`
- Computer Use app version shown in tool output: `780`
- macOS: `26.3.1 (a)`, build `25D771280a`
- Architecture: Apple Silicon / `arm64`
- Subscription: ChatGPT Pro
- Target app: iPhone Mirroring / `com.apple.ScreenContinuity`
- Also tested: Finder / `com.apple.finder`

## Summary

When using Computer Use directly from the parent Codex thread, `get_app_state("com.apple.ScreenContinuity")` returns a visible screenshot of the iPhone Mirroring window.

However, when the same Computer Use call is made from a spawned subagent (`gpt-5.3-codex-spark`, high reasoning), the subagent receives:

`<image content omitted because you do not support image input>`

This happens even though:

- macOS Screen

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
- End with the $19 quick-read CTA: https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 22628 --repo openai/codex --body-file outbound/drafts/2026-05-14/openai-codex-22628.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
