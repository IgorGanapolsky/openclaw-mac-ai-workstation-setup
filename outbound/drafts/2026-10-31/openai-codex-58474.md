# Draft for openai/codex#58474

- OP: @hibikifuji0210-maker
- Title: macOS Computer Use: coordinate clicks fail with windowNotFoundAtPosition until helper restart
- Created: 2026-10-31T03:11:53Z
- URL: https://github.com/openai/codex/issues/58474
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

Component: ChatGPT/Codex desktop app — Computer Use on macOS.

## Environment

- macOS 26.6.2 (25G83), Apple silicon.
- Desktop app 26.1027.30824 (build 22943).
- Computer Use helper: `com.openai.sky.CUAService`, 26.1022.1001641 (build 1001641).
- Display Settings showed one built-in display, default 1512×982, without external or Sidecar displays. This was not a complete virtual-display audit.

## Observed behavior

Coordinate clicks failed in both Finder and Live2D Cubism with `Computer Use server error -10005: windowNotFoundAtPosition(...)`. A drag in Cubism also failed with the same error. Finder Accessibility menu actions and screenshots continued to work.

Finder examples from an 1840×872 app screenshot:

- Title bar input `(700,50)` → `windowNotFoundAtPosition((437,198))`.
- Blank co

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
gh issue comment 58474 --repo openai/codex --body-file outbound/drafts/2026-10-31/openai-codex-58474.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
