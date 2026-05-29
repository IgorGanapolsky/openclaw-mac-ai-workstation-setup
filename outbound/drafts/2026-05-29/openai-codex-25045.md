# Draft for openai/codex#25045

- OP: @lyfoppa
- Title: Codex Desktop x64 missing Computer Use installer, cannot enable locked-screen control
- Created: 2026-05-29T08:38:02Z
- URL: https://github.com/openai/codex/issues/25045
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary

On an Intel Mac, Codex Desktop cannot enable the Chinese setting `锁屏操作` (`Allow Codex to operate while the Mac is locked`). The UI shows repeated toast errors:

```text
无法更新“锁定操作”设置
```

This appears related to the same missing x64 Computer Use bundle/service as appshot. The app tries to spawn the Computer Use installer from the Codex home directory, but the executable does not exist.

### Environment

- Codex Desktop version: `26.519.41501`
- Build: `3044`
- Bundle ID: `com.openai.codex`
- App arch: `x64`
- Installed app: `/Applications/Codex.app`
- Machine: Intel iMac, `x86_64`, Intel Core i9-10910
- macOS: `26.5` / build `25F71`
- Locale/UI: zh-CN

### User-visible error

When toggling the locked-screen control setting, the app displays repeated red toast messages:

```text

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
gh issue comment 25045 --repo openai/codex --body-file outbound/drafts/2026-05-29/openai-codex-25045.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
