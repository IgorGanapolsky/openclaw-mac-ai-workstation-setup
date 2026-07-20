# Draft for openai/codex#34316

- OP: @HenkPoley
- Title: Missing support for press-and-hold keyboard input (keyDown to keyUp) on macOS Computer Use
- Created: 2026-07-20T10:39:51Z
- URL: https://github.com/openai/codex/issues/34316
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.715.52143

### What subscription do you have?

Plus

### What platform is your computer?

macOS Sequoia 15.7.7

### What issue are you seeing?

Computer Use currently appears unable to hold a key down independently of releasing it. This prevents automating applications that rely on continuous or simultaneous key presses, such as classic computer emulators that poll the keyboard matrix rather than processing discrete key events. Please expose low-level keyDown and keyUp operations (or equivalent) so keys can be held across multiple frames or combined with other keys.

### What steps can reproduce the bug?

When Computer Use tries to type into the 'Fuse for macOS' XZ Spectrum emulator. The BASIC operating system

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
gh issue comment 34316 --repo openai/codex --body-file outbound/drafts/2026-07-20/openai-codex-34316.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
