// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Dynamic year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Simple mailto-based "submission" so the form is usable without a backend
const form = document.getElementById("contact-form");
const success = document.getElementById("form-success");

if (form && success) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const company = form.elements["company"].value;
    const teamSize = form.elements["team-size"].value;
    const message = form.elements["message"].value;

    const mailto = [
      "mailto:hello@easyofficeonline.com",
      "?subject=" +
        encodeURIComponent("Easy Office Online enquiry from " + name),
      "&body=" +
        encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nTeam size: ${teamSize}\n\nMessage:\n${message}`
        ),
    ].join("");

    window.location.href = mailto;

    success.textContent =
      "Thank you. Your email client should open with your enquiry. We will respond shortly.";
    form.reset();
  });
}
