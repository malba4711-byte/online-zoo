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
  const normalizePath = (path) =>
    path.replace(/\/index\.html$/, "").replace(/\/$/, "");
  const currentPath = normalizePath(window.location.pathname);

  links.forEach((link) => {
    const linkPath = normalizePath(new URL(link.href).pathname);
    if (linkPath === currentPath) {
      link.classList.add("active-link");
    }
  });
}

highlightActiveLink();
