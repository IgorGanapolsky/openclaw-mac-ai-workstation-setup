# BID — Job #4: Connect OpenClaw Assistant to Zapier MCP, GoHighLevel, and PandaDoc

**Job URL:** https://www.upwork.com/jobs/Connect-OpenClaw-Assistant-Zapier-MCP-GoHighLevel-and-PandaDoc_~022056757761773976693/
**Posted:** 2026-05-19, 4 hours before bid drafting
**Pay:** Hourly $47-$80 (Intermediate)
**Restriction:** US-only (✅ we're US-based)
**Connects required:** 14 (assumed; verify)

## Proposed hourly rate: $80 (top of their range)

Justification: this is OpenClaw + MCP + OAuth troubleshooting — the exact intersection where we have the highest credibility. Bidding at the top of their range signals expertise; the bid copy backs it up with the OAuth-specific gotcha they're stuck on.

## Proposal text (paste verbatim)

> The reason your OpenClaw → Zapier MCP setup is hanging at the OAuth/browser-authorization step is almost always one of two things, and both are 10-minute fixes once we're on a call:
>
> 1. **`mcporter` is opening the OAuth handshake in a headless context** where the redirect-back can't reach the local listener. Either the local port the OAuth flow expects (`http://127.0.0.1:<port>`) is occupied by another process, or your firewall/macOS Network Privacy settings are dropping the inbound. The fix is to run `mcporter config add zapier ...` in a normal interactive shell with the browser already up, then watch the system log for the actual bind failure if it still hangs.
> 2. **Zapier's MCP OAuth flow caches an old client registration** under `~/.mcporter/state.json` (or the equivalent for your install). If you attempted the connection earlier with a different `--client-name`, that stale state will block the new handshake silently. Clearing the relevant entry and re-running with `--client-name "openclaw"` fresh usually unblocks it inside one retry.
>
> Once OAuth lands, the rest of your scope is straightforward but has one trap worth naming: **GoHighLevel's Zapier app exposes contact-write actions but NOT custom-field-write for some account tiers.** If your GHL plan is one of the older Agency tiers, you may need a webhook (GHL → make/Zapier → back to GHL via API key) to write the PandaDoc URL into the contact's custom-field slot. That's not a blocker, but it's the most common spot where this exact workflow ("write PDF link back to GHL contact") quietly fails.
>
> For the test workflow you sketched (GHL → PandaDoc → link back to GHL → trigger send), I'd build it as:
>
> 1. Matt calls a single Zapier MCP tool `gohighlevel.find_contact(criteria)` → returns contact JSON.
> 2. Matt calls `pandadoc.create_from_template(template_id, variables)` → returns doc URL.
> 3. Matt calls `gohighlevel.update_contact_custom_field(contact_id, field, doc_url)` (or the webhook workaround above if tier-blocked).
> 4. Matt calls `gohighlevel.apply_tag(contact_id, "Contract-Sent-By-Matt")`, which a GHL automation listens for and triggers the actual contract email.
>
> I'd ship a working POC of that exact flow + test data + docs inside the first 4-6 hours of work. If you want to pay only after the OAuth issue clears (the riskiest part), I'm happy to structure the milestone that way.
>
> About me: I build agent-orchestration stacks and MCP servers in production. I ship a Claude / MCP-routed agent system called openclaw — multi-provider failover, Computer Use, MCP tool dispatch — so the OpenClaw + MCP + OAuth shape is my daily surface. (Note: "openclaw" is also the name of my own workstation product at github.com/igorganapolsky/openclaw-mac-ai-workstation-setup; I'm aware your assistant is a separate "OpenClaw" build — happy to confirm which on the call.)
>
> Available today / tomorrow for the screen-share. Rate: $80/hr. Estimating this gig lands inside 8-15 hours total.
>
> When works?
>
> — Igor

## Why I think this wins

- Names the exact OAuth-failure mode (port-in-use OR stale `state.json`) in the FIRST paragraph — proves I've actually hit this myself, not just speculating.
- The GoHighLevel custom-field-write tier limitation is the kind of obscure-but-real gotcha that builds trust ("this person has actually shipped this stack before").
- 4-step workflow proposal mirrors their 5-step description but compresses it cleanly.
- "Pay only after OAuth clears" milestone offer = removes their risk on the part most likely to be hardest. Strong commercial signal.
- The OpenClaw disambiguation paragraph is honest (they're using a different OpenClaw) without weakening the credibility argument.
- Ends with concrete next step + timeline.

## If client replies and engagement starts

- 15-min call: confirm their OS (post says Windows / Ubuntu / WSL options — different from my Mac stack but the mcporter side is identical).
- Reproduce their OAuth failure on screen-share. Apply one of the two fixes above (10-min budget).
- Day 1: OAuth clears. List visible Zapier MCP tools. Confirm GoHighLevel + PandaDoc are connected on Zapier's side.
- Day 2-3: build POC workflow with test data. Ship docs.
- Day 4: deliverable handoff + tee up follow-up scope (Airtable + breeding stock + SOPs mentioned in post).
