var Overlay = document.querySelector(".overlay");
var btn = document.querySelector(".btn");
var Group = document.querySelector(".group");
var Close = document.querySelector(".close");

btn.addEventListener("click", function () {
  Overlay.classList.add("show");
});

Overlay.addEventListener("click", function () {
  Overlay.classList.remove("show");
});
Overlay.addEventListener("click", function () {
  Group.classList.remove("show");
});

Close.addEventListener("click", function () {
  Overlay.classList.remove("show");
  Group.classList.remove("show");
});

btn.addEventListener("click", function () {
  Group.classList.add("show");
});
