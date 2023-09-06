// DOM Navigation

// chọn thành phần cha
// - parentElement => trả về element Node
// - parentNode => trả về Node => học sau

// chọn thành phần con
// - children => trả về 1 danh sách tất cả các thành phần con trực tiếp

// chọn thành phần liền trước

// chọn thành phần liền sau

// var btn = document.querySelector(".btn");
// console.log(btn);
// console.log(btn.parentElement);
// console.log(btn.parentElement.parentElement);

// var remove = document.querySelector(".remove");

// remove.addEventListener("click", function () {
//   this.parentElement.remove();
// });

/// chữa  bài
// var removeBtnList = document.querySelectorAll(".todo .remove");
// removeBtnList.forEach(function (reomoveBtn) {
//   reomoveBtn.addEventListener("click", function () {
//     this.parentElement.remove();
//   });
// });

// ví dụ 2
// var menu = document.querySelector(".menu");
// // var menuList = document.querySelectorAll("li");
// var menuList = menu.children;
// console.log(menuList[1].children[1].children[0].innerText);

//bải tập
var menu = document.querySelector(".menu");
var itemList = document.querySelectorAll("li");
itemList.forEach(function (item) {
  var children = item.children;
  if (children.length === 2) {
    item.classList.add("has-children");
  }
});
