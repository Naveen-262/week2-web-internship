// Week 2 Web Application Internship - JavaScript features

document.addEventListener("DOMContentLoaded", () => {
  const helloButton = document.getElementById("helloButton");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");
  const currentYear = document.getElementById("currentYear");

  // Feature 1: Button click interaction.
  helloButton.addEventListener("click", () => {
    alert("Hello! Thanks for visiting my portfolio.");
  });

  // Feature 2: Mobile navigation menu toggle.
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close the mobile menu after a navigation link is selected.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      menuToggle.textContent = "☰";
    });
  });

  // Feature 3: Contact form validation (demo only; no message is sent).
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fields = [nameInput, emailInput, messageInput];

    fields.forEach((field) => field.classList.remove("invalid"));
    formFeedback.className = "form-feedback";

    let errorMessage = "";

    if (nameInput.value.trim().length < 2) {
      nameInput.classList.add("invalid");
      errorMessage = "Please enter your name (at least 2 characters).";
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailInput.classList.add("invalid");
      errorMessage = "Please enter a valid email address.";
    } else if (messageInput.value.trim().length < 10) {
      messageInput.classList.add("invalid");
      errorMessage = "Please enter a message with at least 10 characters.";
    }

    if (errorMessage) {
      formFeedback.textContent = errorMessage;
      formFeedback.classList.add("error");
      return;
    }

    formFeedback.textContent = "Thank you! Your form passed validation. This demo does not send messages to a server.";
    formFeedback.classList.add("success");
    contactForm.reset();
  });

  // Keep the copyright year current.
  currentYear.textContent = new Date().getFullYear();
});
