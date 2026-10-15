# Draft for openai/codex#54236

- OP: @51754501zzz-design
- Title: [macOS desktop] /approve shows no commands after a Computer Use session was stopped
- Created: 2026-10-15T08:27:43Z
- URL: https://github.com/openai/codex/issues/54236
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary
After a Computer Use session was stopped on a prohibited website, a subsequent, explicitly authorized request to open an existing Tampermonkey script editor could not proceed. Reading browser state was denied because of the earlier session stop. The documented `/approve` recovery command is unavailable in the user's current desktop composer: a supplied screenshot shows `/approve` entered with the result “无命令” (“No commands”).

Please clarify the supported recovery/one-action review path. This is not a request to override prohibited website access or disable safety checks.

## Environment
- macOS 26.3, arm64.
- Two installed desktop bundles share `com.openai.codex`: versions `26.1007.21159` (build 20052) and `26.1007.71326` (build 20398), read from local bundle metadata.
- The bu

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
gh issue comment 54236 --repo openai/codex --body-file outbound/drafts/2026-10-15/openai-codex-54236.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
