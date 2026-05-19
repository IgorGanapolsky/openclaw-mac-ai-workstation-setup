# Draft for openai/codex#22750

- OP: @rowankid
- Title: In the chatGPT app, unable to connect to Codex Desktop. Shows "Waiting for desktop..." Follow the instructions in the desktop app to get connected.
- Created: 2026-05-15T01:58:14Z
- URL: https://github.com/openai/codex/issues/22750
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.513.20950

### What subscription do you have?

Pro 5x

### What platform is your computer?

macos

### What issue are you seeing?

chatgpt for ios 1.2026.125 tried to connect to the codeX client via ChatGPT, but it kept getting stuck at "waiting for desktop"

### What steps can reproduce the bug?

I suspect the issue is caused by having two Codex clients, one for Windows and one for macOS, so I tried to close the Windows Codex and terminate the processes, leaving only the macOS Codex online, but I still couldn't connect.

### What is the expected behavior?

_No response_

### Additional information

_No response_

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
gh issue comment 22750 --repo openai/codex --body-file outbound/drafts/2026-05-15/openai-codex-22750.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
