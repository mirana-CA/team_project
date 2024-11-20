const hamburger = document.querySelector(".nav_Toggle");
const navbar = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
