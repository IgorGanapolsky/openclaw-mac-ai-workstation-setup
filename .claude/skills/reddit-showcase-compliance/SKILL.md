---
name: reddit-showcase-compliance
description: MANDATORY pre-flight checklist before drafting or posting ANY Reddit showcase/promotional post (r/ClaudeAI, r/OpenAI, or similar). Created after the 2026-07-04 r/ClaudeAI modbot removal. Run this check on every Reddit draft.
---

# Reddit Showcase Compliance

## Why this exists
On 2026-07-04 the r/ClaudeAI modbot removed a ThumbGate showcase post for:
- criterion (f): UTM-tracked promotional link ("suggests a marketing campaign")
- criterion (e): borderline promotional framing
- criterion (b): missing "built with Claude/Claude Code" statement

## The checklist — EVERY item required before posting
1. **"I built it"** — post explicitly says the author built the project.
2. **"Built with Claude / Claude Code"** — explicit statement, plus HOW Claude
   helped in the process (specific, truthful — ask the CEO for the real detail
   if unknown; NEVER fabricate development history).
3. **What it does** — clear description of the product.
4. **Free to try** — state what's free and how to try it (paid tiers OK to
   mention, but the free path must be shown).
5. **Minimal marketing language** — no superlatives, no urgency, no pricing
   pitch in the body. Write like an engineer showing work.
6. **STRIP ALL UTM PARAMETERS** — `grep -E 'utm_|ref=|referral'` on the draft
   must return nothing. Clean project links only.
7. **No affiliate/referral links, no job-seeking content.**

## Process
- Run every Reddit draft through items 1-7 and show the checklist result
  before posting.
- If a post is removed: fix per modbot feedback, wait the stated cooldown
  (r/ClaudeAI: 1 hour), resubmit ONCE. Never argue with mods in-thread;
  use Modmail if the removal looks wrong.
- Log every removal + lesson to `lead-log.md`.
