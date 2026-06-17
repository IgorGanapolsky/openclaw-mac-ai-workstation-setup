# Draft for openai/codex#28545

- OP: @mayunlei
- Title: macOS: Codex Desktop triggers sustained syspolicyd/trustd CPU spikes tied to Computer Use
- Created: 2026-06-16T15:02:40Z
- URL: https://github.com/openai/codex/issues/28545
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## High CPU State

On June 13, 2026, Codex Desktop triggered sustained high CPU usage on macOS 14.7.1 (23H222) on Apple Silicon. During the first capture, `syspolicyd` reached `136.3% CPU` and `trustd` reached `62.4% CPU`. After Codex was closed, the machine returned to normal. After Codex was reopened, the problem reproduced again within seconds, and the second capture showed `syspolicyd` at `180.7% CPU` and `trustd` at `61.2% CPU`.

## Evidence

- In a 15-minute capture window, Codex logged `1031` `TCCAccessRequest() IPC` events.
- In the same window, `trustd` logged `671` warnings that the `com.apple.security.application-groups` entitlement for `2DC432GLL2.com.openai.sky.CUAService` was ignored because of an invalid signature or incorrect provisioning profile.
- In the same window, `sys

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
gh issue comment 28545 --repo openai/codex --body-file outbound/drafts/2026-06-17/openai-codex-28545.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
