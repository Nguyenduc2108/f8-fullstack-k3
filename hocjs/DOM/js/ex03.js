var handleClick = function () {
  console.log("Dang ky  khoa hoc hanh cong");
};

var handleInput = function () {
  console.log("Ban dang go");
};

/*
Gán sự kiện thông qua DOM 
Gán sự kiến vào thuộc tính HTML 
=> Event Handler

Nhược điểm: 
Trong 1 element => Không gán được 2 sự kiện giống nhau
*/
var btn = document.querySelector(".btn");
// btn.onclick = function () {
//   console.log("hanh dong 1");
// };

// //if else
// btn.onclick = function () {
//   console.log("hanh dong 2");
// };

//Event Listener

//1. addEventListener(type, listener)
var handleClick = function () {
  console.log("hanh dong 1");
};
btn.addEventListener("click", handleClick);

// btn.addEventListener("click", function () {
//   console.log("hanh dong 2");
// });

// 2. removeEventListener(type, listener)
// => Loại bỏ listener khỏi element
var finishBtn = document.querySelector(".finish");

finishBtn.addEventListener("click", function () {
  console.log("Da hoan thanh");
  btn.removeEventListener("click", handleClick);
});
