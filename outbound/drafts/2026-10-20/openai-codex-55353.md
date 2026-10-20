# Draft for openai/codex#55353

- OP: @rsblijun-dev
- Title: [macOS][Computer Use] Screen Sharing screenshots work but coordinate clicks fail with -10005 windowNotFoundAtPosition
- Created: 2026-10-19T19:17:17Z
- URL: https://github.com/openai/codex/issues/55353
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Native Computer Use can enumerate and capture a macOS Screen Sharing window, but screenshot-derived coordinate clicks fail with `Computer Use server error -10005: windowNotFoundAtPosition`. Two separately recorded diagnostic rounds did not recover reliable coordinate input, blocking remote GUI acceptance.

Please route this to the native Computer Use / SkyComputerUseService maintainers if another component owns it.

## Environment

- Controller host macOS: **26.6 (25G72)**.
- Installed ChatGPT desktop bundle with Codex surface (`com.openai.codex`): **26.1013.40934**, build **20770**.
- Installed Codex Computer Use helper (`com.openai.sky.CUAService`): **26.1013.1001501**, build **1001501**.
- Native integration: `cua_repl` / `cua` API; affected target is macOS Screen Sharing co

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
gh issue comment 55353 --repo openai/codex --body-file outbound/drafts/2026-10-20/openai-codex-55353.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
