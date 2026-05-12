# AI Agent Security Audit

This offer is the defensive version of the AIMap market signal: public AI endpoints, MCP servers, Ollama instances, inference proxies, and agent tools are increasingly exposed without authentication, rate limits, or safe tool boundaries.

## Buyer Outcome

Find and fix obvious AI-agent exposure before someone else does.

## Authorized Scope Only

This is not internet-wide scanning. The buyer must provide written scope:

- domains
- IP ranges
- cloud accounts
- local gateways
- MCP servers
- OpenClaw/agent endpoints
- inference gateways

No active attack testing runs outside buyer-owned or explicitly authorized targets.

## Passive Checks

- exposed host and port inventory
- TLS state
- authentication response check
- CORS posture
- framework fingerprint where visible
- public documentation/config leakage
- unauthenticated `/v1/models` style endpoint checks
- known dashboard and UI exposure checks

## Agent-Specific Checks

- MCP tool enumeration boundary
- tool descriptions that can carry prompt injection
- exposed code-execution tools
- exposed browser/computer-use tools
- system prompt leakage
- model enumeration
- completion endpoint abuse risk
- signup or anonymous access posture

## Risk Score

Each target gets a 0-10 score based on:

- no authentication
- unknown or inconsistent authentication
- open CORS
- missing TLS
- exposed model list
- exposed tools
- high-risk tools such as code execution, browser automation, shell, file write, or outbound messaging
- leaked prompts or config
- dangerous combinations

Scores above 7 require immediate owner review.

## Deliverables

- scoped target inventory
- exposure scorecard
- evidence snippets
- remediation checklist
- retest note
- no-exploit attestation unless the buyer separately approves active testing

## Marketplace Positioning

Title:

> I will audit your AI agent, MCP, Ollama, or OpenClaw exposure

First milestone:

> Authorized passive exposure review for up to 5 AI endpoints, with scorecard and remediation checklist.

Boundary:

> I only test systems you own or have written authorization to assess.
