# OpenClaw Mac AI Workstation Setup

Done-for-you Mac AI-agent setup. When your local Codex / OpenClaw / Claude Code stack refuses simple actions, burns context, falls back silently, or can't use Computer Use — this is the fix.

Public page → https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/

## Start Here

**Cheapest path:** $19 quick read. Send one failing transcript or log excerpt. Get back the likely root cause, the next command to run, and a recommendation on whether you need the higher tiers.

→ https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html

If you came in from a GitHub issue with a specific bug, jump to **$49 same-day triage** — issue-referred buyers are usually already qualified for that.

→ https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html

**Free, no signup, one command:**

```sh
curl -fsSL https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/scripts/self-diagnose.mjs | node
```

Runs the read-only checks for all six known root causes, redacts common secrets, and writes a single bundle to your Desktop. Review it yourself or paste it into the $19 quick read. (Claude Max 5x subscribers: starting **June 15, 2026** your plan includes a $100/month Agent SDK credit for `claude -p` — a future `--analyze` flag will run on that credit.)

## The Ladder

| Tier | Price | What you get | Best fit |
| --- | --- | --- | --- |
| Quick Read | $19 | One root-cause note + next-command recommendation | Cold buyer wants a sanity check before spending more |
| Same-Day Triage | $49 | Async root-cause direction within 24h | Buyer with one specific GitHub-issue-style failure |
| Diagnostic | $99 | Concise diagnostic note with exact next steps and patch direction | Buyer with multiple failures |
| Done-For-You Setup | $497 | Full configuration of routing, sessions, Computer Use, smoke tests, runbook | Buyer who wants a working stack delivered |
| Maintenance | $250/mo | Monthly checkup, provider cleanup, route refresh, one priority rescue/month | Setup customer who keeps shipping |

Stripe links: [$19](https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html) · [$49](https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html) · [$99](https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html) · [$497](https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/speed-to-lead.html) · [$250/mo](https://buy.stripe.com/bJe3cv0I40aO7xTeOD3sI0l)

## What It Fixes

- OpenClaw / Codex refusing simple actions despite "everything is installed"
- Computer Use not working after macOS permissions are granted
- Stale OAuth profiles and broken model routes
- OpenRouter "fallback" silently routing back to the broken primary
- Excessive token burn from noisy defaults
- TUI sessions reused across unrelated project directories
- Long-running agent jobs hanging without auditable status
- Apple Events from child processes failing with `-1743` from cmux / Warp / host apps

Walkthrough with diagnostic commands per failure mode → [troubleshooting page](https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/troubleshooting.html)

## Agent Apps (often a better fit than setup)

If your underlying need is a working business workflow, not infrastructure, the higher-converting offer is an installable agent app:

- WhatsApp Lead Responder
- Daily Owner Briefing
- CRM Follow-Up Agent
- Reddit & GitHub Lead Monitor
- Upwork Proposal Assistant
- AI Agent Security Auditor
- Durable Agent Workflow
- Cost-Aware LLM Router
- Hermes VPS Assistant
- Agent Consent Layer

Catalog → https://igorganapolsky.github.io/openclaw-mac-ai-workstation-setup/agent-app-catalog.html

## Evidence

Built and verified on a real local stack (2026-05-05):

- OpenClaw gateway healthy
- Main coding/business agent on Claude Sonnet via OpenRouter
- Dedicated `computer-use` agent on Codex runtime
- macOS Screen Recording + Accessibility granted to the correct bundle
- Computer Use smoke test: `computer-use.list_apps` returned `ACTIVE_APP=WezTerm; APP_COUNT=8`

## Boundaries

No guaranteed revenue outcomes. No security bypasses. No secret exposure. No outbound messages, posts, or charges without approval.
