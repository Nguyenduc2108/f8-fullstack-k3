//DOMContentLoaded => Cay DOM duoc hinh thanh
window.addEventListener("DOMContentLoaded", function () {
  var img = document.querySelector("img");
  console.log(img);
  console.log(img.width);
  img.id = "image";
});

// load => Tat ca tai nguyen tren trang web duoc tai: css,js,img,video,audio,..
window.addEventListener("load", function () {
  //   var img = document.querySelector("img");
  //   console.log(img.width);
  var preloader = this.document.querySelector(".preloader");
  preloader.classList.add("hide");
  console.log(window.performance);
});
