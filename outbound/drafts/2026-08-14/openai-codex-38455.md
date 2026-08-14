# Draft for openai/codex#38455

- OP: @flannick
- Title: ChatGPT desktop 26.810.41047 repeatedly spawns Computer Use workers and crashes with V8 OOM on macOS
- Created: 2026-08-13T23:33:34Z
- URL: https://github.com/openai/codex/issues/38455
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

  - macOS 15.7.7, Apple Silicon, 32 GB RAM
  - App version 26.810.41047, build 6570
  - Previous version 26.730.61639 worked
  - Reproduces while idle, 98 seconds after launch
  - SIGABRT through node::OOMErrorHandler
  - 316 threads at crash; 187 named computer-use
  - Telemetry showed 78 unexplained child processes consuming about 4.96 GB after 29 seconds
  - Browser and Computer Use flags were explicitly disabled
  - App restored the SkyComputerUseClient notifier at startup
  - Crash incident ID: 096C41F9-EE0C-4136-BEDF-9035077248B7
  - CLI remains healthy; all databases pass integrity/parity checks

[ChatGPT-26.810.41047-crash.zip](https://github.com/user-attachments/files/31048380/ChatGPT-26.810.41047-crash.zip)

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
gh issue comment 38455 --repo openai/codex --body-file outbound/drafts/2026-08-14/openai-codex-38455.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
