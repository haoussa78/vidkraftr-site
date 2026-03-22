// Detect if user is logged in on app.vidkraftr.co via cross-subdomain cookie
// and redirect "Get Started" / "Login" links to the dashboard
(function () {
  var isLoggedIn = document.cookie.split(";").some(function (c) {
    return c.trim().startsWith("vk_logged_in=1");
  });

  if (!isLoggedIn) return;

  var APP = "https://app.vidkraftr.co";
  var links = document.querySelectorAll('a[href*="app.vidkraftr.co/signup"], a[href*="app.vidkraftr.co/login"]');

  links.forEach(function (link) {
    link.href = APP + "/dashboard";
  });
})();