# Draft for openai/codex#27891

- OP: @luvi-hub
- Title: macOS Intel x64: Computer Use service fails due to application-groups entitlement/provisioning mismatch
- Created: 2026-06-12T15:21:53Z
- URL: https://github.com/openai/codex/issues/27891
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

On macOS Intel x64, the Codex App fails to start the managed Computer Use service. As a result, Computer Use / Locked Computer Use cannot be enabled even after reinstalling the official Intel DMG and granting Accessibility + Screen Recording permissions.

This appears to be a packaging/signing/provisioning issue in the x64 app bundle: `sky.node` and the main app declare `com.apple.security.application-groups` for `2DC432GLL2.com.openai.sky.CUAService`, but the embedded provisioning profile does not include that entitlement. macOS then rejects the Computer Use service startup.

## Environment

- Platform: macOS Intel x64
- Codex App version: `26.609.30741`
- CFBundleVersion: `3808`
- Installer: `Codex-latest-x64.dmg`
- DMG SHA256: `fc9061de031b8e4918066f4db4c956482a5df2b424cd863

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
gh issue comment 27891 --repo openai/codex --body-file outbound/drafts/2026-06-13/openai-codex-27891.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
