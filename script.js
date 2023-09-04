document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-elements ul li");

  navItems.forEach(item => {
    item.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

function getCurrentYear() {
  const currentYear = document.getElementById("currentYear");
  currentYear.textContent = new Date().getFullYear();
}
getCurrentYear();

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const thankyouMessage = document.getElementById("thankyouMessage");

  contactForm.addEventListener("submit", () => {
    thankyouMessage.innerText = "Thankyou for submitting your message!";
  });
});
