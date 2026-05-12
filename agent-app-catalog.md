# OpenClaw Agent App Catalog

This catalog turns OpenClaw from a generic agent setup into buyer-ready app outcomes. Each app has a plain-English goal, required access, demo mode, delivery proof, and marketplace positioning.

## 1. WhatsApp Lead Responder

**Plain-English request:** "When a new WhatsApp lead arrives, qualify it, draft a reply, and tell me what to do next."

**Buyer outcome:** Missed leads become structured follow-up tasks with draft replies.

**Channels:** WhatsApp Business, email, CRM, ClickUp, Google Sheets, Slack, or Telegram.

**Required access:** Lead source export or sandbox messages first. Live WhatsApp access only after the demo flow is approved.

**Demo mode:** Use a sample CSV or pasted message thread. The agent returns lead score, reply draft, next action, and CRM fields without sending anything.

**Delivery proof:** Before/after sample transcript, lead fields, routing decision, and no-send safety log.

**Best marketplace title:** I will set up a WhatsApp AI lead responder for your business.

## 2. Daily Owner Briefing

**Plain-English request:** "Every morning, summarize yesterday's leads, urgent messages, open tasks, and today's priorities."

**Buyer outcome:** Owner gets one operational briefing instead of checking five tools.

**Channels:** Email, Slack, Telegram, Discord, Google Calendar, CRM export, ClickUp, Linear, GitHub.

**Required access:** Read-only exports or API access for the chosen tools.

**Demo mode:** Run against sample CSV/calendar/task data and produce a briefing at the requested time format.

**Delivery proof:** Sample briefing, data-source checklist, schedule proof, and failure fallback note.

**Best marketplace title:** I will build a daily AI business briefing agent.

## 3. CRM Follow-Up Agent

**Plain-English request:** "Keep my pipeline clean and tell me who needs follow-up today."

**Buyer outcome:** Leads get statuses, owners, next steps, and stale-deal alerts.

**Channels:** ClickUp, HubSpot, Zoho, Airtable, Google Sheets, WhatsApp, email.

**Required access:** CRM export or sandbox workspace first. Live write access only after field mapping is approved.

**Demo mode:** Use sample pipeline rows and generate updated statuses, follow-up copy, and priority reasons.

**Delivery proof:** Field map, sample rows before/after, automation run log, and rollback plan.

**Best marketplace title:** I will set up a CRM follow-up AI agent for ClickUp, Zoho, or Sheets.

## 4. Reddit And GitHub Lead Monitor

**Plain-English request:** "Find posts/issues where people are asking for the thing I sell and draft helpful replies."

**Buyer outcome:** Qualified lead queue with source URLs, relevance score, and approved reply drafts.

**Channels:** Reddit, GitHub Issues, Hacker News search, Bluesky/X search where APIs are available.

**Required access:** Offer URL, target buyer profile, blocked topics, reply rules.

**Demo mode:** Scan a fixed query set and produce a non-posting lead queue.

**Delivery proof:** Lead log, scoring reasons, draft replies, and posted/not-posted status.

**Best marketplace title:** I will build an AI lead monitor for Reddit and GitHub.

## 5. Upwork Proposal Assistant

**Plain-English request:** "Find jobs that match my service, avoid bad-fit posts, and draft focused proposals."

**Buyer outcome:** Better proposal throughput with evidence-based fit scoring.

**Channels:** Upwork search, manual review queue, proposal drafts.

**Required access:** Buyer profile, target jobs, rate floor, disallowed work, portfolio links.

**Demo mode:** Score 10 pasted job URLs and draft 3 proposals without submitting.

**Delivery proof:** Job scorecard, proposal drafts, connects estimate, and risk notes.

**Best marketplace title:** I will set up an AI Upwork proposal assistant for your service business.

## 6. AI Agent Security Auditor

**Plain-English request:** "Check whether my AI agent, MCP server, Ollama instance, or inference endpoint is exposed."

**Buyer outcome:** A defensive scorecard of AI-specific exposure risks and prioritized fixes.

**Channels:** OpenClaw, MCP, Ollama, LiteLLM, vLLM, LocalAI, Open WebUI, Gradio, Streamlit, OpenAI-compatible gateways.

**Required access:** Written target scope. Passive checks first. Active testing only after explicit approval.

**Demo mode:** Assess a local or sample endpoint and produce a risk scorecard without attack payloads.

**Delivery proof:** Target inventory, auth/TLS/CORS/tool exposure evidence, score, remediation checklist.

**Best marketplace title:** I will audit your AI agent, MCP, Ollama, or OpenClaw exposure.

## 7. Durable Agent Workflow

**Plain-English request:** "Make this agent workflow reliable even if it waits for approval, retries, or resumes later."

**Buyer outcome:** A workflow plan with retryable steps, explicit approval waits, and proof logs.

**Channels:** Cloudflare Workers/Workflows, GitHub Actions, cron, queue workers, OpenClaw local jobs.

**Required access:** Workflow requirements, trigger, approval rules, and target runtime.

**Demo mode:** Run the workflow against sample input and write a proof artifact without live side effects.

**Delivery proof:** Plan JSON, step log, retry/timeout policy, and resume/disable notes.

**Best marketplace title:** I will build a durable AI agent workflow with approval gates.

## 8. Cost-Aware LLM Router

**Plain-English request:** "Stop using the expensive model for every task."

**Buyer outcome:** Prompt categories, escalation rules, and a routing report that separates cheap, standard, and strong model paths.

**Channels:** OpenClaw, OpenRouter, Gemini, Anthropic, OpenAI-compatible gateways.

**Required access:** Current model list, price assumptions, representative prompts.

**Demo mode:** Classify sample prompts locally and show the proposed route without live model calls.

**Delivery proof:** Prompt scorecard, routing rules, cost notes, and escalation triggers.

**Best marketplace title:** I will add cost-aware LLM routing to your AI agent.

## 9. Hermes VPS Assistant

**Plain-English request:** "Set up a focused Hermes assistant on a VPS with Telegram, private GitHub backup, crons, and least-privilege keys."

**Buyer outcome:** A small on-the-go assistant for scheduled low-risk workflows without giving one mega-agent every credential.

**Channels:** Telegram, CLI, private GitHub repo, VPS/container.

**Required access:** VPS, Telegram bot token, private GitHub repo/token, scoped provider keys.

**Demo mode:** Local/meta-project plan plus container setup checklist before live credentials.

**Delivery proof:** Telegram hello test, cron list, backup repo proof, env/key boundary note, security audit schedule.

**Best marketplace title:** I will set up a Hermes AI assistant on your VPS with Telegram and backups.

## 10. Agent Consent Layer

**Plain-English request:** "Make sure my agent can only do what I approved, for the time and task I approved."

**Buyer outcome:** Granular, time-bounded, revocable consent checks before sensitive tool actions.

**Channels:** OpenClaw, Hermes, MCP tools, custom orchestrators.

**Required access:** Action list, user/agent IDs, resources, risk categories.

**Demo mode:** Policy demo using fake users/resources and no live external actions.

**Delivery proof:** Consent schema, policy decisions, JIT prompt examples, revocation behavior.

**Best marketplace title:** I will add granular consent and approval policies to your AI agent.

## Catalog Delivery Standard

Every app ships with:

- one plain-English workflow definition
- one demo run before live access
- one approval boundary
- one governance checklist
- one operational runbook
- one proof artifact
- one next-step upsell

## Default Package Ladder

- **$99 App Blueprint:** one workflow map, demo data shape, and implementation plan.
- **$497 App Setup:** one app installed, demoed, and documented.
- **$1,500 App System:** one app plus live channel integration, monitoring, and handoff.
- **$299/month Managed Ops:** monthly monitoring, fixes, and one workflow improvement.

## Core Rule

Sell the app outcome first. Only explain OpenClaw, Codex, model routing, Computer Use, or cron after the buyer understands the workflow result.
