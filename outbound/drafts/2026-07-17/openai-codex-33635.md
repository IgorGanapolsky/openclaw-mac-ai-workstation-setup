# Draft for openai/codex#33635

- OP: @Kh05ifr4nD
- Title: macOS Computer Use ignores CODEX_HOME and recreates ~/.codex/config.toml
- Created: 2026-07-16T16:25:45Z
- URL: https://github.com/openai/codex/issues/33635
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.707.91948

### What subscription do you have?

Pro 5x

### What platform is your computer?

Darwin 25.5.0 arm64 arm

### What issue are you seeing?

`SkyComputerUseService` recreates `~/.codex/config.toml` despite inheriting
`CODEX_HOME=$HOME/.config/codex`. The file contains only its `turn-ended`
notify hook, creating two conflicting configuration roots.

### What steps can reproduce the bug?

1. Set `CODEX_HOME=$HOME/.config/codex`.
2. Ensure `$CODEX_HOME/config.toml` exists and `~/.codex` does not.
3. Start `SkyComputerUseService`.
4. Observe that `~/.codex/config.toml` is recreated.

### What is the expected behavior?

Computer Use must use `$CODEX_HOME/config.toml` and must not recreate `~/.codex`.

### A

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
gh issue comment 33635 --repo openai/codex --body-file outbound/drafts/2026-07-17/openai-codex-33635.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
