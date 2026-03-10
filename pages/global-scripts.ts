const burger = document.getElementById("burger") as HTMLElement | null;
const navContainer = document.getElementById(
  "nav-container",
) as HTMLElement | null;
const navMenu = document.getElementById("nav-menu") as HTMLElement | null;

function toggleMenu(): void {
  burger?.classList.toggle("active");
  navContainer?.classList.toggle("active");
}

burger?.addEventListener("click", toggleMenu);

navMenu?.addEventListener("click", () => {
  if (navContainer?.classList.contains("active")) toggleMenu();
});

function highlightActiveLink(): void {
  const links: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll("header nav a");
  const normalizePath = (path: string): string =>
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
