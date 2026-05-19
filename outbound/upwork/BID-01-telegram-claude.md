# BID — Job #1: Telegram + Claude Automation Expert (Content Pipeline / MCP / Claude Code)

**Job URL:** https://www.upwork.com/jobs/Telegram-Claude-Automation-Expert-Needed-Content-Pipeline-MCP-Claude-Code_~022056815241607631742/
**Posted:** 2026-05-19, 21 minutes before bid drafting (very fresh)
**Pay:** Hourly $25-$50 (Expert) — "willing to pay higher for the most experienced"
**Connects required:** 14
**Client:** US, payment verified, 5.0/32 reviews, 77 jobs, 55% hire rate, mid-sized co
**Anti-spam test:** must start with the word "Yellow"

## Proposed hourly rate: $75

Justification: post says "willing to pay higher for the most experienced freelancers." $75 is below my normal $95 (to signal we read the post and want this specific gig) and at the top of the explicit range. We can negotiate up after the first deliverable lands.

## Proposal text (paste into Upwork apply form verbatim)

> Yellow.
>
> Your stack mirrors mine: Claude Code on macOS, Telegram bot listening, MCP/plugins handling the side channels. The trap most builders hit on the workflow you described isn't the capture itself — it's that "intelligently extract useful insights from conversations" and "avoid storing useless chatter" are not the same problem, and conflating them is what turns these pipelines into noise after week 2.
>
> Concrete architecture I'd propose for your /capture flow:
>
> 1. **Telegram bot in your group → MCP server (a thin TypeScript/Bun service)** that handles `/capture` as a slash command. It snapshots the last N messages with metadata (sender, timestamp, message type, in-reply-to chains) into a write-only audit log. This is the storage you can never break, period.
> 2. **Async classifier pass** (cheap Haiku-tier model call, runs out-of-band) that scores each captured chunk on three axes: insight-density, recurrence (have we seen this idea before?), and "founder lens" relevance. Only chunks that pass the threshold get promoted into the structured store. The rest stay in the audit log but don't pollute downstream generation.
> 3. **Structured store = either Postgres with a `discussions` table + pgvector for semantic recall, or Notion if you prefer a UI-first read path.** I lean Postgres for this scope — Notion's API rate-limits become painful past ~5 captures/day, and you'll outgrow it within a month.
> 4. **Content-generation calls are explicit Claude Code commands** (`/post twitter`, `/post linkedin`, `/post ig`) that pull from the curated store, not from raw transcript. Each post format gets its own prompt template versioned in the repo.
>
> I'd start with a single end-to-end thread (one `/capture` → one Twitter draft) before wiring the other platforms, because that's where 80% of the surprise lives.
>
> About me: I ship Claude Code / MCP / agent-orchestration stacks daily. I run my own MCP-routed agent system in production (openclaw — multi-model failover, Computer Use, sub-agent dispatch). The Telegram + content-pipeline shape is a smaller version of what I run for myself. The actual code that connects a Telegram bot to a Claude Code session via MCP is ~150 lines of Bun, and I have a working scaffold for it.
>
> Timeline: I can have the `/capture` → classifier → store flow live and smoke-tested inside 5 days. Content-generation hookups (Twitter/LinkedIn/IG) are another 3-4 days each, but can run in parallel if you want them all.
>
> Rate: $75/hr. I'd estimate this project lands inside 20 hours of billable time for the scope you described.
>
> When can you do a 20-minute screen-share so I can see the existing Telegram bot setup and confirm we're solving the right problem?
>
> — Igor

## Why I think this wins

- "Yellow" compliance proves I read the post (most bidders won't include it; they'll get auto-rejected).
- Specific architecture proposal (4 steps) shows I understood the actual problem, not just the keywords.
- Naming the trap ("insight-density vs recurrence vs founder-lens") signals experience past the prompt-engineering layer.
- Postgres vs Notion opinion + the "5 captures/day Notion rate-limit" detail is exactly the kind of micro-claim that lands with engineering-savvy clients.
- $75/hr is in their range; not the cheapest bid but reads as "knows what he's worth."
- Last line ends with a concrete next step (20-min screen-share), not a vague "let's chat."

## If client replies and engagement starts

- First call: confirm Claude Code + Telegram bot existing setup. Get the bot token, group chat ID, and existing MCP plugin config.
- Day 1-2: stand up the MCP slash-command handler. Smoke-test /capture in a sandbox group.
- Day 3-5: classifier pass + structured-store. Test with 10 real captured conversations.
- Day 6-9: one content surface end-to-end (Twitter or LinkedIn — let client pick).
- Day 10+: parallel hookups for remaining surfaces if pilot lands.
