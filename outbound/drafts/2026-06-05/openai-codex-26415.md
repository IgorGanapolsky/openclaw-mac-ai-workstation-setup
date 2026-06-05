# Draft for openai/codex#26415

- OP: @heyobravo
- Title: Codex Desktop: Locked Computer Use hangs on macOS 26.6; SkyComputerUseService spins at high CPU
- Created: 2026-06-04T15:59:28Z
- URL: https://github.com/openai/codex/issues/26415
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?

Codex Desktop `26.601.21317` / build `3511`

### What subscription do you have?

Not specified

### What platform is your computer?

macOS `26.6` build `25G5028f`, Apple Silicon / `arm64`

### Component

Codex Desktop app, Computer Use, Locked Computer Use / lock-screen operation

### Summary

Locked Computer Use hangs when attempting to inspect Finder while the Mac is locked. The same Computer Use path works while unlocked after a full reboot. During the locked attempt, `SkyComputerUseService` stays alive but spins at high CPU with a large memory footprint, and a `sample` shows a recursive-looking stack in `SkyComputerUseService`.

This does not look like a normal macOS permission/setup failure: Accessibility and Screen Recording are grant

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
gh issue comment 26415 --repo openai/codex --body-file outbound/drafts/2026-06-05/openai-codex-26415.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
