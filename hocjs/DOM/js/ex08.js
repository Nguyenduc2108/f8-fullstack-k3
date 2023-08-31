// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function (e) {
//   // e= event object => trả về thông tin của sự kiện
//   // mỗi sự kiện lại có thông tin khác nhau
//   console.log("click");
//   console.log(this);
//   console.log(e);
// });

var btn = document.querySelector(".btn");
btn.addEventListener("mousedown", function (e) {
  // e= event object => trả về thông tin của sự kiện
  // mỗi sự kiện lại có thông tin khác nhau
  //   console.log("click");
  //   console.log(this);
  //   console.log(e);
  if (e.which === 1) {
    this.style.background = "red";
  }
});

var nameEl = document.querySelector(".name");
nameEl.addEventListener("keyup", function (e) {
  //   console.log(e);
  if (e.key === "Enter") {
    console.log(this.value);
  }
});

document.addEventListener("keyup", function (e) {
  //   console.log(e);
  //Giữ Ctrl + Enter => chuyển cả trang thành màu đỏ
  // Enter => khôi phục lại như ban đấu
  if (e.ctrlKey && e.key === "Enter") {
    document.body.style.background = "red";
  } else if (e.key === "Enter") {
    document.body.style.background = "initial";
  }
});
