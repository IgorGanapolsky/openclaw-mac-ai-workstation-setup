# Draft for openai/codex#36868

- OP: @nj-zhangrui-arvin
- Title: Codex Desktop: Computer Use duplicates physical keyboard and paste events system-wide on macOS
- Created: 2026-08-04T09:40:12Z
- URL: https://github.com/openai/codex/issues/36868
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.727.51351 (build 6119)

### What subscription do you have?

ChatGPT paid subscription (exact tier is not exposed in the local diagnostics used for this report)

### What platform is your computer?

`Darwin 25.6.0 arm64 arm` (macOS 26.6, build 25G72)

### What issue are you seeing?

While Codex Computer Use is active and its picture-in-picture preview is visible, every physical keyboard event can be delivered twice system-wide. For example, pressing `y` once produces `yy`. Pressing Cmd+V once pastes twice, including creating two identical screenshot attachments in Codex.

The behavior affects:

- the built-in Mac keyboard and an external keyboard;
- every tested input source, including the macOS ABC source and 

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
gh issue comment 36868 --repo openai/codex --body-file outbound/drafts/2026-08-04/openai-codex-36868.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
