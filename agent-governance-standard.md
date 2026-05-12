# Agent Governance Standard

This standard converts agent regulation and safety guidance into practical delivery requirements for OpenClaw agent apps.

## Principles

Every agent app must be:

- safe and controllable
- orderly and standardized
- application-driven
- documented enough for handoff
- reversible or disableable

## Required Controls

### 1. Human Approval Boundary

Define which actions require explicit approval:

- sending messages
- posting publicly
- changing CRM records
- spending money
- deleting data
- calling external APIs with customer impact

### 1a. Granular Consent Boundary

Store allowed and denied actions separately. Do not grant coarse scopes such as "manage email" when the app only needs `read_email` or `draft_email`.

Consent records should include:

- user ID
- agent ID
- allowed actions
- denied actions
- resource scope
- expiration time
- maximum uses
- revocation state

### 2. Data Boundary

Document:

- data sources
- data retained
- data excluded
- customer secrets
- log redaction rules

### 3. Tool Boundary

Document:

- tools available to the app
- tools explicitly blocked
- write permissions
- outbound permissions
- rate limits

### 4. Failure Boundary

Document:

- what happens if a source fails
- what happens if the model is unavailable
- what happens if the output is low confidence
- how to disable the app

### 5. Proof Boundary

Every delivery needs:

- demo input
- demo output
- run log
- acceptance criteria
- rollback path

## Governance Checklist

- [ ] Workflow has a named owner
- [ ] App has a plain-English purpose
- [ ] App has a limited trigger
- [ ] App has explicit non-goals
- [ ] Consent has `expires_at` and `max_uses`
- [ ] Consent is checked on every action
- [ ] Live actions are approval-gated
- [ ] Logs avoid secrets and sensitive customer data
- [ ] Buyer reviewed demo output before live access
- [ ] Disable path is documented

## Upwork Positioning

Use this when a buyer asks for "AI automation" but the actual risk is operational control:

> I can build this as an approval-gated agent app: first a demo workflow, then controlled live integration, with clear rules for what the agent can read, write, send, and never do.
