# Outreach Copy

## DM Version

Subject: I can fix your AI-agent Mac setup

Saw you are using AI coding agents. If your local setup is anything like mine was, the annoying part is not the model quality. It is the routing/auth/permissions mess: agents refuse simple tasks, burn context, attach to the wrong session, or cannot use Computer Use.

I just packaged a done-for-you setup for founders/devs:

- OpenClaw/Codex model routing
- token-smart defaults
- isolated per-project sessions
- Computer Use / macOS automation verification
- short operating runbook

If you want low-risk triage first, the async diagnostic is $99:
https://buy.stripe.com/28EfZheyU2iW4lH35V3sI0q

Full one-time setup is $497:
https://buy.stripe.com/aFa14nbmIg9M3hDayn3sI0k

If you want, send me your top 3 failure examples and I will tell you whether this is a fit before you buy.

## X/LinkedIn Post

Most AI-agent failures on a Mac are not "the model is dumb."

They are setup failures:

- stale OAuth token
- broken model route
- invalid Gemini/OpenRouter profile
- Computer Use permissions half-granted
- same TUI session reused across projects
- verbose defaults burning context

I turned my own OpenClaw/Codex setup fix into a $99 diagnostic and $497 done-for-you service.

It includes model routing, token-smart defaults, isolated project sessions, Computer Use verification, and a short runbook.

Diagnostic:
https://buy.stripe.com/28EfZheyU2iW4lH35V3sI0q

Full setup:
https://buy.stripe.com/aFa14nbmIg9M3hDayn3sI0k

## Helpful Reddit Reply

I ran into a very similar class of issue on my own Mac: OpenClaw looked configured, but the actual blockers were a mix of stale auth, wrong model routing, Screen Recording/Accessibility state, and the Computer Use plugin not being available to the runtime that was answering.

The checks that mattered were:

- read model/auth state without exposing keys
- verify macOS Screen Recording + Accessibility
- verify Computer Use can list apps or inspect the active UI
- isolate desktop automation into a dedicated Codex-runtime agent
- keep the normal coding agent on a cheaper/smarter route

I packaged this as a done-for-you setup here:
https://buy.stripe.com/aFa14nbmIg9M3hDayn3sI0k

Happy to sanity-check fit first if you share the top 3 failure examples.

## Cold Email

Subject: Fixing broken Mac AI-agent setups

Hi {{first_name}},

I noticed you build with AI coding agents. I am offering a focused Mac setup service for founders/devs whose agents keep failing in boring but expensive ways: bad model routing, stale auth, token bloat, broken Computer Use permissions, or project sessions bleeding together.

For $497, I configure and verify:

- OpenClaw/Codex routing for coding and business tasks
- token-smart defaults
- per-project TUI/session isolation
- Computer Use or macOS automation smoke tests
- a concise runbook with evidence

Checkout:
https://buy.stripe.com/aFa14nbmIg9M3hDayn3sI0k

If you want me to sanity-check fit first, reply with your top 3 agent failures.

Igor
