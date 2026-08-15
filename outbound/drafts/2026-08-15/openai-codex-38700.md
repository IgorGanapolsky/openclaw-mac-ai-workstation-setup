# Draft for openai/codex#38700

- OP: @kreitter
- Title: macOS: timed-out Computer Use list_apps() call leaks PreventUserIdleDisplaySleep assertion for 34 hours
- Created: 2026-08-15T04:57:17Z
- URL: https://github.com/openai/codex/issues/38700
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## What version of the Codex app are you running?

`26.803.61601` (build `6396`)

The bundled Computer Use plugin/runtime cache version was `1.0.1000633`.

## What subscription do you have?

ChatGPT Pro ($200/month, 20x usage tier)

## What platform is your computer?

```text
Darwin 25.6.0 arm64 arm
```

macOS 26.6.1 (build 25G76), Apple silicon.

## What issue are you seeing?

A Computer Use call timed out and reset its JavaScript kernel. The call's `SkyComputerUseService` process then retained a macOS `PreventUserIdleDisplaySleep` power assertion named `Codex Computer Use interaction` for 34 hours, 3 minutes, and 4 seconds.

The assertion prevented normal display-idle sleep while the Mac was on battery. It remained active until after the Mac entered low-power hibernation at 1% battery an

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
gh issue comment 38700 --repo openai/codex --body-file outbound/drafts/2026-08-15/openai-codex-38700.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
