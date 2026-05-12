# OpenClaw Agent App Intake

Use this intake to turn a buyer request into a demoable OpenClaw agent app.

## Plain-English Request

Complete this sentence:

> I want an agent that...

Examples:

- checks WhatsApp leads and drafts replies
- sends me a 7 AM owner briefing
- keeps my CRM follow-ups clean
- finds Reddit/GitHub leads and drafts helpful replies
- scores Upwork jobs and drafts proposals

## Buyer Inputs

- Business type:
- App selected:
- Current tools:
- Target channel:
- What should trigger the app:
- What should the app produce:
- What should it never do:
- Who approves external actions:
- Who owns the app after delivery:
- What data must never be stored in logs:
- How should the app be disabled:
- Desired delivery date:

## Demo Data

Start with demo data before live access:

- 5 to 20 sample messages, rows, tasks, or job URLs
- expected output format
- examples of good and bad responses
- blocked words, topics, or customers

## Access Required After Demo Approval

- read-only access:
- write access:
- API key or OAuth:
- production channel:
- fallback contact:

## Governance

- Trigger is narrow and documented:
- Human approval is required for external actions:
- Read tools are separated from write tools:
- Logs redact secrets and sensitive customer data:
- Failure behavior is defined:
- Disable path is accepted:

## Delivery Proof

The delivery is not complete until these exist:

- demo input
- demo output
- approval boundary
- live setup note
- run log
- rollback or disable instruction

## Qualification Rules

Good fit:

- clear repeated workflow
- buyer can provide samples
- output can be verified
- external actions can be approval-gated

Bad fit:

- vague "make me money" request with no channel
- no access and no demo data
- regulated or legal/tax/medical decisions without expert review
- buyer wants secret scraping, spam, or platform-policy bypass
