import { inView, animate, scroll } from "https://cdn.skypack.dev/motion";

document.querySelectorAll("section").forEach((item) => {
  scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
    target: item,
    offset: ["start end", "end end", "start start", "end start"],
  });
});

const toggleButton = document.getElementsByClassName("toggle-button-nav")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbarButton = document.getElementsByClassName("navbar-button")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbarButton.classList.toggle("active");
});
