/*
Scroll event

1.Lay toa do(vi tri) so voi top, left

2.scroll -> tu dong keo thanh cuon den vi tri mong muon
*/

var topBtn = document.querySelector(".top");

window.addEventListener("scroll", function () {
  //   console.log("Keo thanh cuon");
  var y = this.window.scrollY;
  //   var x = this.window.scrollX;
  //   console.log(x, y);

  if (y > 60) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", function () {
  window.scroll(0, 0);
});
// window.addEventListener("load", function () {
//   var bodyHeight = document.body.clientHeight;
//   console.log(bodyHeight);
//   window.scroll(0, bodyHeight);
// });
