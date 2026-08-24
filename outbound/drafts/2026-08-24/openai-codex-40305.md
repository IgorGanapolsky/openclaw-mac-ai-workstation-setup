# Draft for openai/codex#40305

- OP: @Corikachu
- Title: Codex Computer Use Accessibility permission causes DataGrip UI to freeze on macOS
- Created: 2026-08-24T01:39:35Z
- URL: https://github.com/openai/codex/issues/40305
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary

When **Codex Computer Use** has macOS **Accessibility** permission enabled, JetBrains DataGrip becomes completely unresponsive shortly after rendering a non-trivial SQL result grid. Disabling Accessibility permission for **Codex Computer Use.app** makes the issue disappear.

This looks like an interaction between Codex Computer Use's Accessibility inspection and JetBrains Runtime's macOS accessibility bridge.

### Environment

- Codex Desktop: `26.818.41509`
- Codex release date: `Aug 22, 2026`
- Computer Use: enabled
- macOS: `Tahoe 26.1`
- Hardware: `Apple M4 Pro`
- DataGrip: `2026.2.4`, build `DB-262.10315.24` (built Aug 20, 2026)
- JetBrains Runtime observed in thread dump: `OpenJDK 25.0.4+1-b508.27`

### Reproduction

1. Grant **Accessibility** permission to `Codex Comput

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
gh issue comment 40305 --repo openai/codex --body-file outbound/drafts/2026-08-24/openai-codex-40305.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
