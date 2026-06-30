# Draft for openai/codex#30608

- OP: @GGBondBlueWhale
- Title: [macOS] Codex Computer Use damaged and verification hangs after 26.623.70822 update
- Created: 2026-06-29T17:56:23Z
- URL: https://github.com/openai/codex/issues/30608
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Version `26.623.70822`  
Released Jun 30, 2026

### What subscription do you have?

ChatGPT Pro

### What platform is your computer?

- macOS Tahoe `26.5.1`
- MacBook Pro, 16-inch
- Apple M5 Max
- 128 GB memory
- Apple Silicon / arm64
- Serial number: redacted

### What issue are you seeing?

After updating Codex Desktop to the latest version, Computer Use can no longer start. macOS immediately shows the following Gatekeeper-style dialog:

> “Codex Computer Use” is damaged and can’t be opened. You should move it to the Trash.
>
> This file was downloaded on an unknown date.

At the same time, macOS also shows a separate verification dialog:

> Verifying “Codex Computer Use”…

That verification dialog stays stuck 

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
gh issue comment 30608 --repo openai/codex --body-file outbound/drafts/2026-06-30/openai-codex-30608.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
