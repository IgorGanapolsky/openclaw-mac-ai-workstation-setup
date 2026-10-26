# Draft for openai/codex#56903

- OP: @spnvt63995
- Title: [macOS Computer Use] Cmd+C causes unexpected Select All in Avalonia (flagsChanged keyCode=0)
- Created: 2026-10-25T14:12:59Z
- URL: https://github.com/openai/codex/issues/56903
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?

Codex desktop `26.1016.62342` (build `21477`, bundle ID `com.openai.codex`). Computer Use helper `26.1015.1001540` (build `1001540`, `com.openai.sky.CUAService`). Versions were read from installed bundle metadata.

### What subscription do you have?

Not included in this report.

### What platform is your computer?

- `Darwin 25.6.0 arm64 arm`; macOS `26.6.2` (build `25G83`), Apple silicon.
- Observed on 2026-10-25 with the Korean two-set input source selected. These trials use prefilled ASCII text and key chords, not IME composition or `typeText`.
- Target implementations: Avalonia Desktop/Fluent `11.3.20` on .NET 10; SwiftUI built with Apple Swift `6.4`; Electron `45.0.0` / Chromium `156.0.8078.48`.
- UI input/observations used Codex's `m

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
gh issue comment 56903 --repo openai/codex --body-file outbound/drafts/2026-10-26/openai-codex-56903.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
