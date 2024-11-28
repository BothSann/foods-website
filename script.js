"use strict";

const icons = document.querySelectorAll(".section-1__icons .fas");

setInterval(function () {
  const activeIcon = document.querySelector(".section-1__icons .show");

  if (activeIcon) {
    // console.log(activeIcon);
    activeIcon.classList.remove("show");
  }

  let nextIcon;
  nextIcon = activeIcon.nextElementSibling || icons[0];
  nextIcon.classList.add("show");

  // console.log(nextIcon);
}, 1500);
