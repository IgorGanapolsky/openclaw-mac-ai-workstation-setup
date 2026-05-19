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

### Day-5 automation (live)

The Day +5 bump is automated end-to-end. Day +10 and Day +15 are still manual.

- **Script**: `scripts/revenue_ops/send_martial_arts_day5_bump.py` in the sibling repo `IgorGanapolsky/skool_top1percent` (lives there because all Resend senders + `data/outreach_suppression.txt` are canonical in that repo). Forked from `send_martial_arts_broward.py`; same FROM/REPLY_TO/CAN-SPAM/throttle/halt-codes. Body is ~30 words, threaded onto the original via `Subject: re: <original subject>`. Bump body does NOT promise the 60-second recording — same constraint the v2 drafts enforce.
- **Eligibility (all three must hold)**:
  1. Original cold send was 5-15 calendar days ago per `reports/gtm/martial_arts_broward_outreach_2026-05-19.json`. The script refuses to send if the original is >15 days old (Day-15 hard cap, server-side).
  2. Recipient is NOT in `outbound/martial-arts-broward-2026-05-18/replied.txt`. When a reply lands on a thread, append the address there (one per line) and the next bump skips it. Comments and blank lines are ignored.
  3. Recipient is NOT in `data/outreach_suppression.txt` (canonical CAN-SPAM + reputation list in the skool repo).
- **Workflow**: `.github/workflows/martial-arts-day5-bump.yml`.
  - Runs daily at 13:17 UTC (09:17 ET in DST / 08:17 ET out of DST). First eligible day: 2026-05-24 (Day +5 from the 2026-05-19 batch).
  - Scheduled runs are ALWAYS dry-run — they invoke the script without `--apply`, so no Resend API calls fire and no log file is written. The job still surfaces the eligibility breakdown in the Actions log so the CEO can see who would have bumped.
  - To actually send: GitHub UI -> Actions -> "Martial Arts Day-5 Bump" -> Run workflow -> set `apply: true`. Requires the `RESEND_API_KEY` repo secret; the job fails fast if it's missing.
  - On real send the workflow commits the JSONL bump log (`reports/gtm/martial_arts_broward_day5_bump_<date>.json`) back to this repo with `[skip ci]` (data-only). It never commits `replied.txt` (CEO-curated) or `leads.csv`.
- **Logs**: Each bump appends an entry with `"is_bump": true`, `bump_day`, and `original_message_id` so the v1 cold sends and Day-5 bumps stay analytically separable in the same `reports/gtm/` directory.
- **Local dry-run** (no secrets needed, runs from this repo's root):

  ```sh
  python3 ../skool_top1percent/scripts/revenue_ops/send_martial_arts_day5_bump.py \
      --csv outbound/martial-arts-broward-2026-05-18/leads.csv \
      --original-log reports/gtm/martial_arts_broward_outreach_2026-05-19.json \
      --replied outbound/martial-arts-broward-2026-05-18/replied.txt
  ```

## Tools

- **Sender**: Resend (key in `~/.openclaw/.env` as `RESEND_API_KEY`). Single-email API. Good deliverability for warm + low-volume cold from established domains.
- **Tracking**: Resend includes open/click tracking. Look at the dashboard 24h after each send.
- **Alternative for volume**: Instantly.ai if scaling past 50 sends/week.

## Risk register

- **First batch sent from a cold domain may dump into spam.** Mitigation: do a personal-network test send first (1 email to a friend's Gmail) to verify inbox placement before the cold batch.
- **Replying to "demo" promises a 60-second recording.** That recording does NOT exist yet. Need to record it before the first send if a same-day reply lands. Loom + 60 seconds + screen recording of the actual agent in OpenClaw. ~30 min to produce.
- **6 TBD owners** without owner names will have lower personalization, which is the strongest reply-rate driver. Skipping the resolution step costs ~50% of the reply rate on those 6.
