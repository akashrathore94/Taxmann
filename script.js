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

document.querySelector(".pro-btn").addEventListener("click", function () {
  document.querySelector(".pro-show").classList.toggle("show");
  document.querySelector(".first").classList.toggle("rotate");
});

document.querySelector(".nsm-btn").addEventListener("click", function () {
  document.querySelector(".nsm-show").classList.toggle("show");
  document.querySelector(".second").classList.toggle("rotate");
});

document.querySelector(".jour-btn").addEventListener("click", function () {
  document.querySelector(".jour-show").classList.toggle("show");
  document.querySelector(".third").classList.toggle("rotate");
});

document.querySelector(".tax-btn").addEventListener("click", function () {
  document.querySelector(".tax-show").classList.toggle("show");
  document.querySelector(".fourth").classList.toggle("rotate");
});

document.querySelector(".taxmann-btn").addEventListener("click", function () {
  document.querySelector(".taxmann-show").classList.toggle("show");
  document.querySelector(".fifth").classList.toggle("rotate");
});

document.querySelector(".web-btn").addEventListener("click", function () {
  document.querySelector(".web-show").classList.toggle("show");
  document.querySelector(".sixth").classList.toggle("rotate");
});
