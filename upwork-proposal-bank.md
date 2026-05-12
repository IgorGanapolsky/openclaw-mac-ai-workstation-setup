# Upwork Proposal Bank

Use these for high-intent Upwork jobs. Customize the first paragraph to the job post. Avoid generic AI automation claims.

## WhatsApp And CRM Automation

Hi, I can help build this as a practical agent app: WhatsApp lead intake, CRM field mapping, owner assignment, follow-up rules, and a demo workflow before anything sends live messages.

The first step I would take is to map the exact lead states and handoffs, then test the workflow with sample WhatsApp messages. Once the output looks right, I would connect the approved flow to ClickUp/Zoho/HubSpot/Sheets and keep sending approval-gated until you are comfortable with the behavior.

Suggested first milestone:

1. Confirm lead stages, fields, owners, and follow-up SLA.
2. Run a demo on sample messages.
3. Connect one channel end-to-end.
4. Add the remaining channels after the first workflow is proven.
5. Deliver a short runbook so your team can operate it.

I would rather ship one working workflow quickly than overbuild a brittle automation.

## Daily Briefing Agent

Hi, I can build this as a daily owner briefing agent: it reads the agreed sources, summarizes urgent items, flags stale tasks/leads, and sends one concise briefing at the scheduled time.

I would start with a simulator pass using sample data so you can approve the briefing format before connecting live accounts. After that, I would add the real integrations and a failure fallback so you know when a source did not load.

Deliverables:

1. Briefing format and source map.
2. Demo briefing from sample data.
3. Scheduled run.
4. Error/fallback handling.
5. Handoff runbook.

## AI Lead Monitor

Hi, I can build this as a lead-monitoring agent rather than a black-box scraper. It will search the agreed sources, score each match, store source URLs, and draft helpful replies for approval.

I would not start by posting automatically. First I would create a lead queue with scoring reasons and draft replies, then you can approve what counts as a good lead. Once the quality is proven, we can add posting or outreach rules.

Deliverables:

1. Target buyer and blocked-topic rules.
2. Query set and scoring rubric.
3. Lead queue with source URLs.
4. Draft replies.
5. Approval and logging workflow.

## Upwork Proposal Assistant

Hi, I can set this up as an Upwork proposal assistant that scores jobs, filters bad fits, estimates connects, and drafts focused proposals based on your service positioning.

I would begin with 10 sample job URLs and build the scorecard first. Then I would draft 3 proposals and tune the voice/rate/qualification rules before using it on live searches.

Deliverables:

1. Job-fit scorecard.
2. Disqualification rules.
3. Proposal templates.
4. Review queue.
5. Daily operating checklist.

## OpenClaw / Hostinger Agent Setup

Hi, I can help set up or fix your OpenClaw agent as a concrete workflow, not just a server install. The goal is one working agent app: the channel connects, the model/API keys are valid, and the workflow produces the output you expect.

I would start by checking the current deployment state, model provider, target channel, and failing logs. Then I would run a demo workflow before connecting any live outbound behavior.

Deliverables:

1. Deployment and provider check.
2. Channel setup or repair.
3. Demo workflow.
4. Live workflow handoff.
5. Troubleshooting runbook.

## AI Agent Security Audit

Hi, I can handle this as an authorized AI-agent exposure audit. I would start with passive checks only: endpoint inventory, auth posture, TLS, CORS, exposed model lists, public dashboards, MCP/tool exposure, and obvious prompt/config leakage.

I would need written scope first: domains, IPs, local gateways, MCP servers, or cloud endpoints you own or have permission to test. I do not run active attack payloads unless you separately approve that scope.

Deliverables:

1. Target inventory.
2. AI-specific exposure scorecard.
3. Evidence snippets.
4. Prioritized remediation checklist.
5. Retest note after fixes.

## Governed Agent App Build

Hi, I can build this as a governed agent app: a narrow trigger, approved tools, clear data boundaries, human approval for external actions, and a visible disable path.

The first milestone would be a demo run with sample data so you can approve the output before we connect live accounts. After that, I would add the real integration and document exactly what the agent can read, write, send, and never do.

Deliverables:

1. Plain-English workflow definition.
2. Demo output.
3. Tool/data/approval boundary.
4. Live integration.
5. Runbook and disable path.

## Durable Agent Workflow

Hi, I can build this as a durable agent workflow rather than a fragile script. The workflow would have named steps, retry limits, approval waits, failure handling, and proof logs so it can resume safely instead of depending on a terminal staying open.

I would start with a demo plan and sample input, then wire the live integration only after you approve the trigger, approval boundary, and failure behavior.

Deliverables:

1. Durable workflow plan.
2. Step and retry policy.
3. Approval wait behavior.
4. Proof log.
5. Disable/resume instructions.

## Cost-Aware LLM Routing

Hi, I can help reduce model spend by adding a simple routing layer: cheap model for low-risk formatting/extraction, standard model for normal workflow tasks, and stronger model only for security, architecture, production, or ambiguous work.

I would start by classifying representative prompts locally, then write routing rules and escalation triggers before connecting the live provider stack.

Deliverables:

1. Prompt classification scorecard.
2. Model tier map.
3. Escalation triggers.
4. Routing demo.
5. Cost/performance notes.

## Hermes VPS Assistant

Hi, I can set this up as a focused Hermes assistant rather than one overpowered mega-agent. The setup would use a VPS/container, Telegram for on-the-go commands, a private GitHub backup repo, least-privilege keys, and scheduled skills/crons for the specific workflows you want.

I would start by defining the agent role and permissions, then install and verify Telegram, backup, and cron health before adding any sensitive integrations.

Deliverables:

1. VPS/container setup plan.
2. Telegram bot hello test.
3. Private GitHub backup.
4. Nightly sync cron.
5. Weekly security audit cron.
6. Role/memory boundary note.

## Agent Consent Layer

Hi, I can add a consent layer so the agent checks exactly what it is allowed to do before every sensitive action. Instead of broad permissions like "manage email," we define actions such as read, draft, send, delete, post, deploy, refund, and run shell separately.

I would demo the policy with fake users/resources first, then wire it into the actual tool boundary after you approve the action matrix.

Deliverables:

1. Action matrix.
2. Consent record schema.
3. Policy decision function.
4. Just-in-time approval prompt.
5. Revocation and expiry behavior.

## Enterprise Claude Provider Access

Hi, I can help map the right Claude/provider path for your agent stack: direct Anthropic API, Claude Platform on AWS, Bedrock, OpenRouter, or local models.

The goal is not just model access. It is feature parity, billing ownership, IAM/API-key control, audit logging, fallback behavior, and cost-aware routing.

Deliverables:

1. Provider decision matrix.
2. Required IAM/API-key model.
3. Audit/logging plan.
4. Fallback route.
5. Cost-aware routing notes.
