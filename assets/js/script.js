const toggle = document.getElementsByClassName("toggle")[0];
const menu = document.getElementsByClassName("menu")[0];
const bx = document.getElementsByClassName("bx")[0];

toggle.addEventListener("click", function () {
  menu.classList.toggle("active");
  bx.classList.toggle("bx-x");
});

const drop_down = document.getElementsByClassName("bx-chevron-down");

Array.from(drop_down).forEach((drop) => {
  drop.addEventListener("click", function () {
    drop.classList.toggle("bx-chevron-right");
  });
});
