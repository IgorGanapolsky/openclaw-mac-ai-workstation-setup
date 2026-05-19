# Draft for openai/codex#22694

- OP: @lattwood
- Title: Computer Use has an undocumented hard requirement on macOS 26.0
- Created: 2026-05-14T21:01:05Z
- URL: https://github.com/openai/codex/issues/22694
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What issue are you seeing?

```
ASI found [dyld] (sensitive) 'Symbol not found: _swift_task_addPriorityEscalationHandler
  Referenced from: <859C01F7-4D25-3CBF-892D-915458DAD00E> /Users/logan/.codex/computer-use/Codex Computer Use.app/Contents/MacOS/SkyComputerUseService
  Expected in:     <15F5D0D7-4B7C-3662-8115-861E1DE91826> /usr/lib/swift/libswift_Concurrency.dylib'
```

And as a result Codex Computer Use doesn't get to use the computer.

### What steps can reproduce the bug?

* Have macOS 15 installed.
* Have Codex Desktop App installed.
* Open Console.app, put `_swift_task_addPriorityEscalationHandler` in the search box, hit Start and open Codex.

The search term is because a LOT of stuff would match for just Codex.

### What is the expected behavior?

Uhhh, it shouldn't crash? H

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
- End with the $19 quick-read CTA: https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 22694 --repo openai/codex --body-file outbound/drafts/2026-05-14/openai-codex-22694.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
