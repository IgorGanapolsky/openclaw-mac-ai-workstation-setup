# Draft for openai/codex#44906

- OP: @fmosler-bot
- Title: [macOS][Computer Use] Apple Mail is detected as running but cua.getApp fails with cgWindowNotFound (-10005)
- Created: 2026-09-11T20:44:40Z
- URL: https://github.com/openai/codex/issues/44906
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What issue are you seeing?

On September 11, 2026, Codex Computer Use repeatedly failed to access Apple Mail even though Mail was running and its main window was visibly open.

`cua.listApps()` detects Apple Mail as a running application, but attempting to access it with:

```text
cua.getApp("com.apple.mail")
```

fails with:

```text
Computer Use server error -10005: cgWindowNotFound
```

Reopening Apple Mail's main window did not resolve the failure. No email was created or sent.

### Steps to reproduce

1. Start Apple Mail and make sure its main window is visible.
2. Ask Codex / Computer Use to interact with Apple Mail.
3. Confirm that Mail is present in `cua.listApps()`.
4. Call `cua.getApp("com.apple.mail")`.
5. Observe `Computer Use server error -10005: cgWindowNotFound`.
6. Reop

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
gh issue comment 44906 --repo openai/codex --body-file outbound/drafts/2026-09-12/openai-codex-44906.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
