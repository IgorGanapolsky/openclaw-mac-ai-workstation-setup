# Draft for openai/codex#61107

- OP: @AbdullahElrubi
- Title: [macOS] Sky Computer Use crashes during screenshot capture with SIGILL / native pipe closed
- Created: 2026-11-12T10:53:32Z
- URL: https://github.com/openai/codex/issues/61107
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

ChatGPT desktop 26.1106.51428; bundled Sky Computer Use helper 26.1105.1001874 (build 1001874)

### What subscription do you have?

Unknown

### What platform is your computer?

Darwin 24.6.0 x86_64 i386 (Intel iMac18,2), macOS 15.8.3

### What issue are you seeing?

On this Mac, attaching to a running native app via Computer Use fails with `Sky Computer Use native pipe closed before response`. `cua.getState()` succeeds and lists Telegram as running, but `cua.getApp("Telegram")` immediately closes the native pipe.

Each attempt terminates `SkyComputerUseService`; Telegram itself remains running. Five local crash reports on 2026-11-12 show the same failure: `EXC_BAD_INSTRUCTION` / `SIGILL` (`Illegal instruction: 4

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
gh issue comment 61107 --repo openai/codex --body-file outbound/drafts/2026-11-12/openai-codex-61107.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
