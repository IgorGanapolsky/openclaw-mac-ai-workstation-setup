(function () {
  "use strict";

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
})();
