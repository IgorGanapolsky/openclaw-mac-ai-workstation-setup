# Draft for openai/codex#26842

- OP: @humanfy
- Title: Intel macOS x64 26.602.40724 still missing computer-use helper for Appshots and Locked use
- Created: 2026-06-07T02:13:06Z
- URL: https://github.com/openai/codex/issues/26842
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Codex Desktop `26.602.40724` on Intel macOS still cannot use Computer Use, Appshots, or Locked use because the x64 distribution does not include the `computer-use` bundled plugin or the `Codex Computer Use.app` / `SkyComputerUseService` helper payload.

This appears to still be the same packaging/distribution issue reported in #24053, #24056, and #24437, but it is still present in the newer x64 build `26.602.40724`, not just the earlier `26.519.x` builds.

## Environment

```text
Hardware/arch: Intel Mac, x86_64
CPU: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz
macOS: 26.5.1 (Build 25F80)
Codex Desktop: 26.602.40724
CFBundleVersion: 3593
Bundled Codex CLI: codex-cli 0.137.0-alpha.4
Installed app: /Applications/Codex.app
```

## Symptoms

- Computer Use is enabled as a feature flag,

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
gh issue comment 26842 --repo openai/codex --body-file outbound/drafts/2026-06-07/openai-codex-26842.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
