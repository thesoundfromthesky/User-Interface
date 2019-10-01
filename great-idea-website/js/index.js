"use strict";

const navbar = document.querySelector(".navbar");

let prevScroll = window.pageYOffset;
window.addEventListener("scroll", e => {
  const currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    navbar.classList.remove("navbar-hide");
  } else {
    navbar.classList.add("navbar-hide");
  }

  prevScroll = currentScroll;
});
