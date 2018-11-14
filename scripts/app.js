const body = document.querySelector("body");

const nav = body.querySelector(".header__nav");
const open = body.querySelector(".header__nav__icon");

open.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});
