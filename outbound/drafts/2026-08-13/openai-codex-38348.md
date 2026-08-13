# Draft for openai/codex#38348

- OP: @AryanRG
- Title: [macOS] Computer Use captures Stage Manager thumbnail, poisons ScreenCaptureKit stream (-3811/-3812)
- Created: 2026-08-13T10:29:37Z
- URL: https://github.com/openai/codex/issues/38348
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

With macOS Stage Manager enabled, Codex Computer Use can select an inactive app's Stage Manager thumbnail instead of its real window. The thumbnail has off-screen/negative window coordinates, so ScreenCaptureKit fails its display lookup. That failed capture can then poison the shared capture service: subsequent captures of unrelated, valid on-screen apps also return `SCStreamErrorDomain` errors until the service is restarted.

Disabling Stage Manager resolves the issue.

## Environment

- macOS: `27.0` (`26A5378n`), Apple Silicon / `arm64`
- ChatGPT/Codex Desktop: `26.803.61601` (build `6396`)
- Computer Use plugin/runtime: `1.0.1000633`
- Displays: one active built-in display
- Stage Manager: enabled when reproducing
- Screen Recording and Accessibility permissions: enabled fo

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
gh issue comment 38348 --repo openai/codex --body-file outbound/drafts/2026-08-13/openai-codex-38348.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
