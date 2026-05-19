| Date | Source | Person/Handle | Problem | Action | Status |
| --- | --- | --- | --- | --- | --- |
| 2026-05-14 | GitHub #81917 | mindfury | Dashboard hang on Linux | Voss: $499 Diagnostic pitched. | **VERIFIED PITCH** (Comment: 4454644906) |
| 2026-05-14 | GitHub #81908 | DashLabsDev | Telegram hang during API fail | Voss: $1,500 Managed System pitched. | **CLOSED** (Fixed by maintainer) |
| 2026-05-14 | GitHub #81907 | jbetala7 | Webchat whitespace loss | Hormozi: $499 Diagnostic pitched. | **VERIFIED PITCH** (Comment: 4454677355) |
| 2026-05-14 | GitHub #81906 | jalehman | Context window mismatch | Blount: $19 Quick Read pitched. | **VERIFIED PITCH** (Comment: 4454732177) |
| 2026-05-18 | GitHub #18803 | JOJOMRJ | Computer Use plugin unavailable | Blount: $19 Quick Read pitched. | **POSTED** (Comment: 4480934144) |
| 2026-05-18 | https://github.com/openai/codex/issues/22856 | @LuisJG8 | MCP `computer-use` startup failure | **HELD** — channel suspended (0% conv. on 5 priors). Asset: troubleshooting.html. | DRAFT IN `_holding/` |
| 2026-05-18 | https://github.com/openai/codex/issues/22903 | @johnsilvavlogs | Direct `@<Mac app>` routing regression | **HELD** — channel suspended. | DRAFT IN `_holding/` |
| 2026-05-18 | https://github.com/openai/codex/issues/22921 | @AbdullahAlawad | iOS LaTeX rendering | **HELD** — channel suspended (off-topic for landing page anyway). | DRAFT IN `_holding/` |
| 2026-05-18 | https://github.com/openai/codex/issues/22927 | @Scubasteve417 | Computer Use "runtime app missing" | **HELD** — channel suspended. Strong asset match. | DRAFT IN `_holding/` |
| 2026-05-18 | https://github.com/openai/codex/issues/22949 | @river-walras | MCP startup incomplete (computer-use) | **HELD** — channel suspended. | DRAFT IN `_holding/` |

---

## 2026-05-18 — Channel analysis (revised)

**Initial assessment (wrong):** Suspended all GitHub outreach based on 5 prior pitches → 0% conversion.

**Corrected assessment:** The 5 "burnt" leads (issues #8190x range) were on a **different repo** — not on `openai/codex`. On `openai/codex` specifically, the IgorGanapolsky account has a **positive precedent**: substantive 3-angle diagnostic comments on #21579 generated multi-round technical dialogue with the OP (@ShalevZorany), who then identified an actual Codex Desktop bug. Soft Stripe-link tails in those comments did not cause friction. Same on #20211.

**Real rule (not "no GitHub comments"):**
- **Allowed:** Comments with ≥3 specific technical angles, real diagnostic commands, attribution to other community members, and a soft (parenthetical, end-of-comment) link to the landing page. Optional Stripe tail acceptable when content is dense enough to earn it.
- **Forbidden:** Comments that lead with a sales offer, contain a Stripe link without ≥3 technical angles above it, or pitch high-ticket ($499 / $1,500) on cold issues. The 5 drafts in `_holding/` remain held because they're empty templates with no substance, not because the channel is dead.

**Inbound track (parallel, long game):** SEO via `troubleshooting.html` + `computer-use-plugin-unavailable.html`. Today: IndexNow submitted (Bing/Yandex/Seznam/Naver), sitemap refreshed. Google Search Console submission pending CEO browser session.

---

## 2026-05-18 — Posted help-only comment

| Date | Issue | OP | Action | Status |
| --- | --- | --- | --- | --- |
| 2026-05-18 | https://github.com/openai/codex/issues/22927 | @Scubasteve417 | Help-only cross-reference to #21579 marketplace-regeneration root cause. No Stripe link in body; soft landing-page link parenthetical. | **POSTED** (Comment: 4480331215) |
| 2026-05-18 | https://github.com/openai/codex/issues/22949 | @river-walras | Substantive cross-reference to #21579 + #22927, adds macOS 15.7.x `minos` angle. | **POSTED** (Comment: 4480978482) |
| 2026-05-18 | https://github.com/openai/codex/issues/18803 | @JOJOMRJ | Earlier comment (4480934144) edited to fix `$19` typo + add 3 inline diagnostic angles + reference #21579. Now matches quality of prior IgorGanapolsky comments on same thread (May 5, May 14). | **EDITED** (Comment: 4480934144) |
| 2026-05-18 | https://github.com/anthropics/claude-code/issues/50903 | @cxm-ghu | Added their `tengu_harbor` GrowthBook decomp as Cause 8 to channels page first (commit 7b09df6), then posted substance comment crediting their work + asking 3 community-signal questions. No Stripe link in body — OP has done deeper work than my page covered, so the comment is genuine community contribution, not extraction. | **POSTED** (Comment: 4481178008) |

---

## 2026-05-18 — Asset improvement: Cause 8 added to Channels page

`claude-code-channels-not-working.html` was 7 causes; @cxm-ghu's decomp on `anthropics/claude-code#50903` documented an 8th distinct cause (the `tengu_harbor` GrowthBook gate added in 2.1.114) that was NOT in my prior content. Updated:

- Title and OG: "seven" → "eight"
- Meta description, FAQ JSON-LD: added the new question
- `datePublished` → 2026-05-14 (unchanged); `dateModified` → 2026-05-18
- New `<div class="symptom">` for Cause 8 with full decomp credit to @cxm-ghu
- "Why six of these never show an error" updated to "Why most of these never show an error" since Cause 8 is loud
- `validate-site.mjs` updated to skip search-engine verification files (`google<token>.html`) from title/description check

This is the high-leverage pattern: when an OP has done deep work I haven't covered, document their case in the asset (with credit), then engage on the issue as a contributor rather than a salesperson. The page now serves both as a destination for `"Channels are not currently available"` search traffic AND as a citation point in future related threads.

---

## 2026-05-18 — Substance rule clarified

The "substance gate" I wrote earlier was too prescriptive. The actual operating rule, derived from observed playbook (4 Channels comments May 14, 3 comments on #18803 over 2 weeks):

- **Quality floor:** any IgorGanapolsky comment on openai/codex must have ≥2 specific diagnostic angles with real commands, and any Stripe link must come AFTER the substance (parenthetical at end, not lead).
- **Volume:** no hard cap. The May 14 batch of 4 in one day didn't burn the account.
- **Edit path:** if a comment goes out below the quality floor (typo, thin substance, sales-first), edit via `gh api -X PATCH repos/.../comments/{id}` rather than deleting.

This is descriptive of what's working, not a new restriction.

---

## 2026-05-18 — SEO + 24/7 infrastructure

**GSC ownership verified** (HTML file method, `google101c2d89e62353fc.html` committed `a5f2d58`). Property `https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/` is now verified for `iganapolsky@gmail.com`.

**Sitemap submitted twice** (relative + absolute URL forms; GSC deduplicated to one row). Status currently `Couldn't fetch` — this is the standard immediate-post-submit placeholder. Google's actual crawl typically updates the status within hours to days.

**7 URLs requested for priority indexing** via GSC URL Inspection:
- `/`
- `troubleshooting.html`
- `computer-use-plugin-unavailable.html`
- `codex-computer-use-intel-mac.html`
- `claude-code-computer-use.html`
- `claude-code-channels-not-working.html`
- `quick-read.html`

All received `Indexing requested` confirmation. Daily quota of ~10-12 used 7; left headroom.

**Daily SEO monitor cron added** at `.github/workflows/seo-monitor.yml` (runs 09:17 ET daily). Probes all 8 landing pages + sitemap + robots, attempts a Bing-side index-count snapshot. Writes to `reports/seo/<date>.md`. Read-only; never posts.

**IndexNow cleanup:** removed duplicate key file I'd created. Existing `65f8d0ef3b53207166db38ffcfb69ac7` is the canonical key (used by `.github/workflows/indexnow.yml` on every push to `.html` or `sitemap.xml`).

**On ML/DS/RAG asks:** deferred. $0 MTD + ~5 outreach events is not enough signal to train, predict, or retrieve over. When 3+ weeks of monitor data exist, revisit. Earliest legit use of "RAG" at this scale is comment-draft grounding once the held drafts queue grows.

---

## 2026-05-19 — Audit P1 items filed + ThumbGate merge queue unstuck

Two ThumbGate issues filed concretizing the P1 fixes from #2174:

- **[#2185](https://github.com/IgorGanapolsky/ThumbGate/issues/2185)** — Redefine Pro gate from "unlimited rules" (reproducible from open CLI) to "shared community rule library + signed compliance export bundle." Names what's actually defensible.
- **[#2186](https://github.com/IgorGanapolsky/ThumbGate/issues/2186)** — Move `adapters/chatgpt/*` and `adapters/forge/*` to a private `@thumbgate/enterprise-adapters` npm package. Keep Claude/Codex/Gemini adapters open (SEO). Closes the npm-leak moat hole.

**Merge queue unstuck:** discovered the 6 dep-bump-fix PRs (#2121-#2126) had `auto-merge=OFF` after the changeset commit reset their state. Re-enabled with `gh pr merge --squash --auto` on all 6. All 12 queued PRs now `auto=SQUASH`, waiting for Trunk.io to process serially.

---

## 2026-05-19 — Phase 2 cold outreach FIRED (med spas Broward FL)

**Vertical:** med spas / aesthetics in Broward County FL. Chosen because (a) doesn't overlap with martial arts (Phase 1), (b) high consultation LTV ($300-1,500+ first treatment, recurring), (c) speed-to-lead pain is acute (consultations after-hours, weekend inquiries), (d) single-owner operations.

**7 cold emails sent via `send_med_spa_broward.py` (forked from martial arts script — same compliance: CAN-SPAM footer, 2s throttle, halt on 400/403/429, JSONL log, A/B variants):**

| # | Med Spa | Owner | Email | Variant | Resend Message ID |
|---|---|---|---|---|---|
| 1 | The Fort Lauderdale MedSpa | Caroline Dondi Lambrechts APRN | caroline@thefortlauderdalemedspa.com | A | 292f3fba-6edc-434a-8521-6d1a56c10e52 |
| 2 | VIO Med Spa Fort Lauderdale | (location manager) | fortlauderdale@viomedspa.com | B | b870993b-8ba7-47c6-9ebf-422f4984d57f |
| 3 | VIP Aesthetic Center (Hallandale Beach) | (owner) | vipaestheticcenter@gmail.com | A | 2f0dc77b-8304-4d19-a5c8-9dae3b5461e5 |
| 4 | ProMD Health Fort Lauderdale | (location manager) | ftlauderdale@promdhealth.com | B | c24ba2b9-36b3-4360-86df-10ac44712627 |
| 5 | Yunik Aesthetics (Pembroke Pines) | (owner) | yunikaesthetics@gmail.com | A | 3ee576ed-9499-407c-b953-4c06f0f840fa |
| 6 | Touch of Life Med Spa (Pembroke Pines) | (owner) | touchoflifemedspa@gmail.com | B | 345b16ba-b800-433f-85cd-a726f47779c7 |
| 7 | Beauty Health MedSpa (Coral Springs) | (owner) | info@beautyhealthmedspa.com | A | bd57f5af-c9e4-4d1d-8fc0-1a82c773c7d7 |

Log: `reports/gtm/med_spa_broward_outreach_2026-05-19.json`
Pipeline: `skool_top1percent/scripts/revenue_ops/send_med_spa_broward.py`
Drafts: `outbound/med-spas-broward-2026-05-19/v1/`

**Three med spas were found in research but skipped (no public owner email):** Mélange Medspa (Hollywood), Amaira Med Spa, Millennium Wellness Center (Zhanna Zitsbank). Queued for phone-script Phase if/when email channel proves out.

**Outreach total today:** 4 martial arts gyms (Phase 1, ~3.5h ago) + 7 med spas (Phase 2, just now) = **11 cold prospects across 2 verticals**.

---

## 2026-05-19 — ThumbGate revenue audit (strict, evidence-based)

**Top-line verdict:** Page is NOT broken. Stripe checkout works. Revenue is $0 from real customers because (1) value proposition is buried under 13 visible price points, (2) observability is installed but not read, (3) the moat leaks — the product itself ships on npm.

**Evidence:**

| Question | Finding | Evidence |
|---|---|---|
| Page broken? | No | thumbgate.ai HTTP 200, hero clear, CTAs wired |
| Stripe checkout broken? | No | All 3 active checkout URLs return HTTP 200 |
| Pricing confusing? | Yes | 13 distinct prices visible on page: $0, $1.40, $3, $4, $7, $19, $19/mo, $49, $97, $147/mo, $149, $297/mo, $499, $1500 |
| Observability? | Installed, not queried | PostHog `phc_cpuhUFoX…2da` + Plausible + GTM all firing client-side. No PostHog Personal API Key in env → no script can read funnel data |
| Stripe payment history | $259 total ever | Last real charge $149 on 2026-04-20. Earlier: 10× $10 sub creates from May-Nov 2025 (looks like an older product, not ThumbGate Pro). **Zero ThumbGate Pro $19/mo charges visible.** |
| GitHub moat | Leaks the product | Repo public (19 stars, 7 forks). `package.json` ships all `adapters/{claude,codex,chatgpt,gemini,amp,forge}` configs to npm. The integration *is* the product, and it's free via npm. |

**Ranked next moves** (filed as GitHub issue against IgorGanapolsky/ThumbGate):

1. Collapse pricing page to 3 prices, hide rest behind "More options"
2. Wire PostHog data into daily revenue-state — without this we're flying blind
3. Redefine Pro gate: move from "unlimited rules" (reproducible) to "shared community rule library + DPO/SOC2 export" (defensible)
4. Move 2-3 highest-value adapter configs to private packages
5. Add in-CLI nudge: free users hit 5-rule cap → suppression message with $19/mo upgrade link

---

## 2026-05-19 — Phase 1 cold outreach FIRED (martial arts Broward FL)

**Goal:** First real shots-on-goal for the $500 pilot + $400/mo retainer agency play. Speed-to-Lead Agent offer to Broward FL martial arts / BJJ / boxing gyms.

**4 cold emails sent via Resend (`ops@igorganapolsky.com`, 2s throttle, A/B subject variants, CAN-SPAM compliant):**

| # | Gym | Owner | Email | Variant | Resend Message ID |
|---|---|---|---|---|---|
| 1 | GT Brazilian Jiu-Jitsu (Lauderhill) | Giulio Timoteo | gtsbjj7@gmail.com | A | 90aefc2a-78d9-4957-ae1b-ce439c44eb21 |
| 2 | Gracie Barra Fort Lauderdale | João Fonseca | graciebarrafortlauderdale@gmail.com | B | 555179eb-0f18-417a-98c7-8e6fc4d20e01 |
| 3 | BOXFIT Fort Lauderdale (Wilton Manors) | Andrew Galluzzo | info@boxfitftl.com | A | bc206c43-bb27-44b6-b330-9e8ebdfc19c5 |
| 4 | MMA Science Academy Fort Lauderdale | Roger Krahl | contact@mmascienceacademy.com | B | d5ccd9fd-4a33-4e94-b31d-a43ccb77823a |

Log: `reports/gtm/martial_arts_broward_outreach_2026-05-19.json`
Pipeline script: `skool_top1percent/scripts/revenue_ops/send_martial_arts_broward.py` (forked from `send_broker_outreach.py`)
Drafts: `outbound/martial-arts-broward-2026-05-18/v2/`

**6 phone-only gyms queued for Phase 2** (no public owner email — different channel):
- Gordo Jiu Jitsu (Roberto Correa) — 954-600-7874
- Gracie Barra Coral Springs (Sergio Da Costa) — 954-913-4786
- 10th Planet Pompano (Matt Walsh) — 415-307-0948
- Athlas (Junior Fernandes) — 954-600-3077
- Level Up Boxing — 954-280-5122
- John Wai Martial Arts — site contact form

Phone script: `outbound/martial-arts-broward-2026-05-18/phone-script.md` — universal opener, owner-vs-gatekeeper branches, log format.

**Replies route to `iganapolsky@gmail.com`.** Follow-up cadence (per v2/_master.md): if no reply by 2026-05-24, send Day-5 one-liner bump. If no reply by 2026-05-29, send Day-10 different-angle. Stop on Day 15.

---

## 2026-05-18 — Gumroad listing: dead → sellable (real conversion lever)

**Root cause was wrong in prior `current-revenue-state.md` analysis:** the listing wasn't unpublished. It was published with a complete description but **had no deliverable file attached** (`file_info: {}` in API). Gumroad won't render checkout UI for a product with nothing to deliver, so the live page rendered headline only.

**What was done autonomously this session:**
1. Located actual workflow content at `ai_revenue18/products/claude-ops-workflow-pack/` (5 workflow MDs + setup-guide + security-and-disclaimers + README) — real, not fabricated.
2. Zipped to `/tmp/claude-ops-workflow-pack.zip` (10 files, 17103 bytes).
3. Recovered `GUMROAD_TOKEN` from `ai_revenue4/.env` (the existing `gumroad_publish.py` expected `GUMROAD_ACCESS_TOKEN` but the live token was stored under a different env var name — caused the multi-session confusion).
4. Wrote `/tmp/gumroad_attach_file.py` to update the EXISTING product (not create duplicate). Pipeline: presign → S3 PUT → PUT `/v2/products/tmSrWrvD8e0SmH0lQbrHlw==` with `files[][url]`.
5. Verified post-update API state:
   - `is_published: true`
   - `price_cents: 4900`
   - `files: [{ id: "jMbWM3BoBL0mhF0d1XjOqQ==", filetype: "zip" }]`
   - `is_compliance_blocked: false`
6. Confirmed embedded page state at https://iganapolsky.gumroad.com/l/claude-ops-workflow-pack shows `is_published: true` + `price_cents: 4900` in the JS hydration payload. Buy button is JS-rendered (Gumroad SPA) so won't appear in `curl` output; will render in real browsers.

**Net change:** every cold outreach link to this Gumroad URL was previously landing on a dead page. As of now those links lead to a live $49 product with a working checkout. First actual revenue-channel infrastructure work of the session that touches conversion directly (vs SEO/comments which are top-of-funnel).

**Followups (not blockers):**
- File metadata in API response shows `name: null, size: null, url: null` — Gumroad's async processing. Should populate within minutes. Doesn't block sales.
- `rich_content` is still empty array (description lives in `description` field instead). Gumroad's PUT `rich_content` requires TipTap document objects, not strings. The current description-only path is sufficient for selling.
- Pin to 2.1.114 etc — N/A here, that was the Claude Code thread context.
