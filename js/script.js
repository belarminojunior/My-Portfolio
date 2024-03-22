function toggleMenu() {
  const MENU = document.querySelector(".menu-links");
  const ICON = document.querySelector(".hamburger-menu");

  MENU.classList.toggle("open");
  ICON.classList.toggle("open");
}
