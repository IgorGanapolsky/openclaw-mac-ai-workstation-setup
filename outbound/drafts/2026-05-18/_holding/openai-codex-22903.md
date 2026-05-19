# Draft for openai/codex#22903

- OP: @johnsilvavlogs
- Title: Codex Desktop regression: direct @Mac app mentions no longer route through Computer Use / Any App
- Created: 2026-05-15T21:07:04Z
- URL: https://github.com/openai/codex/issues/22903
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From "About Codex" dialog)?

Codex Desktop `26.513.20950` / build `2816`

Additional local versions:

```text
codex-cli 0.130.0
computer-use@openai-bundled 1.0.791
Codex bundle id: com.openai.codex
```

### What subscription do you have?

Pro / paid account.

### What platform is your computer?

```text
macOS 26.3 (25D125)
arm64 Apple Silicon
```

### What issue are you seeing?

Direct `@<Mac app>` mentions no longer work as an invocation path for using local Mac apps through Codex Desktop.

Current workaround:

1. I can explicitly mention `@Computer` / Computer Use.
2. Then I can write the app name in natural language, for example "use Computer to access <app name>".
3. Codex can then use Computer Use as the tool surface.

But the intended 

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
- End with the $19 quick-read CTA: https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 22903 --repo openai/codex --body-file outbound/drafts/2026-05-18/openai-codex-22903.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
