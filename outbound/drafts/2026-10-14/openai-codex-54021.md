# Draft for openai/codex#54021

- OP: @Robineddk
- Title: macOS Intel: Locked use fails immediately because Computer Use Installer is absent from official x64 package
- Created: 2026-10-14T16:00:05Z
- URL: https://github.com/openai/codex/issues/54021
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Product and version
ChatGPT/Codex desktop 26.1007.71326, build 20398, production channel. Update check reports `up_to_date`.

### Environment
Intel Mac (`x86_64`), macOS 15.8.1 (24H32). Observed October 14, 2026 (Europe/Berlin).

### Steps to reproduce
1. Open Settings > Computer Use.
2. Enable Locked use (German UI: Gesperrte Nutzung).

### Actual behavior
Immediately fails with “Gesperrte Nutzung konnte nicht aktualisiert werden” (Unable to update Locked use). No administrator or Touch ID prompt appears. Restarting the app does not help.

### Expected behavior
Install the required authorization component and enable the feature on supported configurations, or clearly explain that the feature is unavailable.

### Diagnostic findings
- `codesign --verify --deep --strict /Applications/Ch

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
gh issue comment 54021 --repo openai/codex --body-file outbound/drafts/2026-10-14/openai-codex-54021.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
