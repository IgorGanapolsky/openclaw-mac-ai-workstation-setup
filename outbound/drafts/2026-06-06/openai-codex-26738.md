# Draft for openai/codex#26738

- OP: @chenyh200807
- Title: Codex Desktop Computer Use can trigger memory runaway to 172GB on macOS
- Created: 2026-06-06T04:31:04Z
- URL: https://github.com/openai/codex/issues/26738
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

Codex Desktop on macOS can enter a severe memory runaway state when a Desktop thread uses or restores Computer Use. In my latest incident, macOS Force Quit Applications reported **Codex at 172.68 GB**. The machine became effectively unusable and previously similar incidents caused system crashes/restarts.

This is reproducible enough that I have stopped using the affected Desktop threads. The strongest trigger is resuming a long-running Codex Desktop thread that improves a BI web page and invokes Computer Use. When I ask that thread to continue, Codex almost immediately freezes the machine or drives memory into a system-level exhaustion state.

## Environment

- Hardware: Apple Silicon MacBook Pro, 64 GB RAM
- macOS: 26.5.1, build 25F80
- Architecture: arm64
- Codex Desktop app

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
gh issue comment 26738 --repo openai/codex --body-file outbound/drafts/2026-06-06/openai-codex-26738.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
