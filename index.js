const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.add("show");
  menuOverlay.classList.add("active");
  menuToggle.classList.add("hide");
});
closeMenu.addEventListener("click", () => {
  mobileNav.classList.remove("show");
  menuOverlay.classList.remove("active");
  menuToggle.classList.remove("hide");
});
menuOverlay.addEventListener("click", () => {
  mobileNav.classList.remove("show");
  menuOverlay.classList.remove("active");
  menuToggle.classList.remove("hide");
});
