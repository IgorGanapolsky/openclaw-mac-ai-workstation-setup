# Draft for openai/codex#39042

- OP: @mactonicaaron
- Title: macOS app update leaves pre-update node_repl host unable to authenticate to new Computer Use service
- Created: 2026-08-17T18:29:33Z
- URL: https://github.com/openai/codex/issues/39042
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of Codex CLI is running?

`codex-cli 0.147.0` (also the current npm release when checked on 2026-08-17).

### What subscription do you have?

Logged in using ChatGPT; the CLI does not expose the exact subscription tier.

### Which model were you using?

Not model-dependent. This occurred in the desktop app's Computer Use tool host.

### What platform is your computer?

`Darwin 25.5.0 arm64 arm`

### What terminal emulator and version are you using (if applicable)?

ChatGPT/Codex desktop app on macOS.

### Codex doctor report

Not included. This report concerns an observed pre-update runtime generation, and the current fresh runtime now succeeds. The in-client feedback was submitted without logs to avoid attaching unrelated session data.

### What issue are you seeing?

An 

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
gh issue comment 39042 --repo openai/codex --body-file outbound/drafts/2026-08-18/openai-codex-39042.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
