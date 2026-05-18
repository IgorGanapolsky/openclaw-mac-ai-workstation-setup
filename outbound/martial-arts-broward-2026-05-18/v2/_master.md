# Martial Arts Broward — Outreach Batch v2 (research-aligned)

**Status:** READY for owner-email refinement, then send queue.

## What changed from v1, why

Research pass on May 2026 cold-outreach data flagged 4 specific issues with v1:

1. **v1 was 150-200 words; 2026 winners are 50-125.** Best-in-class cold emails are <80 words. v2 averages ~100 words.
2. **Google's Feb 2026 AI-pattern filter scores templated structure at 2.4× pre-update spam likelihood.** v1 was 10 emails with identical hook→problem→solution→pilot→CTA scaffolding. v2 varies openings (mid-sentence start, problem-first, observation-first).
3. **Formal greetings ("Dear", "Professor") are flagged.** v2 uses first names or "Hey".
4. **Loom in first email = wrong (saturated, AI-pattern flag).** v1 + v2 both correctly defer demo to "reply 'demo'" — permission-first.

## Benchmark expectations

- **Open rate baseline 2026**: 27.7% platform average. With clean lists + good subject lines, 40-50%.
- **Reply rate target**: 10-15% (best-in-class with substantive personalization). 1-2 replies from this batch of 10 is the realistic goal.
- **Verified email lists get 2× the reply rate of unverified.** The 6 TBD-owner emails in this batch MUST be resolved before send.
- **Gmail 2026 spam complaint threshold**: 0.1%. Below 1/1000 to keep sender reputation. Easy at volume 10.

## Hard constraints before send

1. **Resolve 6 owner names + emails** (Athlas, Level Up, BOXFIT, 10th Planet Pompano, MMA Science, GB Fort Lauderdale). Path: visit site `/about` and `/contact`, LinkedIn search for "owner [GYM NAME]". 15-20 min of work.
2. **Verify deliverable address.** Don't send to `info@` if a named owner email is findable. If only `info@` is available, accept lower reply rate from those 4 and prioritize the 6 owner-named ones.
3. **Domain warm-up check.** The sending domain in Resend should have sent ≥30 emails total before a cold batch. If `igorganapolsky.github.io` or whatever Resend domain has zero history, deliverability suffers. Mitigation: send the warm-network ones (people you know) first, batch the cold ones over 2-3 days at 3-5/day.

## Send sequence

Phase 1 (Day 1, sends 1-3): The 3 strongest fits — Gordo (high inquiry volume), Sergio Da Costa (multi-location economics), John Wai (parent inquiry timing). All have named owners.

Phase 2 (Day 2, sends 4-6): GT Lauderhill, GB Coral Springs sibling locations, John Wai if not phase 1.

Phase 3 (Day 3, sends 7-10): Remaining gyms after owner-name resolution.

Pace: 3-5 sends per day. Same-time-of-day is fine on a low-volume batch.

Best send window: Tue-Thu, 9-11 AM ET (catches morning admin time at the gym).

## Follow-up cadence (if no reply within 5 days)

- **Day +5**: One-liner bump. "Hey, did this land in your inbox? Happy to ignore if not relevant."
- **Day +10**: Different angle — pick the closest gym's competitor and reference what they're doing. "Saw [competitor] launched [X] — same shape of problem applies to your trial pipeline."
- **Day +15**: Stop. Move to a different gym list.

## Tools

- **Sender**: Resend (key in `~/.openclaw/.env` as `RESEND_API_KEY`). Single-email API. Good deliverability for warm + low-volume cold from established domains.
- **Tracking**: Resend includes open/click tracking. Look at the dashboard 24h after each send.
- **Alternative for volume**: Instantly.ai if scaling past 50 sends/week.

## Risk register

- **First batch sent from a cold domain may dump into spam.** Mitigation: do a personal-network test send first (1 email to a friend's Gmail) to verify inbox placement before the cold batch.
- **Replying to "demo" promises a 60-second recording.** That recording does NOT exist yet. Need to record it before the first send if a same-day reply lands. Loom + 60 seconds + screen recording of the actual agent in OpenClaw. ~30 min to produce.
- **6 TBD owners** without owner names will have lower personalization, which is the strongest reply-rate driver. Skipping the resolution step costs ~50% of the reply rate on those 6.
