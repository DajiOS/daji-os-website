// Address of the Daji OS application (the sign-in and sign-up pages live there, not on this site).
// Change this one line when the application gets its own domain.
window.DAJI_APP_URL = "https://app.dajios.com";
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[data-app]").forEach(function (a) {
    a.href = window.DAJI_APP_URL.replace(/\/$/, "") + a.getAttribute("data-app");
  });
});
