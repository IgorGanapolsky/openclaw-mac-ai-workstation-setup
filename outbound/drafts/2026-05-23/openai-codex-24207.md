# Draft for openai/codex#24207

- OP: @torry21th
- Title: Codex Desktop: locked computer use cannot be enabled on macOS Intel due to native component signing errors
- Created: 2026-05-23T07:50:22Z
- URL: https://github.com/openai/codex/issues/24207
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Codex Desktop cannot enable the locked computer use / lock-screen operation setting on an Intel Mac. The UI shows an error similar to `Unable to update "Locked operation" setting` when toggling the setting.

This does not appear to be a missing macOS privacy permission issue. The required TCC permissions are present, but the Codex Desktop app bundle has signing / Gatekeeper validation errors for the native computer-use components.

## Environment

- macOS: 15.7.5 (24G624)
- Architecture: x86_64 / Intel Mac
- Codex Desktop: 26.519.41501
- CFBundleVersion: 3044
- Bundle identifier: `com.openai.codex`
- App path: `/Applications/Codex.app`

## Reproduction

1. Install Codex Desktop 26.519.41501 on macOS Intel.
2. Grant Codex permissions in macOS Privacy & Security:
   - Accessibili

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
gh issue comment 24207 --repo openai/codex --body-file outbound/drafts/2026-05-23/openai-codex-24207.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
