import { inView, animate, scroll } from "https://cdn.skypack.dev/motion";

inView("body", ({ target }) => {
  animate(
    target.querySelector(".fade"),
    { opacity: 1, x: [-70, -50, 0] },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});

const toggleButton = document.getElementsByClassName("toggle-button-nav")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbarButton = document.getElementsByClassName("navbar-button")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbarButton.classList.toggle("active");
});
