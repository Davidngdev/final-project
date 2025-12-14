// ===== Footer year =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Mobile menu =====
const menuBtn = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");

if (menuBtn && siteNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

// ===== Back to top =====
const topBtn = document.getElementById("topBtn");
if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 250 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== Accordion (Home) =====
const accordions = document.querySelectorAll(".accordion");
accordions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    const expanded = btn.getAttribute("aria-expanded") === "true";

    btn.setAttribute("aria-expanded", String(!expanded));
    if (panel) panel.hidden = expanded;
  });
});

// ===== Projects page demo button =====
const serviceBtn = document.getElementById("serviceBtn");
const serviceMsg = document.getElementById("serviceMsg");

if (serviceBtn && serviceMsg) {
  serviceBtn.addEventListener("click", () => {
    serviceMsg.textContent = "✅ JavaScript is working — interaction confirmed.";
  });
}

// ===== Contact form validation =====
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm && formMsg) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !message) {
      formMsg.textContent = "Please fill out all fields.";
      formMsg.style.color = "#fca5a5";
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      formMsg.textContent = "Please enter a valid email address.";
      formMsg.style.color = "#fca5a5";
      return;
    }

    formMsg.textContent = "Form submitted successfully! ✅";
    formMsg.style.color = "#86efac";
    contactForm.reset();
  });
}
