# Draft for openai/codex#25788

- OP: @Co5mos
- Title: Locked Computer Use fallback typed into macOS login password field
- Created: 2026-06-02T06:33:43Z
- URL: https://github.com/openai/codex/issues/25788
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary

When using Codex remote control from iOS to operate a connected Mac, Computer Use works while the Mac is unlocked. With Locked Computer Use enabled, the same workflow can fail to locate the target app/window while the Mac is locked, then fall back to `open` / `osascript` keyboard automation. In my reproduction, that fallback input was sent to the macOS login password field instead of the target app, while Codex reported success.

This looks related to existing locked-use failures such as #24013 and #24086, but the distinct issue here is the unsafe fallback / false-success behavior after Computer Use cannot verify the target window.

### Environment

- Codex desktop app: `26.527.60818`
- Computer Use helper/plugin build: `799`
- macOS: `26.5` / build `25F71`
- Remote client: Ch

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
gh issue comment 25788 --repo openai/codex --body-file outbound/drafts/2026-06-02/openai-codex-25788.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
