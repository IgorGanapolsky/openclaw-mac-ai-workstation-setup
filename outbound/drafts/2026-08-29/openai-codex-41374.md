# Draft for openai/codex#41374

- OP: @chiway-luo
- Title: [macOS][Computer Use] Accessibility scan crashes Qt Creator 20.0.0 with libqcocoa SIGSEGV
- Created: 2026-08-28T17:27:07Z
- URL: https://github.com/openai/codex/issues/41374
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.825.31414

### What subscription do you have?

Unknown / not checked

### What platform is your computer?

Darwin 25.6.0 arm64 arm; macOS 26.6.2 (25G83), Apple Silicon

### What issue are you seeing?

When Codex/ChatGPT Computer Use accessibility observation is active, opening Qt Creator can crash the target Qt application itself on macOS. This is distinct from the Computer Use helper crashing.

Observed environment:
- Qt Creator 20.0.0, bundled Qt 6.11.1, running natively on arm64
- macOS 26.6.2 (25G83)
- The Qt Creator app is Apple-signed/notarized; no user-installed third-party Qt Creator plugins were found

Observed crash signature:
- EXC_BAD_ACCESS / SIGSEGV on the main thread
- First frame: libqcocoa.dyl

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
gh issue comment 41374 --repo openai/codex --body-file outbound/drafts/2026-08-29/openai-codex-41374.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
