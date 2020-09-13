function navToggle() {
  const navHead = document.querySelector(".nav-head");
  navHead.classList.toggle("toggle");
  var btn = document.querySelector(".toggle-btn");
  btn.classList.toggle("toggle");
  var navToggle = document.querySelector(".nav-toggle");
  navToggle.classList.toggle("toggle");
}

window.addEventListener("resize", myFunction);

function hide() {
  const navHead = document.querySelector(".nav-head");
  const btn = document.querySelector(".toggle-btn");
  const navToggle = document.querySelector(".nav-toggle");
  navToggle.classList.add("toggle");

  navHead.classList.add("toggle");
  btn.classList.add("toggle");
}

function myFunction() {
  let w = document.body.offsetWidth;
  if (w <= 885) hide();
}
