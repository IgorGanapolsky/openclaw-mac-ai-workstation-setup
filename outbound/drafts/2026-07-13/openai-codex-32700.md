# Draft for openai/codex#32700

- OP: @Timcai06
- Title: [macOS][Computer Use] launches system Chrome and leaves code_sign_clone bundles until reboot
- Created: 2026-07-13T05:05:55Z
- URL: https://github.com/openai/codex/issues/32700
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary

Codex Computer Use launches the system-installed Google Chrome through
Playwright. Repeated automation sessions leave stale
`com.google.Chrome.code_sign_clone` bundles under `/private/var/folders/.../X/`.

This is distinct from the already reported `com.openai.codex.code_sign_clone`
leak: Computer Use also causes the user's system Chrome application to be
cloned repeatedly, and those clones remained until macOS was rebooted.

### Environment

- macOS 26.5.2 (25F84), arm64
- Codex desktop version 26.707.61608
- App bundle path: `/Applications/ChatGPT.app`
- Bundle identifier: `com.openai.codex`
- Google Chrome 150.0.7871.114

### Process evidence

The observed process ancestry was:

```text
ChatGPT.app
-> codex app-server
-> node_repl
-> cua_node
-> Google Chrome
```

The child

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
gh issue comment 32700 --repo openai/codex --body-file outbound/drafts/2026-07-13/openai-codex-32700.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
