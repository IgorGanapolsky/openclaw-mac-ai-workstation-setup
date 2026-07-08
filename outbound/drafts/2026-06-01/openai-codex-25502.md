# Draft for openai/codex#25502

- OP: @Nevery-qiao
- Title: macOS Appshot shows generic "Unable to attach appshot" when Computer Use blocks a disallowed URL after capture
- Created: 2026-06-01T04:06:12Z
- URL: https://github.com/openai/codex/issues/25502
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What happened?

On macOS Codex Desktop, Appshot can fail with the generic user-facing toast:

```text
Unable to attach appshot
```

In the failing case, local diagnostics showed that Appshot had already collected metadata, accessibility text, and a screenshot, then settled as `native_service_failed`.

The more specific underlying reason was that Computer Use stopped after detecting a disallowed URL. The page URL itself is intentionally omitted here because it was a work-related enterprise/admin login page.

This makes the failure look like a native service or permissions problem, even though the actual cause appears to be URL policy enforcement.

### Environment

```text
macOS: 26.3.1
Codex Desktop: 26.527.31326, build 3390
Computer Use helper: com.openai.sky.CUAService 1.0, build 799


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
gh issue comment 25502 --repo openai/codex --body-file outbound/drafts/2026-06-01/openai-codex-25502.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
