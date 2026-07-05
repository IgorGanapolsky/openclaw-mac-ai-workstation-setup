# ThumbGate: closing the learning loop (make it improve the agent over time)

**Problem (from the 2026-07-04 field readout):** ThumbGate enforces (2,388 blocks, 3,594 warnings
lifetime) and has trained a directionally-correct risk model on 51 feedback events — but the learning
**sits in the database.** It's queried on demand, never injected into the agent's default loop. The
thing that actually changed agent behavior that day was a rule in *startup context*, not ThumbGate.
Approval is 51% lifetime / 64.7% over 30d — trend right, unearned as "improves you over time."

**Root cause:** retrieval is pull, not push. A system that improves an agent must be in the context
the agent reads every session — like MEMORY.md — not behind an MCP call the agent makes only when asked.

**Two compounding failures:**
1. **Activation gap** — no session-start injection of learned rules.
2. **Self-noise** — ThumbGate's own capture pipeline (`auto-capture-fallback`, `claude-history-sync`)
   are its two highest-risk tags at 18/18 each. The tool's biggest tracked failure source is its own
   plumbing, which also poisons the training set with self-generated events.

This doc specifies the fix for both. Net change is ~1 new module + 1 startup hook + 1 dataset filter.

---

## Part 1 — Session-start rule injection (the activation fix)

### Mechanism
At session start, ThumbGate writes a compact, ranked context block to a known path
(`~/.thumbgate/session-context.md`) that the agent's startup hook concatenates into context,
exactly the way MEMORY.md already is. The block changes as the dataset grows — that is what makes
it "improve over time" rather than ship a static ruleset.

### Ranking: which rules earn a slot in the block
For each candidate prevention rule / pattern, compute from the feedback events:

- **support** `n` = events matching the rule
- **positive_rate** = approved-or-confirmed-good outcomes / n  (the "7/7 hermes" signal)
- **precision** for blocks = confirmed-should-block / total-blocked-by-rule
- **recency_weight** = exponential decay on event age (half-life ~14d) so stale rules fall off
- **wilson_lower** = Wilson lower bound of positive_rate at n (penalizes small-sample certainty)

Score = `wilson_lower * recency_weight`, computed separately for two buckets:
- **DO patterns** (replicate): high positive_rate rules → "when X, do Y (proven 7/7 positive)"
- **DON'T patterns** (block/caution): high block-precision, high-risk tags → "X is high-risk (18/18)"

Take top-K of each (default K=5). K stays small on purpose — this is context budget, not a manual.

### Output format (what lands in context)
```markdown
## ThumbGate — learned this session (auto-generated, {n} events, updated {ts})

### Replicate these (proven positive)
- Hermes pattern: size aux workers to a shared loaded provider before spawning a second instance. (7/7 positive)
- {pattern}. ({k}/{n} positive)

### High-risk — gate hard or confirm first
- auto-capture-fallback — 18/18 high-risk. Do not let it run unattended; see fix below.
- claude-history-sync — 18/18 high-risk. Known-noisy capture path (being fixed).
- {tag} — {k}/{n} high-risk.

### One-line rule of the day (highest-confidence single lever)
> {the single highest-scoring DO rule, surfaced verbatim}
```

### Reference implementation (`thumbgate/session_context.py`)
> Assumes a feedback store exposing events with: `tag`, `outcome` in {approved, blocked, reverted,
> confirmed_good, confirmed_bad}, `created_at`, `source`. Adapt field names to the real schema —
> the algorithm is the contract, not the column names.

```python
import math, time, json, pathlib

HALF_LIFE_S = 14 * 86400
OUT = pathlib.Path.home() / ".thumbgate" / "session-context.md"

def _wilson_lower(pos, n, z=1.96):
    if n == 0: return 0.0
    p = pos / n
    return (p + z*z/(2*n) - z*math.sqrt((p*(1-p)+z*z/(4*n))/n)) / (1 + z*z/n)

def _recency(age_s):
    return 0.5 ** (age_s / HALF_LIFE_S)

def rank(events, now=None, k=5):
    now = now or time.time()
    # group by (tag, rule); accumulate positive/negative with recency weighting
    agg = {}
    for e in events:
        if e.get("source") == "thumbgate_internal":   # <-- self-noise excluded (Part 2)
            continue
        key = e.get("rule") or e["tag"]
        a = agg.setdefault(key, {"pos":0.0,"neg":0.0,"n":0,"tag":e["tag"],"hr":0})
        w = _recency(now - e["created_at"])
        good = e["outcome"] in ("approved","confirmed_good")
        a["pos" if good else "neg"] += w
        a["n"]  += 1
        a["hr"] += 1 if e["outcome"] in ("blocked","confirmed_bad") else 0
    scored = []
    for key,a in agg.items():
        n_eff = a["pos"]+a["neg"]
        do_score  = _wilson_lower(a["pos"], n_eff)
        dont_score= _wilson_lower(a["hr"],  a["n"])
        scored.append((key,a,do_score,dont_score))
    do   = sorted([s for s in scored if s[2] >= 0.6], key=lambda s:-s[2])[:k]
    dont = sorted([s for s in scored if s[3] >= 0.7], key=lambda s:-s[3])[:k]
    return do, dont

def render(do, dont, n_total):
    ts = time.strftime("%Y-%m-%d %H:%M")
    L = [f"## ThumbGate — learned this session (auto-generated, {n_total} events, updated {ts})",
         "", "### Replicate these (proven positive)"]
    L += [f"- {k} ({int(a['pos'])}/{a['n']} positive)" for k,a,_,_ in do] or ["- (not enough signal yet)"]
    L += ["", "### High-risk — gate hard or confirm first"]
    L += [f"- {a['tag']} — {a['hr']}/{a['n']} high-risk" for k,a,_,_ in dont] or ["- (none)"]
    if do:
        L += ["", "### Rule of the day", f"> {do[0][0]}"]
    return "\n".join(L) + "\n"

def write_session_context(events):
    do, dont = rank(events)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(render(do, dont, len(events)))
    return OUT
```

### Wiring it in
1. **Producer:** call `write_session_context(load_feedback_events())` on the ThumbGate daemon's
   post-session hook (and once at boot). Cheap; runs off the existing feedback store.
2. **Consumer:** the agent's session-start hook does what it already does for MEMORY.md —
   append the contents of `~/.thumbgate/session-context.md` into startup context. One line.
3. That's the whole activation loop. The block is regenerated from live data every session, so as
   the dataset grows the injected rules shift — the definition of "improves over time."

---

## Part 2 — Kill the self-noise (`auto-capture-fallback`, `claude-history-sync`)

These are ThumbGate's own infrastructure, not agent decisions, yet they're the top-2 risk tags
(18/18). Two independent problems:

**A. They poison the training set.** Tag every event with `source`. ThumbGate's own pipeline emits
`source="thumbgate_internal"`. The ranker (above) and the risk model **exclude** internal-source
events from learning — the model should train on the *agent's* choices, not the tool's plumbing.

**B. The history-sync capture path trips its own gates.** This is a real bug, not just noise.
`claude-history-sync` at 18/18 means the capture path is doing something that looks like a
high-risk action every time. Instrument it: log the exact action each sync attempts, then either
(a) run it under a pre-authorized service identity that's allowlisted for its specific file/DB writes,
or (b) fix whatever unscoped write is tripping the gate. Success = `claude-history-sync` drops out
of the high-risk top-K within a week.

---

## Part 3 — Success metric (so "improving" is measured, not claimed)

Write these to memory the way the Hermes fix already writes its metric:

| Metric | Baseline (2026-07-04) | Target (14d) | How |
|---|---|---|---|
| 30-day approval rate | 64.7% | ≥ 75% | injected DO-rules raise first-try approvals |
| Sessions analyzed | 0 | > 0 daily | self-distillation unblocked (fix its MCP profile) |
| `claude-history-sync` in risk top-K | yes (18/18) | absent | Part 2B |
| Guard reclaims/day | ~57 (pre-Hermes) | measured drop | already in flight |
| Lessons surfaced/session | ~0 | ≥ 1 | the injected block IS a surfaced lesson |

If approval doesn't move in 14 days, the injection format is wrong (too vague / too long), not the
idea — iterate the render() template, not the mechanism.

---

## Part 4 — What this unlocks commercially (ties to the honesty rule)

Until Part 1 ships, the truthful marketing claim is **enforcement**: "deny-by-default at the
tool-call layer — 2,388 real actions blocked." Do NOT claim "learns and improves your agent over
time" yet — the data (0 sessions analyzed, no lessons surfacing) would make that the same kind of
overpromise we just stripped out of the daily posts.

Once Part 1 ships and the 30-day approval metric moves, the claim becomes **true and provable**:
"ThumbGate injects your fleet's own proven-safe patterns into every session — measured +X% first-try
approval in 14 days." That's a materially stronger pitch than any competitor's post-hoc audit, and
it's backed by a number instead of a promise.
```
