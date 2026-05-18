# Draft for openai/codex#22927

- OP: @Scubasteve417
- Title: Codex Desktop macOS: Computer Use always fails with "runtime app is missing" despite valid 1.0.791 runtime install
- Created: 2026-05-15T23:38:03Z
- URL: https://github.com/openai/codex/issues/22927
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

computer-use@openai-bundled 1.0.791

### What subscription do you have?

Pro

### What platform is your computer?

macOS (Apple Silicon)

### What issue are you seeing?

Computer Use fails at runtime in every thread and on every app target, even after reinstalling the plugin and restarting Codex multiple times.

Both MCP calls fail with the same message:

list_apps -> Computer Use could not start because its runtime app is missing.
get_app_state("Calculator") -> same error
Important: this is not the direct @<app> routing regression. Even explicit @Computer calls fail.

### What steps can reproduce the bug?

Open Codex Desktop on macOS.
Ensure computer-use@openai-bundled is installed/enabled.
In chat, run any Comp

---

## Draft comment

<!--
HUMAN REVIEW REQUIRED. Write a personalized diagnostic below.

Rules:
- PRIMARY CTA: Lead with the $19 Quick Read (one-line diagnostic).
- DO NOT lead with high-ticket ($499/$1500) offers on cold issues.
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
gh issue comment 22927 --repo openai/codex --body-file outbound/drafts/2026-05-18/openai-codex-22927.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
