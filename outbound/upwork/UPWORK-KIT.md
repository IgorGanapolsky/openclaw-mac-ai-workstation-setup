# Upwork Kit — ready-to-fire proposals + profile

**Status:** drafted 2026-05-19 by Claude (CTO). Awaiting Igor (CEO) to paste into Upwork.

**Why this exists:** Cold email has a 5-10% reply rate and 7-30 day close cycle. Upwork has buyers who are *actively searching* with budget approved, signing in 24-72h. We have zero presence there.

**Time to first contract estimate:** 3-10 days if Igor bids 3-5 jobs/day with these proposals. Faster than the cold-email funnel.

---

## Setup checklist (Igor does this, one-time, ~30 min)

1. Go to upwork.com → sign up as a freelancer (or log into existing account).
2. Profile category: **AI Apps & Integration** → primary skills:
   - Claude (Anthropic API)
   - LangChain / LangGraph
   - Agent orchestration
   - Computer Use / browser automation
   - n8n / Make / Zapier
   - Python, TypeScript, Node.js
3. Hourly rate: **start at $95/hr.** Below $95 attracts price-shoppers; above $150 attracts only the top 5% of buyers and you need testimonials first. After your first 3 contracts close cleanly, raise to $125/hr.
4. Set fixed-bid preference: minimum $500 for any fixed-bid project. Below that, switch to hourly.
5. Paste the profile copy below into the "Title" + "Overview" + "Specialized Profile" fields.
6. Add the landing page (`https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html`) as a portfolio link with screenshots of the agent in action.
7. Add a 2-min Loom video of OpenClaw / Computer Use running on the Mac — Upwork's "Video Introduction" field. Profiles with a video win ~2.5x more invitations.

---

## Profile — Title + Overview

### Title
**Claude / Computer Use / Agent-Reliability Engineer — I ship the agent stack you already paid for**

### Overview (paste into "Overview" — Upwork allows ~5,000 chars)

I build and rescue Claude-based agent stacks for teams who already invested in the AI rails and are not seeing the ROI yet.

What I actually do day-to-day:
- **Speed-to-lead agents** for service businesses: form/DM/missed-call → reply in 30s → qualify → book against the existing scheduler. Currently shipping pilots at $499 + $497/mo retainer.
- **Claude Code / Codex / Computer Use onboarding** for engineering teams: get the local dev loop reliable, fix the macOS permission and routing tangles, set up multi-model failover.
- **Agent-reliability triage**: when your agent works in dev but breaks in prod (loop runaways, tool call malformation, rate-limit cascades), I diagnose and patch the actual cause instead of papering it over.
- **MCP server builds and integrations**: clean MCP servers for your internal tools so Claude can drive them safely.

What I will not do:
- Build a 6-month "AI strategy" deck.
- Tell you "your prompt is bad" when the actual bug is in your orchestration loop.
- Sell you a tool I haven't shipped to production myself.

How I work:
- I bid only on jobs I think I can ship inside the proposed scope. If I bid, I have read your job post end-to-end.
- I send working code, not status updates. If I'm three hours into the contract and the approach won't work, I tell you that day with the alternative.
- I use my own production tooling: Claude Code, OpenClaw (multi-model failover), Computer Use, MCP — so the artifacts I hand you are the artifacts I run my own business on.

Portfolio:
- Speed-to-Lead service page (live): https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html
- OpenClaw Mac AI workstation guide (5K+ words, open source): https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/
- GitHub: https://github.com/IgorGanapolsky — actively shipping agent infrastructure.

Hourly: $95. Fixed-bid jobs welcome above $500. I respond inside one business day.

---

## Proposal templates

Below are five archetypes. The Upwork algorithm punishes copy-paste responses — **rewrite the first paragraph for each job** so it references something specific from the post. The middle and closing paragraphs can stay close to the template.

### Proposal #1 — "Build me a Claude / GPT agent"

> {Buyer name},
>
> Re: {one specific phrase from their job post — e.g., "the customer-onboarding flow you described where the agent needs to read PDFs and create Notion pages"}. That's exactly the kind of thing I build day-to-day, and the trap most people hit on it is {one specific thing — e.g., "agents that work fine on the happy path but loop infinitely the moment a PDF has scanned pages"}. I plan for that from hour one.
>
> Concrete plan for your scope:
> 1. {Step 1 specific to their stack — 1 sentence}
> 2. {Step 2 specific to their data — 1 sentence}
> 3. {Step 3 specific to their integration target — 1 sentence}
> 4. Smoke test against three of your real edge cases before delivery. You sign off; I don't.
>
> Timeline: {N days based on their stated scope}. Hourly: $95, with a soft cap I'll quote after a 15-minute call. I'll never bill for "research time" — discovery is on me.
>
> I built and ship the OpenClaw stack (multi-model Claude / GPT routing with failover) and a Speed-to-Lead agent for local service businesses. Both are running in production today. Happy to share architecture diagrams from either on our first call.
>
> Available {today/tomorrow} for a 15-min screen-share. What time zone are you in?
>
> — Igor

### Proposal #2 — "My Claude / agent stack is broken in production"

> {Buyer name},
>
> The symptom you described — {paraphrase their bug} — is almost always one of three causes:
> 1. **Tool call malformation** where the model returns valid-looking JSON that fails schema validation silently. The agent thinks it succeeded and proceeds.
> 2. **Rate-limit cascade** where one 429 retries inside the loop and the retry itself trips another rate limit, melting the whole batch.
> 3. **Context overflow / cache invalidation** where the conversation grows past the cache TTL and every step pays full token cost.
>
> First thing I'll do: get one failing run reproduced end-to-end on my machine, with full request/response logs. From there I can tell you which of the three (or a fourth thing entirely) is the actual cause inside 90 minutes.
>
> Then we fix it. I've debugged versions of all three in production agent stacks this quarter. The fix is rarely in the prompt; it's in the orchestration layer everybody skips.
>
> Hourly: $95. I'll cap diagnosis at $475 (5 hours). If the fix takes longer, I quote the implementation separately and you decide whether to proceed.
>
> When can you get on a 20-min screen-share?
>
> — Igor

### Proposal #3 — "Speed-to-Lead / lead-response agent for my service business"

> {Buyer name},
>
> This is what I build full-time. The pattern you described — {paraphrase: "leads coming in after hours and going cold by morning" or similar} — is exactly what my Speed-to-Lead pilot solves. Reference: https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html.
>
> For your specifics, I'd:
> 1. Wire your {form provider / IG DM / missed-call line} into the Claude agent.
> 2. Tune the reply voice to match how you actually talk (three rounds during the pilot).
> 3. Hook qualification rules to your {existing scheduler / CRM} so booked leads land where you already work.
> 4. Send you a Monday morning recovered-revenue report so you can see what it caught.
>
> Pricing for the standard pilot: $499 flat for 30 days, refund if I don't recover ≥3 conversions. After that, $497/mo retainer if you want continuous tuning + new channel onboarding. If Upwork policy requires the contract to be billed through them, I can match that structure — just let me know which form you prefer.
>
> I can have it installed and live inside one week. When can you do a 20-min call?
>
> — Igor

### Proposal #4 — "Help me set up Claude Code / Codex / Computer Use"

> {Buyer name},
>
> Most teams I talk to have already paid for Claude Code / Anthropic credits / Codex access and are getting 20% of the value because the local environment is fighting them. Specific gotchas on macOS this month:
> - Computer Use plugin shows as unavailable until you fix Accessibility + Screen Recording permissions in the right order.
> - Codex on Intel Macs trips a Node version pin most people miss.
> - Claude Code "channels not working" is now a 7-cause problem (GrowthBook gate is the newest).
>
> I wrote the open-source troubleshooting guide for all three: https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/. That's the same playbook I'd run against your machines.
>
> Scope I'd propose:
> 1. Audit the current setup on one developer's machine (≤2h).
> 2. Document the fix path; apply it.
> 3. Replicate across the team with a runbook so future hires self-serve.
>
> Hourly: $95. Typical engagement runs 4-8 hours total for a team of 3-5. I can start {today/tomorrow}.
>
> — Igor

### Proposal #5 — "Build me a custom MCP server / Claude integration"

> {Buyer name},
>
> I write production MCP servers. The thing most MCP tutorials skip is the *security boundary* — what tools can the model actually invoke, with what arguments, against what data. For your stack ({their tool: Notion / Linear / Salesforce / etc.}), I'd:
> 1. Map the read-only vs. write-capable operations into separate MCP tools with explicit allow-lists.
> 2. Add input validation at the MCP boundary, not just downstream.
> 3. Build a thin audit log so you can see exactly what the agent called and with what args.
> 4. Ship a smoke test suite the model itself can run before deployment.
>
> Most MCP servers I see in the wild skip step 2 and 3, which is fine for prototypes and a security incident for production.
>
> Hourly: $95. Typical custom MCP server runs 8-16 hours total depending on tool surface area.
>
> I built OpenClaw's multi-provider failover routing in Node and ship MCP integrations across Claude Code, Codex, and Cursor. Happy to walk through that code on a 20-min call.
>
> When works for you?
>
> — Igor

---

## Job-hunting filter (Upwork search queries to run daily)

Bid only on jobs where ALL of these are true:
- Buyer's payment is **verified**.
- Buyer has hired before OR has ≥3 reviews already.
- Job budget is **≥$500 fixed** or **≥$70/hr** with ≥10h commitment.
- Job posted in the last **48 hours** (older = saturated).
- Job description is specific (not "AI expert needed" — those are spam).

Saved searches to run daily:
- `Claude agent build` — sort by Most Recent
- `Computer Use automation` — sort by Most Recent
- `MCP server` — sort by Most Recent
- `lead response automation` — sort by Most Recent
- `agent workflow n8n` — sort by Most Recent

Target: **3 bids per day, Monday-Friday.** Lower than that and the algorithm de-ranks your profile. Higher than that and quality drops.

---

## What I (Claude / CTO) will do in parallel

- Track which proposal archetype produces replies (each proposal has an implicit `Proposal #N` label; we can post-hoc tally win-rate).
- When Igor wins a contract, immediately start drafting deliverables in parallel so we hit the timeline.
- Keep this kit updated as we learn which buyer signals predict close-rate.

---

## What I (Claude / CTO) cannot do

- Operate the Upwork account on Igor's behalf (no API, would violate ToS).
- Auto-submit bids (same).
- See Upwork inbox replies (Igor pastes them into our chat when they land).
