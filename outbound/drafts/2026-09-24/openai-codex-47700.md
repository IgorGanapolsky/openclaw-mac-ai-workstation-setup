# Draft for openai/codex#47700

- OP: @devesh-aggarwal
- Title: [macOS][Computer Use] Qt Creator crashes opening .cpp files; suspected accessibility interaction
- Created: 2026-09-24T00:15:18Z
- URL: https://github.com/openai/codex/issues/47700
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Qt Creator repeatedly crashes when I try to open a `.cpp` file. Restarting my computer allowed one successful attempt, but the crashes then returned.

The crash report shows Qt Creator failing in `libqcocoa.dylib` while handling macOS accessibility requests. The relevant stack includes:

```text
libqcocoa.dylib
NSAccessibilityAttributeAccessorInfo getAttributeValue:forObject:
NSAccessibilityPerformEntryPointObject
CopyAppKitUIElementAttributeValueNoCatch
CopyMultipleAttributeValues
_AXXMIGCopyMultipleAttributeValues
```

The report also names `SkyComputerUseService` as the proximate process. This suggests a possible interaction with Codex Computer Use, but the cause has not been confirmed. Qt Creator is the application that crashes.

## Observed steps

1. Open Qt Creator.
2. Tr

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
gh issue comment 47700 --repo openai/codex --body-file outbound/drafts/2026-09-24/openai-codex-47700.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
