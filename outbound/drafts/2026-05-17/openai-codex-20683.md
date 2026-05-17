# Draft for openai/codex#20683

- OP: @NewCoffee7477
- Title: Computer Use crashes SkyComputerUseService when inspecting Outlook on macOS
- Created: 2026-05-01T20:49:14Z
- URL: https://github.com/openai/codex/issues/20683
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.429.30905 (build 2345)

### What subscription do you have?

ChatGPT Pro

### What platform is your computer?

Darwin 25.5.0 arm64 arm

### What issue are you seeing?

Codex Computer Use fails when `get_app_state` is called for Microsoft Outlook on macOS.

The user-visible failure is:

`NSOSStatusErrorDomain Code=-609 "connectionInvalid"`

Local macOS diagnostic reports show that `SkyComputerUseService`, bundle `com.openai.sky.CUAService`, build `770`, crashes during the operation.

The crash signature is consistent across multiple reports:

`EXC_BAD_ACCESS`
`SIGBUS`
`Bus error: 10`
`Thread stack size exceeded due to excessive recursion`

This does not appear to be a general Computer Use outage because Computer

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
gh issue comment 20683 --repo openai/codex --body-file outbound/drafts/2026-05-17/openai-codex-20683.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
