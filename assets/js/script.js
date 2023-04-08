const toggle = document.getElementsByClassName("toggle")[0];
const menu = document.getElementsByClassName("menu")[0];
const bx = document.getElementsByClassName("bx")[0];

toggle.addEventListener("click", function () {
  menu.classList.toggle("active");
  bx.classList.toggle("bx-x");
});

const select = document.querySelectorAll(".drop-down div");

Array.from(select).forEach((sel) => {
  sel.addEventListener("click", function () {
    const chevron = this.querySelector(".bx-chevron-down");
    chevron.classList.toggle("bx-chevron-right");
  });
});

const fa_regular = document.getElementsByClassName("fa-regular");

Array.from(fa_regular).forEach((regular) => {
  regular.addEventListener("click", function () {
    regular.classList.toggle("fa-solid");
  });
});
