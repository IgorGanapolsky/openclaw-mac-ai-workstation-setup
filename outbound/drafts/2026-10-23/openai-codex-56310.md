# Draft for openai/codex#56310

- OP: @honobowang-svg
- Title: macOS Computer Use: VirtualBuddy screenshots/AX tree available but coordinate clicks fail with -10005 noWindowsAvailable
- Created: 2026-10-23T00:40:44Z
- URL: https://github.com/openai/codex/issues/56310
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Environment
Read from installed application metadata on 2026-10-23:
- macOS 26.6.2, arm64
- ChatGPT desktop / Codex bundle com.openai.codex: 26.1016.51333 (21161)
- Codex Computer Use helper com.openai.sky.CUAService: 26.1015.1001540 (1001540)
- VirtualBuddy: 2.1 (325)
- Local desktop task using the supported cua_repl interface.

## Observed behavior
During prior attempts on 2026-10-22 and 2026-10-23 (Asia/Shanghai):
1. An existing macOS VM is running in a normal VirtualBuddy foreground window and has been manually unlocked.
2. The accessibility tree identifies the VM window and its title and exposes the Raise secondary action.
3. Reading the screenshot sometimes returns a legible 1936 x 1272 image; at other times it returns a small/distorted thumbnail around 216 x 230.
4. Raising the w

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
gh issue comment 56310 --repo openai/codex --body-file outbound/drafts/2026-10-23/openai-codex-56310.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
