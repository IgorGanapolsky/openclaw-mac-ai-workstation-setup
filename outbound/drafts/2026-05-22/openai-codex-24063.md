# Draft for openai/codex#24063

- OP: @Onlydreams
- Title: Codex-latest-x64.dmg ships with invalid code signatures on Intel macOS
- Created: 2026-05-22T11:02:43Z
- URL: https://github.com/openai/codex/issues/24063
- Suggested landing page: `troubleshooting.html`

## Bug report excerpt (first 800 chars)

### What version of the Codex App are you using (From “About Codex” dialog)?

26.519.31651 (CFBundleVersion 3017)

### What subscription do you have?

Not relevant / not included

### What platform is your computer?

```text
Darwin 24.6.0 x86_64 i386
```

Hardware: Intel MacBook Pro, Intel Core i7.

### What issue are you seeing?

The official Intel macOS download appears to ship a `Codex.app` with invalid code signatures for the x86_64 Mach-O binaries.

Download URL used:

```text
https://persistent.oaistatic.com/codex-app-prod/Codex-latest-x64.dmg
```

The downloaded DMG itself verifies successfully and has the expected origin metadata:

```text
hdiutil: verify: checksum of "/Users/lancet/Downloads/Codex-latest-x64.dmg" is VALID
sha256: 474ec334f7814a7d893580d3d5a5736ef12a1320296e4018b1e

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
gh issue comment 24063 --repo openai/codex --body-file outbound/drafts/2026-05-22/openai-codex-24063.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
