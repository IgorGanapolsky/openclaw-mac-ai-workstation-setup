# Draft for openai/codex#38760

- OP: @jo910904
- Title: [Bug] Computer Use spawn storm exhausts launchservicesd and triggers WindowServer watchdog kernel panic on macOS 26.5
- Created: 2026-08-15T12:50:56Z
- URL: https://github.com/openai/codex/issues/38760
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

The ChatGPT desktop app / Codex on macOS repeatedly spawned `SkyComputerUseService` at approximately 5-8 processes per second immediately after app launch. The services were not reused or cleaned up. This caused two separate failure modes:

1. The desktop app accumulated roughly 340 threads and crashed from a V8/Node OOM after about 60-80 seconds.
2. More than 500 GUI helper instances exhausted `launchservicesd`'s dispatch-thread hard limit (512). WindowServer then failed its watchdog check-ins and macOS kernel-panicked and rebooted.

This happened twice. Computer Use was not actively being invoked when the spawn storm began.

The only effective local mitigation has been to prevent the Computer Use runtime from being installed/launched. That keeps Codex stable but makes Compute

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
gh issue comment 38760 --repo openai/codex --body-file outbound/drafts/2026-08-15/openai-codex-38760.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
