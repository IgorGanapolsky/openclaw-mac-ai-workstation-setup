# Draft for openai/codex#55236

- OP: @q279472276-ping
- Title: Intel macOS: Locked use fails in 26.1013.40934 because Computer Use service and installer are absent
- Created: 2026-10-19T10:10:27Z
- URL: https://github.com/openai/codex/issues/55236
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Please provide an Intel/x86_64-compatible desktop release containing the native Computer Use service and Locked Use installer, or clarify the support status and show an actionable availability message in Settings.

Related existing report: #42514. This report supplies observations from a newer desktop release and a different macOS version.

## Environment

- ChatGPT desktop app version: 26.1013.40934
- macOS: 15.4.1 (24E263)
- Architecture: x86_64
- CPU: Intel Core i5-8257U
- Observed: October 19, 2026

## Reproduction

1. Open Settings > Computer Use.
2. Enable Locked use (Chinese UI: 锁屏操作).
3. The toggle remains off and the app reports: 无法更新“锁定操作”设置.

## Locally verified observations

- The app log records `Failed to spawn managed service isRespawn=false` and `Failed to recon

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
gh issue comment 55236 --repo openai/codex --body-file outbound/drafts/2026-10-19/openai-codex-55236.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
