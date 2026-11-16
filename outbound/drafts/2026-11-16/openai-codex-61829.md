# Draft for openai/codex#61829

- OP: @metalcated
- Title: [macOS] Unable to unlock Mac during computer use; completion and client exit did not recover input
- Created: 2026-11-16T15:33:44Z
- URL: https://github.com/openai/codex/issues/61829
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What issue are you seeing?

I could not unlock my Mac during a ChatGPT/Codex desktop computer-use session. I explicitly asked the assistant to release control immediately. Its recovery attempts did not restore my ability to unlock, and I ultimately had to force-reboot the Mac.

This is a report of the observed failure, not a confirmed diagnosis of which component retained input or caused the lockup.

### Environment

Collected after the reboot:
- ChatGPT desktop bundle identifier: `com.openai.codex`
- App version: `26.1106.51428`, build `26605`
- macOS: `27.2.1`, build `26B131`
- Architecture: `arm64`
- Computer-use interface: `cua_repl`
- Moonlight was involved in an earlier attempt to view a Linux test desktop. That connection had failed with a capture/encoding error.

### Observed s

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
gh issue comment 61829 --repo openai/codex --body-file outbound/drafts/2026-11-16/openai-codex-61829.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
