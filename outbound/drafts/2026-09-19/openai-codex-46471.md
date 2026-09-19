# Draft for openai/codex#46471

- OP: @rejacobson
- Title: [macOS] Computer Use cannot target Godot window: noWindowsAvailable / timeoutReached despite live CoreGraphics window
- Created: 2026-09-18T18:55:31Z
- URL: https://github.com/openai/codex/issues/46471
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

## Summary

On macOS, Codex Computer Use cannot reliably target a visible Godot 4.6.3 editor window.

Initially, Computer Use could acquire Godot, read its accessibility tree, capture a current screenshot, and interact with a native menu. However, a coordinate click on the visible **Run** button immediately failed with:

```text
Computer Use server error -10005: noWindowsAvailable
```

Manual clicking of the same Run button launched the project successfully.

Later, Computer Use stopped being able to reacquire Godot at all:

```text
Computer Use server error -10005: timeoutReached
```

This persisted even though CoreGraphics showed a live, titled Godot editor window owned by the editor process, and persisted after restarting only `SkyComputerUseService`.

A macOS Accessibility workaround t

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
gh issue comment 46471 --repo openai/codex --body-file outbound/drafts/2026-09-19/openai-codex-46471.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
