# Draft for openai/codex#45279

- OP: @harikapk98
- Title: macOS computer use repeatedly hangs on getState/getApp(Safari), exceeds timeout, requires desktop restart
- Created: 2026-09-13T19:19:34Z
- URL: https://github.com/openai/codex/issues/45279
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Codex desktop computer use repeatedly hangs while acquiring Safari or reading the general app/browser inventory. Restarting the desktop app has temporarily restored work, but the problem returns. This report is submitted by Codex at the user's explicit request, based on observed tool errors and locally inspected app metadata.

## Environment

- macOS 26.6.2 (build 25G83).
- Observed September 12–13, 2026, America/Los_Angeles.
- Tool: mcp__cua_repl.js; native Safari via cua.getApp("com.apple.Safari").
- Two installed application bundles were found:
  - /Applications/Codex.app: version 26.715.72359, build 5718.
  - /Applications/ChatGPT.app: version 26.908.40834, build 8881.
- Both bundles declare com.openai.codex. The currently running binary was not independently verified. Sele

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
gh issue comment 45279 --repo openai/codex --body-file outbound/drafts/2026-09-14/openai-codex-45279.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
