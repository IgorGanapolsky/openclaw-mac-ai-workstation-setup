# Draft for openai/codex#46799

- OP: @hotmob
- Title: macOS memory warning: Codex exceeds 14 GB during PowerPoint Computer Use, with UI timeouts
- Created: 2026-09-20T11:45:51Z
- URL: https://github.com/openai/codex/issues/46799
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.915.31945 (build 9922), read from the installed desktop application's bundle metadata. Bundled Codex: `0.155.0-alpha.9.2`.

### What subscription do you have?

Not recorded in this diagnostic report.

### What platform is your computer?

- macOS 27.0 (26A428), Apple Silicon
- `uname -mprs`: `Darwin 27.0.0 arm64 arm`
- Physical memory: 18 GiB
- Microsoft PowerPoint: 16.106.3

### What issue are you seeing?

While Codex was automatically operating Microsoft PowerPoint through Computer Use, my Mac became severely sluggish. **macOS itself opened a system memory warning asking me to close applications. Codex was listed first, with more than 14 GB of memory usage.**

The primary symptom is the macOS memory warning a

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
gh issue comment 46799 --repo openai/codex --body-file outbound/drafts/2026-09-20/openai-codex-46799.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
