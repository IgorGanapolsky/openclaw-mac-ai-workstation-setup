# Draft for openai/codex#26592

- OP: @1h20496138-source
- Title: Codex App on macOS repeatedly prompts to reinstall bundled computer-use plugin after every restart
- Created: 2026-06-05T11:18:14Z
- URL: https://github.com/openai/codex/issues/26592
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.602.30954

### What subscription do you have?

ChatGPT Plus

### What platform is your computer?

arm64 arm Darwin 24.6.0

### What issue are you seeing?

On macOS, the bundled `computer-use` plugin appears to require reinstallation after every full restart of Codex App.

The plugin payload itself was still present on disk, so this did not look like a normal uninstall or download failure. The issue appeared to be caused by missing persistent plugin cache and missing enabled-state registration.

Observed evidence:

- The Computer Use app bundle still existed:
  `/Users/<redacted>/.codex/computer-use/Codex Computer Use.app`

- The persistent bundled plugin cache for `computer-use` was missing under:
  `~/.codex/

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
gh issue comment 26592 --repo openai/codex --body-file outbound/drafts/2026-06-05/openai-codex-26592.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
