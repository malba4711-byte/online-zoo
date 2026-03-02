const burger = document.getElementById("burger");
const navContainer = document.getElementById("nav-container");
const navMenu = document.getElementById("nav-menu");

function toggleMenu() {
  burger.classList.toggle("active");
  navContainer.classList.toggle("active");
}

burger.addEventListener("click", toggleMenu);

navMenu.addEventListener("click", () => {
  if (navContainer.classList.contains("active")) toggleMenu();
});

function highlightActiveLink() {
  const links = document.querySelectorAll("header nav a");
  links.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active-link");
    }
  });
}

highlightActiveLink();
