# Draft for openai/codex#57301

- OP: @DickJohnson1020
- Title: Computer Use: thinkorswim main-window input fails and foreground typing duplicates characters on macOS
- Created: 2026-10-26T23:04:34Z
- URL: https://github.com/openai/codex/issues/57301
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

Scope: Native thinkorswim indicator/chart work. No order execution involved.

Versions:
- Desktop app: 26.1021.31345, build 21828, configured production channel reports up to date.
- Computer Use helper: 26.1021.1001631, build 1001631.
- thinkorswim visible build 1994; bundle version 1993.2.3.
- Platform: macOS, Apple Silicon.

Observed failure:
- Screenshots and modal control can work while main-chart coordinate input intermittently reports noWindowsAvailable or times out.
- Main-window accessibility output omits the visible TSLA chart controls.
- Native Computer Use keyboard/paste previously produced no text in thinkorswim search fields; the same operations worked in System Settings.
- A per-chat runtime reset restored mouse clicks temporarily. Failure recurred. Machine and thinkorswim r

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
gh issue comment 57301 --repo openai/codex --body-file outbound/drafts/2026-10-27/openai-codex-57301.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
