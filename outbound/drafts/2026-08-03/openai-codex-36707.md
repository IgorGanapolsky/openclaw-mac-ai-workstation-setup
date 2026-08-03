# Draft for openai/codex#36707

- OP: @steveoon
- Title: [macOS] Computer Use Mail inspection hangs and drives Mail CPU high
- Created: 2026-08-03T08:50:59Z
- URL: https://github.com/openai/codex/issues/36707
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

`26.727.51351 (6119)`

### What subscription do you have?

Not provided.

### What platform is your computer?

`Darwin 25.6.0 arm64 arm` (macOS 26.6, build 25G70)

### What issue are you seeing?

Codex Computer Use cannot inspect Apple Mail on macOS. Calling `get_app_state({ app: "Mail" })` hangs for over 60 seconds without returning an accessibility tree or screenshot. The request does not reach any message composition or sending action.

The failure is reproducible after manually quitting and relaunching Mail. Immediately after relaunch, Mail is idle (0% CPU). A single read-only Computer Use inspection causes Mail to climb to roughly 77% CPU and log a rapid repeated sequence of:

```text
Mail: WebProcessPool::i

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
gh issue comment 36707 --repo openai/codex --body-file outbound/drafts/2026-08-03/openai-codex-36707.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
