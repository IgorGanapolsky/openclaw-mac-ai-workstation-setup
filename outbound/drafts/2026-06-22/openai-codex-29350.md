# Draft for openai/codex#29350

- OP: @thisisgpy
- Title: Computer Use plugin cause macos crush
- Created: 2026-06-21T16:18:50Z
- URL: https://github.com/openai/codex/issues/29350
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.616.51431

### What subscription do you have?

Pro5X

### What platform is your computer?

Darwin 25.5.0 arm64 arm

### What issue are you seeing?

After enabling Computer Use for the Codex App, the macOS system experienced recurring high CPU usage and file descriptor (fd) exhaustion due to `syspolicyd`. During the failure, `syspolicyd` held approximately 2540 fds pointing to `/Applications/Codex.app/Contents/MacOS/Codex` and logged errors such as "Too many open files," "Failed to open main executable for hashing," "Failed to call driver: 0x3," and "SecStaticCode" failure. Subsequently, manually launching apps like Chrome and TikTok from the Dock/Finder resulted in continuous pop-ups but no opening. Disabling 

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
gh issue comment 29350 --repo openai/codex --body-file outbound/drafts/2026-06-22/openai-codex-29350.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
