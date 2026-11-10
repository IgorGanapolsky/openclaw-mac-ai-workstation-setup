# Draft for openai/codex#60474

- OP: @rschwabco
- Title: macOS Computer Use: physical typing doubles in Safari after native control reconnects (helper 26.1102.1001824)
- Created: 2026-11-10T00:08:11Z
- URL: https://github.com/openai/codex/issues/60474
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## What happens

When Codex controls Safari, typing on my physical keyboard in the actual Safari window duplicates characters. Typing `abc` produced `aabbcc` in Safari's native address bar. I was not typing into a preview inside Codex. This makes normal typing and handoffs unreliable.

## Environment

Verified from installed bundle metadata and `sw_vers` on November 9, 2026:

- ChatGPT/Codex desktop (`com.openai.codex`): 26.1103.60933, build 25894.
- Codex Computer Use helper (`com.openai.sky.CUAService`, executable `SkyComputerUseService`): 26.1102.1001824, build 1001824.
- macOS: 26.7.2, build 25G332.
- Affected app: Safari. Safari version and keyboard input-source ID were not collected.

## Reproduction and recovery observed in this session

1. With native Computer Use connected to Safa

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
gh issue comment 60474 --repo openai/codex --body-file outbound/drafts/2026-11-10/openai-codex-60474.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
