# Draft for openai/codex#57881

- OP: @GGBondBlueWhale
- Title: [macOS][Computer Use] SkyComputerUseService accessibility queries repeatedly crash Wireshark (Qt/libqcocoa EXC_BAD_ACCESS)
- Created: 2026-10-29T01:59:59Z
- URL: https://github.com/openai/codex/issues/57881
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

ChatGPT desktop app, Powered by Codex & OWL: `26.1023.51421` (released October 27, 2026)

### What subscription do you have?

ChatGPT Pro

### What platform is your computer?

- macOS Golden Gate `27.2` (`26B123`)
- Apple Silicon, 16-inch MacBook Pro (`Mac17,6`)
- Apple M5 Max
- 128 GB unified memory
- ChatGPT Computer Use enabled, with multiple Computer Use tasks shown as **Running**

Affected third-party application:

- Wireshark `4.6.9` (`org.wireshark.Wireshark`)
- Native ARM64 build
- Bundled Qt `6.9.3`

### What issue are you seeing?

While ChatGPT/Codex Computer Use tasks were active, Wireshark repeatedly quit unexpectedly during ordinary UI interaction.

Three separate macOS crash reports were captured wi

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
gh issue comment 57881 --repo openai/codex --body-file outbound/drafts/2026-10-29/openai-codex-57881.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
