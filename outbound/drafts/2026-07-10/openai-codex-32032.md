# Draft for openai/codex#32032

- OP: @NeoAgentman
- Title: Computer Use 1.0.1000366 crashes at launch on macOS 15.7.7 due to missing Swift Concurrency symbol
- Created: 2026-07-10T05:21:08Z
- URL: https://github.com/openai/codex/issues/32032
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Computer Use fails to start on macOS 15.7.7 even when the bundled plugin is enabled and Codex has been restarted.

The native helper exits before MCP/UI control can initialize because dyld cannot resolve a Swift Concurrency symbol from the system runtime.

This appears related to #22822, but it affects the newer Computer Use build `26.708.1000366` / plugin `1.0.1000366`, not the older `1.0.791` build reported there.

## Environment

- Hardware: Apple Silicon (`arm64`, Mac14,2)
- macOS: 15.7.7 (24G720)
- Codex app bundle ID: `com.openai.codex`
- Codex app version: `26.707.31428`
- Computer Use plugin version: `1.0.1000366`
- Computer Use helper version: `26.708.1000366`

The same helper version is present in the app-bundled plugin, the bundled plugin cache, and `~/.codex/compute

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
gh issue comment 32032 --repo openai/codex --body-file outbound/drafts/2026-07-10/openai-codex-32032.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
