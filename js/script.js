"user strict";

let menu = document.querySelector(".menuMobil");
let menuOpen = document.querySelector("nav ul");

menu.addEventListener("click", () => {
  menuOpen.classList.toggle("openerMenu");
  if (menuOpen.classList.contains("openerMenu")) {
    document.querySelector(".blur").style.opacity = 0.5;
  } else {
    document.querySelector(".blur").style.opacity = 1;
  }
});
