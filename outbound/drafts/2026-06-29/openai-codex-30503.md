# Draft for openai/codex#30503

- OP: @tarek101
- Title: Codex Computer Use helper can keep macOS replayd/ReplayKit active and spike CPU while idle
- Created: 2026-06-29T02:03:23Z
- URL: https://github.com/openai/codex/issues/30503
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary
On macOS, the Codex app's Computer Use helper appeared to keep Apple's ReplayKit daemon (`/usr/libexec/replayd`) active and caused a noticeable CPU spike even though I was not actively using desktop control.

This was observable as `replayd` repeatedly reappearing in Activity Monitor / process listings and accumulating CPU. Restarting `replayd` alone did not resolve it because it immediately respawned due to IPC clients. Stopping the Codex Computer Use helper caused the CPU usage to settle.

### Environment
- macOS: 14.8.3 (23J220)
- Codex.app: 26.623.42026, bundle version 4514
- Codex bundle id: `com.openai.codex`
- Architecture: arm64
- Chrome was also running, including a `video_capture.mojom.VideoCaptureService`, but the CPU spike dropped after stopping the Codex Computer U

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
gh issue comment 30503 --repo openai/codex --body-file outbound/drafts/2026-06-29/openai-codex-30503.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
