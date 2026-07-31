# Draft for openai/codex#23992

- OP: @Kendell-wkp
- Title: Appshot fails after ScreenCapture permission: SkyComputerUseService crashes with EXC_BAD_ACCESS on macOS 15.0
- Created: 2026-05-22T03:15:00Z
- URL: https://github.com/openai/codex/issues/23992
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?

Codex App: 26.519.22136 (CFBundleVersion 3003)
Computer Use helper: com.openai.sky.CUAService, version 1.0 build 799

### What platform is your computer?

macOS 15.0 (24A5289h), Apple Silicon (MacBookPro18,1)

### What issue are you seeing?

The built-in appshot shortcut fails with the UI error:

`Unable to attach appshot`

After manually adding `Codex Computer Use.app` to System Settings > Privacy & Security > Screen & System Audio Recording and enabling it, macOS now shows the permission prompt:

`“Codex” can access this computer's screen and audio. Continue to allow access?`

Clicking Continue/Allow does not fix the issue. Codex still reports `Unable to attach appshot`.

### Expected behavior

After ScreenCapture and Accessibility permis

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
gh issue comment 23992 --repo openai/codex --body-file outbound/drafts/2026-05-23/openai-codex-23992.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
