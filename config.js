// Address of the Daji OS application (the sign-in and sign-up pages live there, not on this site).
// Change this one line when the application gets its own domain.
window.DAJI_APP_URL = "https://app.dajios.com";
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[data-app]").forEach(function (a) {
    a.href = window.DAJI_APP_URL.replace(/\/$/, "") + a.getAttribute("data-app");
  });
});
// Log in opens as a pop-up on this page. The sign-in itself stays on the app so its protections are untouched.
document.addEventListener("DOMContentLoaded", function () {
  var url = window.DAJI_APP_URL.replace(/\/$/, "") + "/signin";
  var d = document.createElement("dialog");
  d.className = "lgm";
  d.setAttribute("aria-labelledby", "lgm-t");
  d.innerHTML = '<button class="lgm-x" type="button" aria-label="Close">&times;</button>' +
    '<span class="tag">Customer Portal</span><h2 id="lgm-t">Log in to Daji OS</h2>' +
    '<p>Sign in with your work account. Your sign-in page opens in this tab and uses your company\'s own branding.</p>' +
    '<a class="lgm-go" href="' + url + '">Continue to sign in</a>' +
    '<p class="lgm-s">New here? <a href="' + window.DAJI_APP_URL.replace(/\/$/, "") + '/signup">Create an account</a></p>';
  document.body.appendChild(d);
  d.querySelector(".lgm-x").addEventListener("click", function () { d.close(); });
  d.addEventListener("click", function (e) { if (e.target === d) d.close(); });
  document.querySelectorAll('a[data-app="/signin"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      if (typeof d.showModal !== "function") return;
      e.preventDefault();
      d.showModal();
    });
  });
});
