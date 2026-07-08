# Draft for openai/codex#26185

- OP: @jimmycarp966
- Title: Computer Use sometimes needs to be re-added and macOS permissions do not seem to persist reliably
- Created: 2026-06-03T15:58:24Z
- URL: https://github.com/openai/codex/issues/26185
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### Description

Computer Use does not seem to remain reliably available across Codex sessions/restarts, and macOS permissions for screen capture/accessibility also seem to become unavailable or require re-granting.

When I start using Codex again and mention `@Computadora` / `computer-use@openai-bundled`, the agent sometimes has to check whether the tool is available. In one case it only became usable after the agent said that Computer Use “now appeared”.

### Example from a Codex thread

Thread id: `019e7b8c-7f62-70f2-a1da-a1cc01b17811`

I asked:

`Entra a whatsapp y fijate el chat de lucas por favor [@Computadora](plugin://computer-use@openai-bundled)`

The agent replied:

`Primero verifico si ya quedó activado como herramienta usable en este turno; si no, te pido/activo la instalación 

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
gh issue comment 26185 --repo openai/codex --body-file outbound/drafts/2026-06-04/openai-codex-26185.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
