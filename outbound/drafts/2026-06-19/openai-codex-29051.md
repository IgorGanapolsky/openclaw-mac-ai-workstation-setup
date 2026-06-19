# Draft for openai/codex#29051

- OP: @MaxxxDong
- Title: Record & Replay visible and installed, but event stream says not enabled for this user
- Created: 2026-06-19T06:41:16Z
- URL: https://github.com/openai/codex/issues/29051
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

# Record & Replay visible and installed, but event stream fails with "not enabled for this user"

## Summary

Record & Replay is visible in the Codex app and the bundled plugin is installed, but starting or checking a recording fails immediately with:

```text
Computer Use server error -10005: Record & Replay is not enabled for this user.
```

This is a personal ChatGPT account, not a managed company / enterprise account. I am located in Japan, which should not be part of the documented initial exclusion regions for Record & Replay.

## Environment

- Account type: personal ChatGPT account, not organization-managed
- Region / network egress checked with `ipinfo.io`: Japan / Tokyo (`country=JP`, `timezone=Asia/Tokyo`)
- Codex app: `26.616.31447`
- Codex app build: `4133`
- Record & Replay p

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
gh issue comment 29051 --repo openai/codex --body-file outbound/drafts/2026-06-19/openai-codex-29051.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
