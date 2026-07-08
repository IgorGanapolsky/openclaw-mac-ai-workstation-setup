# Draft for anthropics/claude-code#826

- OP: @ocontant
- Title: [BUG] Console scrolling top of history when claude add text to the console
- Created: 2025-04-19T18:45:58Z
- URL: https://github.com/anthropics/claude-code/issues/826
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

## Environment
- Platform (select one):
  - [ ] Anthropic API
  - [ ] AWS Bedrock
  - [ ] Google Vertex AI
  - [ X ] Other:  Claude Code MacOs Shell
- Claude CLI version: 0.2.74 (Claude Code)
- Operating System: MacOS 15.3.2 (24D81)
- Terminal:  iterm2

## Bug Description
Once we reach a certain level of volume of text history in the console, every time we tape a new character in the prompt or whenever the bot add a character in its console, the terminal scroll back and forth to the top and back to current level.


## Steps to Reproduce
1. Significantly long history session
2. Reach something like 5-6 pages long scroll lenght

## Expected Behavior
The interface should never scroll up to the to for any reason. It should always follow current position. 
When a user is manipulating the scroll

---

## Draft comment

<!--
HUMAN REVIEW REQUIRED. Write a personalized diagnostic below.

Rules:
- DO NOT fabricate diagnostic commands, log labels, or internal behaviors
  you cannot verify in the actual source repo or the OP's bug report.
- Lead with one specific detail from the OP's report (proves you read it).
- Name one verified check or workaround.
- Link to https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/claude-code-channels-not-working.html
  with UTM tag ?utm_source=channels-issue&utm_medium=funnel&utm_campaign=qr-2026.
- End with the $19 quick-read CTA: https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u?utm_source=channels-issue&utm_medium=funnel&utm_campaign=qr-2026
  and a refund clause.
- Cap length at ~2000 chars.
-->

(write here)

---

## Post command (when reviewed and edited)

```
gh issue comment 826 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-29/anthropics-claude-code-826.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
