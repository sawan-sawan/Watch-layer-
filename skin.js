const mobileNav1 = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav1.classList.toggle("hamburger-active");
};
mobileNav1.addEventListener("click", () => toggleNav());