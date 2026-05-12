#!/usr/bin/env node
const now = new Date("2026-05-12T21:30:00Z");

const consents = [
  {
    consent_id: "consent_allowed",
    user_id: "user_igor",
    agent_id: "agent_content",
    allowed_actions: ["read_calendar", "draft_email"],
    denied_actions: ["send_email", "delete_email"],
    resources: ["calendar:primary", "email:inbox"],
    expires_at: "2026-05-12T22:00:00Z",
    max_uses: 5,
    uses: 1,
    revoked: false,
  },
  {
    consent_id: "consent_expired",
    user_id: "user_igor",
    agent_id: "agent_ops",
    allowed_actions: ["run_shell"],
    denied_actions: [],
    resources: ["vps:demo"],
    expires_at: "2026-05-12T20:00:00Z",
    max_uses: 5,
    uses: 1,
    revoked: false,
  },
  {
    consent_id: "consent_revoked",
    user_id: "user_igor",
    agent_id: "agent_finance",
    allowed_actions: ["read_finance"],
    denied_actions: ["issue_refund"],
    resources: ["stripe:dashboard"],
    expires_at: "2026-05-13T20:00:00Z",
    max_uses: 5,
    uses: 1,
    revoked: true,
  },
];

const criticalActions = new Set(["issue_refund", "delete_email", "transfer_money", "change_firewall"]);
const highRiskActions = new Set(["send_email", "post_public", "run_shell", "deploy_code"]);

function risk(action) {
  if (criticalActions.has(action)) return "critical";
  if (highRiskActions.has(action)) return "high";
  if (/write|modify|create/.test(action)) return "medium";
  return "low";
}

function evaluate(request) {
  const consent = consents.find((item) => item.consent_id === request.consent_id);
  if (!consent) return { allow: false, reason: "missing_consent", jit_prompt: true };
  if (consent.revoked) return { allow: false, reason: "revoked", jit_prompt: false };
  if (new Date(consent.expires_at) <= now) return { allow: false, reason: "expired", jit_prompt: true };
  if (consent.uses >= consent.max_uses) return { allow: false, reason: "max_uses_exceeded", jit_prompt: true };
  if (consent.user_id !== request.user_id || consent.agent_id !== request.agent_id) {
    return { allow: false, reason: "identity_mismatch", jit_prompt: false };
  }
  if (consent.denied_actions.includes(request.action)) {
    return { allow: false, reason: "explicitly_denied", jit_prompt: true };
  }
  if (!consent.allowed_actions.includes(request.action)) {
    return { allow: false, reason: "action_not_allowed", jit_prompt: true };
  }
  if (!consent.resources.includes(request.resource)) {
    return { allow: false, reason: "resource_not_allowed", jit_prompt: true };
  }
  const actionRisk = risk(request.action);
  if (["high", "critical"].includes(actionRisk) && !request.confirmed_once) {
    return { allow: false, reason: "requires_just_in_time_confirmation", risk: actionRisk, jit_prompt: true };
  }
  return { allow: true, reason: "allowed", risk: actionRisk, jit_prompt: false };
}

const requests = [
  { consent_id: "consent_allowed", user_id: "user_igor", agent_id: "agent_content", action: "read_calendar", resource: "calendar:primary" },
  { consent_id: "consent_allowed", user_id: "user_igor", agent_id: "agent_content", action: "send_email", resource: "email:inbox" },
  { consent_id: "consent_expired", user_id: "user_igor", agent_id: "agent_ops", action: "run_shell", resource: "vps:demo", confirmed_once: true },
  { consent_id: "consent_revoked", user_id: "user_igor", agent_id: "agent_finance", action: "read_finance", resource: "stripe:dashboard" },
  { consent_id: "missing", user_id: "user_igor", agent_id: "agent_content", action: "post_public", resource: "x:account" },
];

const decisions = requests.map((request) => ({ request, decision: evaluate(request) }));
console.log(JSON.stringify({ ok: true, now: now.toISOString(), decisions }, null, 2));
