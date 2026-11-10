# Draft for openai/codex#60606

- OP: @edgar-costa
- Title: Computer Use intermittently duplicates keystrokes and captures keyboard input from other macOS applications
- Created: 2026-11-10T15:20:14Z
- URL: https://github.com/openai/codex/issues/60606
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.1103.60933 (build 25894), verified from the installed desktop app bundle

### What subscription do you have?

Not relevant 

### What platform is your computer?

macOS 26.5.1 (build 25F80), Apple silicon. uname -mprs: Darwin 25.5.0 arm64 arm

### What issue are you seeing?

After Codex starts using Computer Use to interact with Claude Desktop, my manual keystrokes sometimes appear twice. I have also seen text I typed in another macOS app appear in the Codex conversation composer and get queued in the conversation while I was working in the other app.

This has happened multiple times during or after Computer Use sessions involving Claude Desktop. The exact trigger is unknown.

### What steps can reproduce the 

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
gh issue comment 60606 --repo openai/codex --body-file outbound/drafts/2026-11-10/openai-codex-60606.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
