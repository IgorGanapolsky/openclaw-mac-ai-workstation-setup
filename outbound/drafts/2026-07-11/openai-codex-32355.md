# Draft for openai/codex#32355

- OP: @lukgart
- Title: Computer Use helper crashes on macOS 15.6.1 due to missing Swift runtime symbol
- Created: 2026-07-11T07:15:25Z
- URL: https://github.com/openai/codex/issues/32355
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

Computer Use does not start on my Apple Silicon Mac, although the plugin is installed and both Screen Recording and Accessibility permissions are enabled.

Environment:

macOS 15.6.1 (24G90)
Apple Silicon Mac
Computer Use helper: 26.708.1000366, build 1000366
Bundle ID: com.openai.sky.CUAService
Declared minimum system version: macOS 14.4

Error shown by Codex:Sky Computer Use native pipe startup failed
The helper crashes immediately during launch. The macOS crash report shows:
DYLD — Symbol missingSymbol not found: _swift_task_addPriorityEscalationHandlerExpected in: /usr/lib/swift/libswift_Concurrency.dylib

I have already:
Reinstalled the Computer Use plugin
Restarted Codex
Re-enabled Screen Recording and Accessibility permissions
Confirmed that the helper is signed and accepted by macO

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
gh issue comment 32355 --repo openai/codex --body-file outbound/drafts/2026-07-11/openai-codex-32355.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
