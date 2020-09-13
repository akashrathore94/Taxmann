function navToggle() {
  const navHead = document.querySelector(".nav-head");
  navHead.classList.toggle("toggle");
  var btn = document.querySelector(".toggle-btn");
  btn.classList.toggle("toggle");
  var navToggle = document.querySelector(".nav-toggle");
  navToggle.classList.toggle("toggle");
}

function asideToggle() {
  const asideHead = document.querySelector(".aside-head");
  asideHead.classList.toggle("toggle");
  var btn = document.querySelector(".aside-toggle-btn");
  btn.classList.toggle("toggle");
  var asideToggle = document.querySelector(".aside-nav-toggle");
  asideToggle.classList.toggle("toggle");
}

window.addEventListener("resize", myFunction);

function hide() {
  const navHead = document.querySelector(".nav-head");
  const asideHead = document.querySelector(".aside-head");
  const btn = document.querySelector(".toggle-btn");
  const asideBtn = document.querySelector(".aside-toggle-btn");
  const navToggle = document.querySelector(".nav-toggle");
  const asideToggle = document.querySelector(".aside-nav-toggle");
  navToggle.classList.add("toggle");
  asideToggle.classList.add("toggle");
  navHead.classList.add("toggle");
  asideHead.classList.add("toggle");
  btn.classList.add("toggle");
  asideBtn.classList.add("toggle");
}

function myFunction() {
  let w = document.body.offsetWidth;
  if (w <= 885) hide();
}
myFunction();
