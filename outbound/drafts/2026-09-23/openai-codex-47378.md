# Draft for openai/codex#47378

- OP: @maxkorp
- Title: [macOS Computer Use] Tk clicks use stale global pointer despite correct synthetic event coordinates
- Created: 2026-09-22T22:20:28Z
- URL: https://github.com/openai/codex/issues/47378
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using?

Exact desktop build was not captured in the diagnostic session. Tool: `mcp__cua_repl`, plugin: `unified-computer-use`. Observed September 22, 2026.

### What subscription do you have?

Not supplied in this report.

### What platform is your computer?

macOS 26.6.2 (25G83), Apple Silicon.
`uname -mprs`: `Darwin 25.6.0 arm64 arm`
Target runtime: Python 3.12.14, Tk 9.0.4.

### What issue are you seeing?

CUA coordinate clicks fail to switch tabs in a native Tk application. This reproduces in a minimal `ttk.Notebook` app with no DAT Texture Wizard code. The native mouse event has the intended click coordinates, but `[NSEvent mouseLocation]` is elsewhere. Tk routes the click using that global pointer position, delivering it to the root outside t

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
gh issue comment 47378 --repo openai/codex --body-file outbound/drafts/2026-09-23/openai-codex-47378.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
