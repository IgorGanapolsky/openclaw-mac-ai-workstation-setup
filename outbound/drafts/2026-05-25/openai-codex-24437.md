# Draft for openai/codex#24437

- OP: @NightGlowww
- Title: Intel macOS x64 26.519.41501 still missing computer-use helper for Appshots and Locked use
- Created: 2026-05-25T10:53:02Z
- URL: https://github.com/openai/codex/issues/24437
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Codex Desktop `26.519.41501` on Intel macOS still cannot use Computer Use, Appshots, or Locked use because the x64 distribution does not include the `computer-use` bundled plugin or the `Codex Computer Use.app` helper.

This appears to still be a packaging/distribution issue in the current x64 build, not a local permissions issue.

## Environment

```text
Hardware/arch: Intel Mac, x86_64
CPU: Intel Core i9-9880H
Codex Desktop: 26.519.41501
CFBundleVersion: 3044
Bundled Codex CLI: codex-cli 0.133.0-alpha.1
```

## Symptoms

- Appshots hotkey registration and dispatch work.
- Appshots capture fails before producing a screenshot or AX text.
- Locked use cannot be enabled reliably.
- Reinstalling Codex and updating from `26.519.31651` to `26.519.41501` did not change the result.

T

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
gh issue comment 24437 --repo openai/codex --body-file outbound/drafts/2026-05-25/openai-codex-24437.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
