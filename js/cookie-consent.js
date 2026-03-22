/**
 * RGPD/GDPR Cookie Consent Banner
 * Compliant with EU regulations — blocks analytics/marketing cookies until consent.
 */
(function () {
  var CONSENT_KEY = "vk_cookie_consent";
  var consent = localStorage.getItem(CONSENT_KEY);

  // If already consented, do nothing
  if (consent === "accepted" || consent === "rejected") return;

  // Build banner
  var banner = document.createElement("div");
  banner.id = "cookie-consent-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Cookie consent");
  banner.innerHTML =
    '<div class="cc-inner">' +
    '<div class="cc-text">' +
    "<p>We use cookies to improve your experience and analyze site traffic. " +
    "By clicking <strong>Accept</strong>, you consent to the use of analytics cookies. " +
    'You can change your preferences at any time. <a href="#" class="cc-link">Learn more</a></p>' +
    "</div>" +
    '<div class="cc-buttons">' +
    '<button id="cc-reject" class="cc-btn cc-btn-secondary">Reject</button>' +
    '<button id="cc-accept" class="cc-btn cc-btn-primary">Accept</button>' +
    "</div>" +
    "</div>";

  // Styles
  var style = document.createElement("style");
  style.textContent =
    "#cookie-consent-banner{position:fixed;bottom:0;left:0;right:0;z-index:99999;background:#111;border-top:1px solid rgba(74,222,128,.25);padding:1rem 1.5rem;font-family:'Inter Tight',sans-serif;color:#fff;animation:cc-slide-up .3s ease}" +
    "@keyframes cc-slide-up{from{transform:translateY(100%)}to{transform:translateY(0)}}" +
    ".cc-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap}" +
    ".cc-text{flex:1;min-width:280px;font-size:.875rem;line-height:1.5;color:rgba(255,255,255,.8)}" +
    ".cc-text p{margin:0}" +
    ".cc-link{color:#4ade80;text-decoration:underline}" +
    ".cc-buttons{display:flex;gap:.75rem;flex-shrink:0}" +
    ".cc-btn{border:none;border-radius:.5rem;padding:.625rem 1.25rem;font-size:.875rem;font-weight:600;cursor:pointer;transition:opacity .15s}" +
    ".cc-btn:hover{opacity:.85}" +
    ".cc-btn-primary{background:#4ade80;color:#0a0a0a}" +
    ".cc-btn-secondary{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.25)}" +
    "@media(max-width:600px){.cc-inner{flex-direction:column;text-align:center}.cc-buttons{width:100%;justify-content:center}}";

  document.head.appendChild(style);
  document.body.appendChild(banner);

  function dismiss(choice) {
    localStorage.setItem(CONSENT_KEY, choice);
    banner.style.animation = "none";
    banner.style.transition = "transform .3s ease";
    banner.style.transform = "translateY(100%)";
    setTimeout(function () {
      banner.remove();
    }, 300);
  }

  document.getElementById("cc-accept").addEventListener("click", function () {
    dismiss("accepted");
  });

  document.getElementById("cc-reject").addEventListener("click", function () {
    dismiss("rejected");
  });

  // Allow re-opening from footer "Cookies Settings" link
  var settingsLink = document.getElementById("open-cookie-settings");
  if (settingsLink) {
    settingsLink.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem(CONSENT_KEY);
      // Re-show banner
      banner.style.transform = "translateY(0)";
      banner.style.transition = "transform .3s ease";
      document.body.appendChild(banner);
    });
  }
})();
