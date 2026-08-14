# Draft for openai/codex#38508

- OP: @Poole33
- Title: Computer Use loses scrolling/input control across macOS apps
- Created: 2026-08-14T06:39:49Z
- URL: https://github.com/openai/codex/issues/38508
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.810.41047

### What subscription do you have?

Plus

### What platform is your computer?

macOS 26.2 (Build 25C56) Apple Silicon

### What issue are you seeing?

1. Launch the Codex desktop app and enable Computer Use.
2. Open any application with scrollable content.
3. Confirm that Computer Use can discover the application window and read its UI/accessibility tree.
4. Ask Computer Use to scroll down one page.
5. Observe that the scroll action fails with `noWindowsAvailable (-10005)` or times out.
6. Remove/reconfigure Computer Use and repeat the test.
7. The action may work briefly, then fail again after several interactions.


### What steps can reproduce the bug?

| Target | What still works | What fails |


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
gh issue comment 38508 --repo openai/codex --body-file outbound/drafts/2026-08-14/openai-codex-38508.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
