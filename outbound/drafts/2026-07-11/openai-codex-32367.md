# Draft for openai/codex#32367

- OP: @reinoudvanwageningen-droid
- Title: Computer Use service crashes with excessive recursion when inspecting Microsoft Outlook on macOS
- Created: 2026-07-11T08:03:37Z
- URL: https://github.com/openai/codex/issues/32367
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

version 26.707.41301

### What subscription do you have?

pro

### What platform is your computer?

macOS 

### What issue are you seeing?


Codex Computer Use cannot inspect or control Microsoft Outlook for Mac because `SkyComputerUseService` crashes while building Outlook's macOS accessibility tree.

The error shown to Codex is:

```text
Sky Computer Use native pipe closed before response
```

The macOS crash report shows that this is caused by a stack overflow inside `SkyComputerUseService`:

```text
Exception: EXC_BAD_ACCESS / SIGBUS
Message: Thread stack size exceeded due to excessive recursion
Recursion depth: 129
Faulting process: SkyComputerUseService
```

This does not appear to be a missing accessibilit

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
gh issue comment 32367 --repo openai/codex --body-file outbound/drafts/2026-07-11/openai-codex-32367.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
