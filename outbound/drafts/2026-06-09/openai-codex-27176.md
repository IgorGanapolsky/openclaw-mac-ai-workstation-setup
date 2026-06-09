# Draft for openai/codex#27176

- OP: @ZhiYiTree
- Title: Computer Use plugin missing after reinstall on macOS Intel
- Created: 2026-06-09T11:57:20Z
- URL: https://github.com/openai/codex/issues/27176
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Codex App：26.602.71036 Codex CLI：0.137.0-alpha.4

### What subscription do you have?

Computer Use plugin missing after reinstall on macOS Intel

### What platform is your computer?

macOS 15.7.3 x86_64

### What issue are you seeing?

Feedback ID: 019ea761-cb26-7803-ac8b-4dedd4ff66cd

Computer Use plugin is missing after reinstall.

Environment:
- Codex App: 26.602.71036
- macOS: 15.7.3, build 24G419
- Mac architecture: x86_64 / Intel
- Screen Recording permission: granted
- Accessibility permission: granted
- computer_use feature flag: true

Problem:
- Computer Use settings only shows Chrome.
- The Computer Use plugin is not present in plugin list.
- Codex Computer Use.app is missing from the machine.
- Appshot

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
gh issue comment 27176 --repo openai/codex --body-file outbound/drafts/2026-06-09/openai-codex-27176.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
