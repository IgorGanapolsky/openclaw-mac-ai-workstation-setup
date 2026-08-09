# Draft for openai/codex#37642

- OP: @BriviantJosephD
- Title: Computer Use does not yield control to human input injected through macOS RDP
- Created: 2026-08-09T00:36:51Z
- URL: https://github.com/openai/codex/issues/37642
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What issue are you seeing?

Feedback ID: 019fe3bc-7844-7823-b26d-a3885688e747

On macOS, Codex Computer Use can cause a remote user to lose effective control of the desktop when the same graphical session is accessed through NuoRDS/RDP.

The RDP client sends the user’s mouse and keyboard actions to NuoRDS.  NuoRDS translates those actions into synthesized macOS input.  Codex Computer Use independently generates mouse, keyboard, click, and focus actions in the same session through macOS Accessibility.

The investigation did not establish that both products use the same low-level input API.  However, both ultimately generate competing input in the same macOS GUI session.

While Computer Use was active:

- RDP clicks and keystrokes appeared ineffective.
- The display and clock continued u

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
gh issue comment 37642 --repo openai/codex --body-file outbound/drafts/2026-08-09/openai-codex-37642.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
