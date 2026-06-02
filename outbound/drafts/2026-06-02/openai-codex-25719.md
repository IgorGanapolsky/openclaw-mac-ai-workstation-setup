# Draft for openai/codex#25719

- OP: @energissimo-mg
- Title: Codex Desktop for macOS repeatedly triggers `syspolicyd` / `trustd` CPU and memory runaway
- Created: 2026-06-01T23:59:29Z
- URL: https://github.com/openai/codex/issues/25719
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

Codex Desktop: 26.527.60818 Codex build: 3437

### What subscription do you have?

plus

### What platform is your computer?

Darwin 25.5.0 arm64 arm

### What issue are you seeing?

Codex Desktop for macOS triggers a persistent macOS Gatekeeper/SystemPolicy loop after launch. With Codex closed, the system is quiet. As soon as Codex Desktop is opened, `/usr/libexec/syspolicyd` rises to very high CPU usage and grows to multiple GB of RAM. This happens even after replacing Codex with a freshly downloaded DMG build.

This appears related to Codex Desktop launching or validating its bundled/helper components, including `Codex Computer Use`, but the problem also reproduces after user-facing Browser/hotkey/notify setti

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
gh issue comment 25719 --repo openai/codex --body-file outbound/drafts/2026-06-02/openai-codex-25719.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
