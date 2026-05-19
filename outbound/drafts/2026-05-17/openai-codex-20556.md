# Draft for openai/codex#20556

- OP: @larryisthere
- Title: macOS: Screenshot freeze/stuck after enabling Codex Computer Use screen/audio recording permissions
- Created: 2026-05-01T03:59:34Z
- URL: https://github.com/openai/codex/issues/20556
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Version 26.429.20946 (2312)

### What subscription do you have?

Pro

### What platform is your computer?

26.4.1 (25E253)

### What issue are you seeing?

After enabling Codex and the Computer Use features for screen and system audio recording on macOS, `Command + Shift + 4( + Control)` can still activate screenshot area selection, but selecting a region causes the screen to freeze.

Observed behavior:
- The screenshot area-selection UI appears and I can choose a region.
- After selection, most keyboard and mouse clicks become unresponsive across the screen.
- The system recovers automatically after about ~1 minute.
- The screenshot capture does not complete normally.

Additional finding:
- A separate screenshot

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
gh issue comment 20556 --repo openai/codex --body-file outbound/drafts/2026-05-17/openai-codex-20556.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
