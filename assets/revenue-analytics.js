(function () {
  "use strict";

  var eventNames = {
    checkoutClick: "checkout_click",
    checkoutAbandonReason: "checkout_abandon_reason",
    offerObjectionClick: "offer_objection_click",
  };

  window.plausible =
    window.plausible ||
    function () {
      (window.plausible.q = window.plausible.q || []).push(arguments);
    };

  function pickDataset(link) {
    return {
      source: link.dataset.source || "openclaw",
      tier: link.dataset.tier || "",
      price: link.dataset.price || "",
      placement: link.dataset.placement || "",
      surface: link.dataset.surface || link.dataset.source || window.location.pathname,
      page_path: window.location.pathname,
      href_host: link.hostname || "",
      client_reference_id: clientReferenceId(link.href),
    };
  }

  function clientReferenceId(href) {
    try {
      return new URL(href).searchParams.get("client_reference_id") || "";
    } catch (_) {
      return "";
    }
  }

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target && event.target.closest
        ? event.target.closest("[data-track]")
        : null;
      if (!link) return;

      var eventName = link.dataset.track;
      if (!eventName) return;

      window.plausible(eventName, { props: pickDataset(link) });
    },
    true
  );

  function track(eventName, props) {
    var payload = Object.assign(
      {
        page_path: window.location.pathname,
        page_title: document.title,
        referrer: document.referrer || "",
      },
      props || {}
    );
    try {
      window.plausible(eventName, { props: payload });
    } catch (_) {}
    try {
      if (window.gtag) window.gtag("event", eventName, payload);
    } catch (_) {}
  }

  function hasCheckoutSurface() {
    return Boolean(document.querySelector("[data-track='checkout_click']"));
  }

  function buildSurvey() {
    var wrap = document.createElement("aside");
    wrap.setAttribute("aria-label", "Purchase feedback");
    wrap.style.cssText =
      "position:fixed;right:16px;bottom:16px;z-index:9999;width:min(320px,calc(100vw - 32px));background:#111827;color:#f9fafb;border:1px solid #374151;border-radius:8px;box-shadow:0 16px 40px rgba(0,0,0,.35);padding:14px;font:14px/1.4 system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif";
    wrap.innerHTML =
      '<button type="button" data-survey-close aria-label="Close feedback" style="float:right;background:transparent;border:0;color:#9ca3af;font-size:18px;line-height:1;cursor:pointer">x</button>' +
      '<strong style="display:block;margin:0 24px 8px 0;font-size:14px">Not buying today?</strong>' +
      '<div style="display:grid;gap:8px">' +
      '<button type="button" data-reason="price_unclear">Price or scope unclear</button>' +
      '<button type="button" data-reason="need_sample">Need a better sample</button>' +
      '<button type="button" data-reason="not_urgent">Not urgent right now</button>' +
      '<button type="button" data-reason="trust_gap">Need more proof first</button>' +
      "</div>";
    Array.prototype.forEach.call(wrap.querySelectorAll("button[data-reason]"), function (btn) {
      btn.style.cssText =
        "text-align:left;border:1px solid #374151;background:#1f2937;color:#f9fafb;border-radius:6px;padding:8px 10px;cursor:pointer";
      btn.addEventListener("click", function () {
        track(eventNames.checkoutAbandonReason, {
          reason: btn.getAttribute("data-reason"),
          surface: window.location.pathname,
        });
        wrap.remove();
      });
    });
    wrap.querySelector("[data-survey-close]").addEventListener("click", function () {
      track(eventNames.offerObjectionClick, {
        action: "dismiss",
        surface: window.location.pathname,
      });
      wrap.remove();
    });
    return wrap;
  }

  function maybeShowSurvey() {
    if (!hasCheckoutSurface()) return;
    if (window.__openclawSurveyShown) return;
    window.__openclawSurveyShown = true;
    window.setTimeout(function () {
      if (!document.body || document.querySelector("[aria-label='Purchase feedback']")) return;
      document.body.appendChild(buildSurvey());
    }, 45000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", maybeShowSurvey);
  } else {
    maybeShowSurvey();
  }
})();
