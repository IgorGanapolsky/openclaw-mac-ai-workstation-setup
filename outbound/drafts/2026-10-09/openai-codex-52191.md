# Draft for openai/codex#52191

- OP: @4vmz9jjw2t-create
- Title: macOS: Computer Use plugin missing from the directory + "Failed to spawn managed Computer Use service" (ChatGPT/Codex 26.1002.52244)
- Created: 2026-10-08T17:40:36Z
- URL: https://github.com/openai/codex/issues/52191
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

Surface : ChatGPT desktop app (vue Codex)
App : com.openai.codex v26.1002.52244
OS : macOS Tahoe 26.6.2 (25G83), Intel i7 (MacBook Pro 16" 2019)
Compte : personnel Plus (Portugal)
Problème : “Computer Use” n’apparaît pas dans Plugins > Computer Use (ni sur https://chatgpt.com/plugins). Dans Réglages > Computer use, pas de Any App (seulement Chrome/Excel).
Logs : Failed to spawn managed Computer Use service / Failed to reconcile managed Computer Use service (horodatage ~2026-10-08 16:10Z et 17:01Z)
Étapes : installation depuis https://chatgpt.com/download/, réinstallation, redémarrage macOS/app, attente > 6h
Résultat attendu : plugin “Computer Use” visible + option Any App + démarrage du service
Résultat obtenu : plugin absent + échec spawn
Logs pertinents : (coller 30–50 lignes depuis ~/Li

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
gh issue comment 52191 --repo openai/codex --body-file outbound/drafts/2026-10-09/openai-codex-52191.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
