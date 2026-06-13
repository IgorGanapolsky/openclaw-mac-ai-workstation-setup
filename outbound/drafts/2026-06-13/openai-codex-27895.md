# Draft for openai/codex#27895

- OP: @marknefedov
- Title: Computer Use helper crashes while controlling iPhone Mirroring, then actions report inactive session
- Created: 2026-06-12T15:41:20Z
- URL: https://github.com/openai/codex/issues/27895
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Codex Desktop 26.609.30741 (CFBundleVersion 3808); Computer Use plugin 1.0.809; SkyComputerUseService build 809

### What subscription do you have?

Pro X5

### What platform is your computer?

Darwin 25.5.0 arm64 arm; macOS 26.5.1 (25F80), Apple Silicon

### What issue are you seeing?

When using the Computer Use plugin against Apple iPhone Mirroring (`com.apple.ScreenContinuity`), `get_app_state` succeeds and shows iPhone Mirroring as frontmost, but subsequent actions intermittently fail with:

```text
Computer Use is not active for 'iPhone Mirroring'. You first must call `get_app_state` to get the latest state before doing other Computer Use actions.
```

This happened even when `get_app_state` had just succee

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
gh issue comment 27895 --repo openai/codex --body-file outbound/drafts/2026-06-13/openai-codex-27895.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
