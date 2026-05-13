# Outreach Copy

One price per channel. Lead with the right rung of the ladder for the recipient's coldness/qualification level. Never templated.

## DM (warm — recipient has a real prior signal)

Subject: I can fix your AI-agent Mac setup

Saw you are using AI coding agents. If your local setup is anything like mine was, the annoying part is not the model quality. It is the routing / auth / permissions mess: agents refuse simple tasks, burn context, attach to the wrong session, or cannot use Computer Use.

I just packaged a done-for-you setup for founders/devs:

- OpenClaw/Codex model routing
- token-smart defaults
- isolated per-project sessions
- Computer Use / macOS automation verification
- short operating runbook

Lowest-friction async read first — $49 same-day triage:
https://buy.stripe.com/28E7sL3Ug3n0bO935V3sI0r

If that says you need the full setup, the $49 credits forward.

If you'd rather send me your top 3 failure examples first, do that — I'll tell you whether this is a fit before you buy anything.

## X / Bluesky owned post

Most AI-agent failures on a Mac in 2026 are not "the model is dumb." They are setup failures:

- stale OAuth token
- broken model route
- invalid Gemini / OpenRouter profile
- Computer Use permissions half-granted
- same TUI session reused across projects
- verbose defaults burning context
- Apple Events from inside cmux / Warp returning `-1743`

Six diagnostic classes with exact commands:
https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html

$19 if you want me to read your specific log:
https://buy.stripe.com/aFaeVd3Ug3n05pLfSH3sI0u

## Reddit reply (technical sub — value-first)

I ran into a very similar class of issue on my own Mac: OpenClaw looked configured, but the actual blockers were a mix of stale auth, wrong model routing, Screen Recording / Accessibility state, and the Computer Use plugin not being available to the runtime that was answering.

The checks that mattered were:

- read model/auth state without exposing keys
- verify macOS Screen Recording + Accessibility granted to the *running* bundle (not a stale copy)
- verify Computer Use can list apps or inspect the active UI
- isolate desktop automation into a dedicated Codex-runtime agent
- keep the normal coding agent on a cheaper/smarter route

Free walkthrough with the exact commands per failure mode:
https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html

(I run a paid service against the same checklist if the free version doesn't cover your specific case; happy to sanity-check fit first if you share the top 3 failure examples.)

## Cold email (Resend — once channel is operational)

Subject: the [specific error they mentioned] thing on macOS

Hi {{first_name}},

[First-line that names the specific failure or recent post they made — pulled from a public source. If you can't write a specific first line, do not send.]

I've been doing async diagnostics for that class of failure on Mac AI-agent setups. The cheapest read is $49 same-day triage — send one log/transcript, get back the likely root cause plus the next 3 commands. Same-day or refund.

https://buy.stripe.com/28E7sL3Ug3n0bO935V3sI0r

If you'd rather self-diagnose first, the free walkthrough is here:
https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html

Reply STOP if not relevant. — Igor

[Physical mailing address — CAN-SPAM]

## Individualized GitHub comment (the highest-converting cold surface — see live example)

Live reference: https://github.com/openai/codex/issues/21579#issuecomment-4443885059

Structure:
1. One-line acknowledgment that quotes a specific detail only the OP reported.
2. One to three numbered diagnostic angles, each with specific commands and the expected output.
3. One closing line offering the free walkthrough first, $19 quick-read as the cheapest async path. Single soft CTA.

Length target: 1,500–3,000 chars. **Never templated.** If the issue already has a substantive maintainer reply, the OP is more advanced than your draft, or the bug is fixed in a newer version — do not post.

Daily cap: 2 individualized GitHub comments. The 0/19 result on the prior templated batch is evidence that volume without personalization does not convert.

## Customer-discovery recruiting (free, no CTA)

> I'm putting together a free 15-minute async triage for 5 people whose Mac AI-agent setup is currently broken (Codex / OpenClaw / Claude Code refusing actions, Computer Use unavailable, OpenRouter silent fallback, `-1743` Apple Events, etc.). Send a Loom or 2-min voice memo describing what's broken; I'll send back the most likely root cause and the next command to run. No pitch, no upsell — I'm trying to learn which failure mode hits hardest. Reply or DM if interested.

This produces qualitative data on the offer ladder and the ICP. Run once the funnel-rewrite measure window completes.
