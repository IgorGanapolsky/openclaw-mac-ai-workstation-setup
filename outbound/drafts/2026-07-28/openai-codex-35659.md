# Draft for openai/codex#35659

- OP: @vickyzer027-hash
- Title: Codex Computer Use leaves ScreenCaptureKit stream running at ~56 FPS, causing high WindowServer GPU on macOS
- Created: 2026-07-27T18:51:29Z
- URL: https://github.com/openai/codex/issues/35659
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Codex Desktop's bundled Computer Use runtime can leave a ScreenCaptureKit stream running after the Computer Use interaction/session has ended. The stale stream continued producing roughly 55–56 frames per second with no consumer, driving `WindowServer` to about 50–60% CPU and 59% GPU on macOS.

Fully quitting Codex clears the condition. Closing the target application or ending the visible Computer Use interaction does not.

## Environment

- macOS 26.5.2 (25F84), arm64
- Codex Desktop 26.721.41059 (build 5848)
- Bundled Codex CLI `0.146.0-alpha.3.1`
- Computer Use runtime 26.721.1000502 (build 1000502)
- One active external display: 2560×1440 at 100 Hz

## Reproduction

1. Launch Codex Desktop on macOS.
2. Use the bundled Computer Use capability to inspect/control another macOS

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
gh issue comment 35659 --repo openai/codex --body-file outbound/drafts/2026-07-28/openai-codex-35659.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
