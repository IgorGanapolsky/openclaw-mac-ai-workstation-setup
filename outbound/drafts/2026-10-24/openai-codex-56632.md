# Draft for openai/codex#56632

- OP: @zidamn
- Title: macOS Computer Use window capture causes 100–140 IOSurface diagnostics per second
- Created: 2026-10-24T02:19:42Z
- URL: https://github.com/openai/codex/issues/56632
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.1016.61520, build 21421, bundle `com.openai.codex` (version verified from the installed bundle during the October 23 reproduction).

Computer Use helper: 26.1015.1001540, build 1001540, bundle `com.openai.sky.CUAService`; executable `SkyComputerUseService`.

### What subscription do you have?

Not provided. This report concerns the local native capture path.

### What platform is your computer?

Darwin 27.0.0 arm64 arm

macOS 27.0.1, build 26A434. Display: 2560×1440 logical, 5120×2880 pixels, 70 Hz.

### What issue are you seeing?

An active Computer Use capture of a small synthetic native window triggers roughly 100–140 kernel IOSurface diagnostics per second. The same message was observed at exactly 140/s in

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
gh issue comment 56632 --repo openai/codex --body-file outbound/drafts/2026-10-24/openai-codex-56632.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
