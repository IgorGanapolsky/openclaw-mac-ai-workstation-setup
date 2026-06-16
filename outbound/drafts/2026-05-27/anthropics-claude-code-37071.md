# Draft for anthropics/claude-code#37071

- OP: @shay2911
- Title: Channels 'not currently available' on Teams plan despite admin enablement
- Created: 2026-03-21T11:47:08Z
- URL: https://github.com/anthropics/claude-code/issues/37071
- Suggested landing page: `claude-code-channels-not-working.html`

## Bug report excerpt (first 800 chars)

**Same issue as #36503 — channels admin-enabled but "not currently available"**

**Environment:**
- Claude Code v2.1.81, macOS (darwin)
- Teams plan, org: Brandlight
- Auth: Claude Team Account (OAuth, not API key/Console)
- Terminal: Warp

**What I did:**
1. Enabled Channels in admin UI at claude.ai → Admin Settings → Claude Code
2. Installed telegram plugin: `/plugin install telegram@claude-plugins-official`
3. Ran: `claude --channels plugin:telegram@claude-plugins-official`

**What happened:**
```
--channels ignored (plugin:telegram@claude-plugins-official)
Channels are not currently available
```

**Diagnostic findings:**
- No `managed-settings*.json` files exist in `~/.claude/` — the server never delivers them
- Local `settings.json` has no `channelsEnabled` key (and setting it locall

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
gh issue comment 37071 --repo anthropics/claude-code --body-file outbound/drafts/2026-05-27/anthropics-claude-code-37071.md
```

After posting, append a row to `lead-log.md` with the issue URL, the OP,
the symptom mapping, and the resulting comment URL.
