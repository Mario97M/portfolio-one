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
