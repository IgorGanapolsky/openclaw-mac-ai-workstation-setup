# Draft for openai/codex#30298

- OP: @SatyDasKap
- Title: macOS: Codex 26.623.31921 still has invalid signatures and restores Computer Use notify hook despite disabled feature
- Created: 2026-06-26T21:38:14Z
- URL: https://github.com/openai/codex/issues/30298
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary

Codex Desktop on macOS still appears to have a signing / Gatekeeper / Computer Use regression on `26.623.31921` / build `4452`.

The main app bundle and bundled Computer Use app both fail local code-signature verification. In addition, even with Computer Use disabled in config, Codex restores the `SkyComputerUseClient` notify hook and relaunches `SkyComputerUseService`.

This looks related to #28795, #28807, #28071, and #28572, but I am filing this as a current-version report because it still reproduces after updating to build `4452`.

### Environment

```text
macOS: 26.5.1 (25F80)
Darwin: 25.5.0 RELEASE_ARM64_T8132 arm64
Codex Desktop: 26.623.31921
CFBundleVersion: 4452
Install path: /Applications/Codex.app
Computer Use path: ~/.codex/computer-use/Codex Computer Use.app
```



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
gh issue comment 30298 --repo openai/codex --body-file outbound/drafts/2026-06-27/openai-codex-30298.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
