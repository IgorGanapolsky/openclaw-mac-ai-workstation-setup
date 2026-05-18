# Draft for openai/codex#19932

- OP: @kwj903
- Title: Intel macOS: Computer Use unavailable because computer-use bundled plugin is missing
- Created: 2026-04-28T05:39:55Z
- URL: https://github.com/openai/codex/issues/19932
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.422.30944

### What subscription do you have?

ChatGPT Plus

### What platform is your computer?

MacBook Pro 16-inch 2019 Intel, x86_64

### What issue are you seeing?

The Computer Use feature is unavailable in Codex Desktop on my Intel Mac.

In Settings > Computer Use, the app shows that the Computer Use plugin cannot be used. There is no install button or way to enable it.

I checked the bundled plugins directory:

```bash
ls -la /Applications/Codex.app/Contents/Resources/plugins/openai-bundled/plugins/
find /Applications/Codex.app -iname '*computer*' -print | head -50
```

The bundled plugins directory only contains:

```text
browser-use
latex-tectonic
```

There is no `computer-use` folder under:

```tex

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
gh issue comment 19932 --repo openai/codex --body-file outbound/drafts/2026-05-18/openai-codex-19932.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
