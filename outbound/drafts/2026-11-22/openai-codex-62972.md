# Draft for openai/codex#62972

- OP: @theoreticaljerk
- Title: [macOS][Computer Use] Dot turn ends but Calculator screen capture keeps running
- Created: 2026-11-21T13:37:11Z
- URL: https://github.com/openai/codex/issues/62972
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Environment

- M4 Pro Mac mini, macOS 27.2.1 (26B131)
- ChatGPT/Codex desktop 26.1117.41037 (build 29803)
- November 21, 2026; all times below are CST (UTC−06:00)

## Steps to reproduce

1. Ask a Dot connected to the Mac to open Calculator with Computer Use, calculate 38 × 45, take a screenshot, and finish.
2. Leave Calculator open. Don't reset Computer Use, click the sharing control, or start another Computer Use task.
3. After the Dot turn ends, check the macOS sharing indicator and compare the unified logs for `SkyComputerUseService` and `replayd` for several minutes.

## Actual behavior

Two ScreenCaptureKit streams started at **07:24:56.996** and **07:25:00.766**. The Dot's last Calculator screenshot was at **07:25:01.364**, and the turn then ended. I found no matching `SCStream st

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
gh issue comment 62972 --repo openai/codex --body-file outbound/drafts/2026-11-22/openai-codex-62972.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
