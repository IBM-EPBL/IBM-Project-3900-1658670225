const navBtn = document.querySelector(".nav__btn");
const navLinks = document.querySelector("nav");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show__nav");
});
