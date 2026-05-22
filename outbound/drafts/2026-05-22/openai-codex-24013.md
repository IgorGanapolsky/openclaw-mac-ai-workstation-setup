# Draft for openai/codex#24013

- OP: @anchia-hsu
- Title: Locked Computer Use authorization plug-in is registered but rejected by macOS SecurityAgentHelper Library Validation
- Created: 2026-05-22T06:02:48Z
- URL: https://github.com/openai/codex/issues/24013
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

Summary
Codex Locked Computer Use is enabled in Settings, but when the Mac is locked and I continue the Codex thread from iPhone Remote Control, Computer Use fails before interacting with the target app. The visible failure in Codex is `Failed: Get app state`. Local investigation shows that the Codex authorization plug-in is installed and registered in macOS authorizationdb, but SecurityAgentHelper rejects it at load time with a Library Validation error.

Environment
- macOS: 26.5 (25F71)
- Hardware: Apple Silicon
- Codex app: 26.519.31651 (CFBundleVersion 3017)
- Codex Computer Use helper: build 799
- Codex Computer Use service bundle ID: `com.openai.sky.CUAService`
- Authorization plug-in bundle ID: `com.openai.sky.CUAService.AuthorizationPlugin`
- Plug-in path: `/Library/Security/Securi

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
gh issue comment 24013 --repo openai/codex --body-file outbound/drafts/2026-05-22/openai-codex-24013.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
