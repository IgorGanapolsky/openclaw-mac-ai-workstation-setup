# Draft for openai/codex#50728

- OP: @kamiljakubczyk
- Title: macOS: recurring Computer Use typing/paste duplication; Claude keyboard taps report 16–56s latency
- Created: 2026-10-03T22:14:34Z
- URL: https://github.com/openai/codex/issues/50728
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary

Codex native Computer Use repeatedly disrupts manual typing and pasting in Claude Desktop and Opera on macOS. Keystrokes and image pastes can duplicate. The issue remains recurring and highly disruptive after local mitigation attempts.

A read-only CoreGraphics event-tap inspection confirmed two enabled, non-listen-only keyboard taps owned by the same SkyComputerUseService process and attached to Claude. Their reported average latencies were approximately 15.7 and 55.6 seconds.

### Environment

- Codex desktop app: 26.930.31730 (build 12947), bundle identifier com.openai.codex.
- Computer Use helper: 26.929.1001365 (build 1001365), bundle identifier com.openai.sky.CUAService.
- macOS 26.5 (25F71).
- Affected applications reported: Claude Desktop and Opera.

### Observed seque

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
gh issue comment 50728 --repo openai/codex --body-file outbound/drafts/2026-10-04/openai-codex-50728.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
