# Draft for openai/codex#20353

- OP: @Four1996
- Title: Codex Computer Use helper crashes on macOS 14.x: SkyComputerUseClient built with minos 15.0
- Created: 2026-04-30T08:41:35Z
- URL: https://github.com/openai/codex/issues/20353
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What happened?

Codex Desktop repeatedly triggers a macOS crash report for `SkyComputerUseClient`, the bundled Computer Use helper. The helper exits immediately during dynamic linking before a useful app-level backtrace is available.

### Expected behavior

Codex should either run the Computer Use helper on supported macOS versions, or avoid launching it / show a clear unsupported-OS message when the current OS is below the helper's minimum supported version.

### Actual behavior

On macOS 14.4, the helper fails at launch with a dyld missing-library error:

```text
Termination Reason: Namespace DYLD, Code 1 Library missing
Library not loaded: /usr/lib/swift/libswift_errno.dylib
Referenced from: Codex Computer Use.app/.../SkyComputerUseClient
Reason: tried /usr/lib/swift/libswift_errno.

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
gh issue comment 20353 --repo openai/codex --body-file outbound/drafts/2026-05-17/openai-codex-20353.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
