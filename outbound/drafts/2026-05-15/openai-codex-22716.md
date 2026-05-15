# Draft for openai/codex#22716

- OP: @Absorber97
- Title: Codex App: @ plugin picker stuck on 'Loading plugins...' after latest update
- Created: 2026-05-14T22:56:09Z
- URL: https://github.com/openai/codex/issues/22716
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.513.20950 (build 2816)

### What subscription do you have?

Unknown from local diagnostics

### What platform is your computer?

Darwin 25.4.0 arm64 arm
macOS 26.4.1 (25E253)

### What issue are you seeing?

In the Codex App composer, typing `@` no longer shows or searches plugins. The picker opens, shows:

```text
Plugins
Loading plugins...

Files
Type to search for files
```

Then the plugin area disappears / remains unusable. Plugin mentions that used to resolve before the latest app update no longer resolve from the composer.

Feedback ID from the issue URL: `019e26ff-c8e3-7403-8f06-2ec3fc4da32a`

### What steps can reproduce the bug?

1. Open Codex App on macOS.
2. Open any thread/composer.
3. Type `@` in

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
gh issue comment 22716 --repo openai/codex --body-file outbound/drafts/2026-05-15/openai-codex-22716.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
