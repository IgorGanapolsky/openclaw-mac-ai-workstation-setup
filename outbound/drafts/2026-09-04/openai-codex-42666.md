# Draft for openai/codex#42666

- OP: @shallitbeso
- Title: macOS: Computer Use Accessibility permission crashes NVIDIA Nsight Systems during Timeline interaction
- Created: 2026-09-04T03:23:20Z
- URL: https://github.com/openai/codex/issues/42666
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Summary

Enabling the macOS Accessibility permission for **Codex Computer Use** causes NVIDIA Nsight Systems to crash when interacting with its Qt Timeline. Disabling only that Accessibility entry makes the crash disappear.

### Environment

- macOS 26.6.2 (25G83), Apple Silicon M5 Pro
- ChatGPT/Codex desktop app 26.901.20858 (build 7658)
- Bundled CLI: codex-cli 0.153.0-alpha.5
- NVIDIA Nsight Systems 2026.2.1 (bundled Qt 6.8.1)
- Same .nsys-rep and same Nsight version in all tests

### Reproduction

1. Enable **System Settings > Privacy & Security > Accessibility > Codex Computer Use**.
2. Open an .nsys-rep in Nsight Systems.
3. Expand or collapse the Python process row in Timeline.
4. Nsight exits/crashes, often immediately.
5. Disable only **Codex Computer Use** in Accessibility an

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
gh issue comment 42666 --repo openai/codex --body-file outbound/drafts/2026-09-04/openai-codex-42666.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
