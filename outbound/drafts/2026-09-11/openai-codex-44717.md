# Draft for openai/codex#44717

- OP: @letobao
- Title: [macOS][Computer Use] Device Hub AppKit PID -1: direct executable workaround and request for launch-identity fix
- Created: 2026-09-11T03:29:53Z
- URL: https://github.com/openai/codex/issues/44717
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Relationship to existing report

Follow-up to #43386 with additional launch/PID evidence and a concrete workaround. That thread contains reports from three users across physical-device and simulator workflows. This report separates the newly isolated process-identity behavior from the original timeout. If maintainers prefer one tracker, please consolidate this evidence into #43386.

### Versions and platform

- macOS 27.0, Apple Silicon; historical successful investigation used build 26A428.
- Xcode 27 RC (27A266a), Device Hub 27.0 (255.2.6.6), bundle ID `com.apple.dt.Devices`.
- Original end-to-end workaround verification: Codex desktop 26.901.51231.
- Recurrence and host-identity recovery on September 11, 2026: desktop 26.903.71938 (8576).
- Subscription: not recorded in the diagnost

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
gh issue comment 44717 --repo openai/codex --body-file outbound/drafts/2026-09-11/openai-codex-44717.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
