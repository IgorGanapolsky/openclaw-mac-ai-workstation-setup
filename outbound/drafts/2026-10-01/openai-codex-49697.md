# Draft for openai/codex#49697

- OP: @RandyHaddad
- Title: Computer Use helper interferes with physical keyboard input in Chrome on macOS, causing duplicated letters
- Created: 2026-09-30T18:19:25Z
- URL: https://github.com/openai/codex/issues/49697
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?
26.928.20755 (read from the installed ChatGPT.app bundle metadata).
Computer Use helper version: 26.924.1001281.

### What subscription do you have?
Not included in this report.

### What platform is your computer?
macOS 15.7.3, build 24G419, Apple silicon.
Google Chrome 154.0.8037.58.

### What issue are you seeing?
Manually typing in Chrome's address bar produced consecutive duplicated letters. For example, typing `railway` appeared as `rraaiillwwaayy`. The user reported that the problem also occurred in Incognito and did not occur in other apps.

Stopping Codex's `SkyComputerUseService` immediately restored normal physical-keyboard typing according to the user. Chrome was not restarted, and Wispr Flow remained running.

### What steps can

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
gh issue comment 49697 --repo openai/codex --body-file outbound/drafts/2026-10-01/openai-codex-49697.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
