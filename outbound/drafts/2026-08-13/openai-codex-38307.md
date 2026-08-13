# Draft for openai/codex#38307

- OP: @jackychanisnotme
- Title: [macOS] Two profiles run duplicate Computer Use services at high CPU; disabling one does not tear it down
- Created: 2026-08-13T04:23:28Z
- URL: https://github.com/openai/codex/issues/38307
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Codex App `26.727.40816` (`CFBundleVersion` `6067`).

Bundled Computer Use service: `26.727.1000550` (`CFBundleVersion` `1000550`, bundle identifier `com.openai.sky.CUAService`).

### What subscription do you have?

Unknown — the subscription tier is not exposed in the local diagnostic data available for this report. The failure is in local process/configuration lifecycle behavior.

### What platform is your computer?

```text
Darwin 25.5.0 arm64 arm
macOS 26.5.1 (25F80)
Apple Silicon Mac17,3
16 GB RAM, 10 logical/physical CPU cores
```

### What issue are you seeing?

Running two Codex/ChatGPT desktop instances with distinct Codex home/profile directories can start two independent copies of the macOS Computer Us

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
gh issue comment 38307 --repo openai/codex --body-file outbound/drafts/2026-08-13/openai-codex-38307.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
