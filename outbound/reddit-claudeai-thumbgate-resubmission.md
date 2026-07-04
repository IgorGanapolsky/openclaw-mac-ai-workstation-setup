# r/ClaudeAI resubmission — ThumbGate showcase (compliant rewrite)

**Status:** Ready to resubmit 1 hour after the 2026-07-04 removal.
**Pre-flight:** All 7 compliance items pass (see `.claude/skills/reddit-showcase-compliance/SKILL.md`).
**ACTION REQUIRED before posting:** Replace the one `[EDIT-ME]` block below with the
true development detail — do not post with fabricated specifics.

---

**Title:**
I built ThumbGate with Claude Code — an open-source gate that blocks dangerous AI-agent tool calls before they execute

**Body:**

I built ThumbGate, an open-source CLI that intercepts AI-agent tool calls (shell commands, file writes, API calls) and blocks anything that doesn't match your allowlist rules — before execution, not in a post-hoc audit log.

**Built with Claude Code.** [EDIT-ME: 2-3 truthful sentences on how Claude Code helped — e.g. which adapters/tests/schema it wrote, what the workflow looked like, one thing it got wrong that you had to fix. The modbot requires this and readers can smell a generic answer.]

**What it does:**

- Deny-by-default: a tool call executes only if it matches a rule you wrote
- Rules are code (versioned, reviewable, testable) — not prompt suggestions
- Adapters for Claude Code, Codex, and Gemini agents
- Designed for the multi-agent case: two agents can be individually compliant while their combined actions aren't — per-call gating catches what per-agent prompting can't

**Free to try:** `npm install -g thumbgate` — the core CLI and all adapters are free and open source: https://github.com/IgorGanapolsky/ThumbGate (paid team features exist, but everything above is the free tier).

Feedback welcome, especially from anyone running multiple agents in parallel — what would you want a rule language to express?

---

**Compliance check performed:**
- [x] Says "I built"
- [x] Says "Built with Claude Code" + how (pending EDIT-ME truth-fill)
- [x] Clear description
- [x] Free to try + how
- [x] Marketing language minimal
- [x] No UTM params (verified: no `utm_`, `ref=`, `referral` anywhere)
- [x] No affiliate links / job content
