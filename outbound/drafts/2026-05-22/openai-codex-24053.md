# Draft for openai/codex#24053

- OP: @lyfoppa
- Title: Codex Desktop x64 build missing computer-use appshot service, causing "Unable to attach appshot"
- Created: 2026-05-22T10:01:57Z
- URL: https://github.com/openai/codex/issues/24053
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary

On an Intel Mac, Codex Desktop shows `Unable to attach appshot` when using the new appshot/screenshot attachment feature. Local logs show the managed Computer Use service cannot be spawned. After inspecting the official x64 packages, the x64 build appears to be missing the `computer-use` plugin / `SkyComputerUseService` bundle that the app expects.

### Environment

- Codex Desktop version: `26.519.31651`
- Build: `3017`
- Bundle ID: `com.openai.codex`
- Installed app: `/Applications/Codex.app`
- Machine: Intel iMac, `x86_64`, Intel Core i9-10910
- macOS: `26.4.1`
- Locale: zh-CN

### User-visible error

When invoking appshot, Codex displays:

```text
Unable to attach appshot
```

### Relevant log evidence

The Codex Sentry scope/log includes:

```text
Codex Computer Use captu

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
gh issue comment 24053 --repo openai/codex --body-file outbound/drafts/2026-05-22/openai-codex-24053.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
