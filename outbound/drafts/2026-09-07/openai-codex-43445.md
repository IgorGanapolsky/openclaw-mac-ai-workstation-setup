# Draft for openai/codex#43445

- OP: @bhalilov
- Title: macOS: Computer Use helper briefly wakes external displays every ~10 minutes via `Codex Computer Use interaction` assertion
- Created: 2026-09-07T11:59:19Z
- URL: https://github.com/openai/codex/issues/43445
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## What version of the Codex app are you running?

ChatGPT / Codex for Mac `26.901.31953` (build `7868`).

Computer Use helper (`~/.codex/computer-use/Codex Computer Use.app`):
- `CFBundleShortVersionString` / `CFBundleVersion`: `26.831.1000926`
- `SkyComputerUseService` binary mtime: **2026-09-01 14:37 EDT** (updated then; problem began ~2026-09-02–03)

Also present: bundled plugin cache `unified-computer-use` `26.901.31953`. Config enables `[mcp_servers.computer-use]`, `[plugins."computer-use@openai-bundled"]`, and `[plugins."unified-computer-use@openai-bundled"]`.

## What subscription do you have?

ChatGPT paid (Pro-tier usage on this machine).

## What platform is your computer?

```text
Darwin arm64
macOS 26.6.2 (25G83)
Mac mini (Apple silicon)
External displays; `pmset` displaysleep

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
gh issue comment 43445 --repo openai/codex --body-file outbound/drafts/2026-09-07/openai-codex-43445.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
