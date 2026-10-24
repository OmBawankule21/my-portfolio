
document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Replace this with your real email address before publishing.
const portfolioEmail = "your.email@example.com";

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please complete all fields.";
    return;
  }

  if (portfolioEmail === "your.email@example.com") {
    formStatus.textContent =
      "Please update portfolioEmail in script.js with your email before using this form.";
    return;
  }

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  formStatus.textContent = "Opening your email application...";
  window.location.href =
    `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  topBtn.style.display = window.scrollY > 350 ? "block" : "none";
});

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
