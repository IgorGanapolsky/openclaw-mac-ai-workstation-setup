# Draft for openai/codex#21846

- OP: @kmufti7
- Title: Codex Computer Use fails on macOS 26.4.1 with code-signing invalid helper
- Created: 2026-05-08T23:26:39Z
- URL: https://github.com/openai/codex/issues/21846
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary

Codex Computer Use does not work on macOS. `@Computer` always returns:

```text
Computer Use permissions are not granted
```

This continues even after granting Accessibility and Screen & System Audio Recording permissions, resetting permissions, starting new Codex threads, turning VPN off, and reinstalling Codex.

### Correlation ID

```text
019e096c-21ea-7a83-b3fa-87204325ebe8
```

### Environment

- macOS: 26.4.1 (25E253)
- Codex app: 26.506.31421
- Computer Use helper bundle ID: `com.openai.sky.CUAService`
- Helper version: 780
- Mac: Apple Silicon
- VPN: Surfshark disabled during test

### Steps Tried

- Enabled Accessibility for `Codex`
- Enabled Accessibility for `Codex Computer Use`
- Enabled Screen & System Audio Recording for Codex-related entries
- Ran targeted perm

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
gh issue comment 21846 --repo openai/codex --body-file outbound/drafts/2026-05-14/openai-codex-21846.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
