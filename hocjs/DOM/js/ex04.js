// //DOM HTML: thao tác với nội dung , thuộc tính HTML

// var content = document.querySelector(".content");

// //1. lấy nội dung trong thẻ HTML(tất cả)
// console.log(content.innerHTML);

// //2. Lấy nội dung trong thẻ HTML( Chỉ lấy text) (cách thức: dùng css để ẩn html đi nhưng thẻ html vẫn ở đấy, mất đi khoăng trắng của thẻ html)
// console.log(content.innerText);
// // console.log(content.outerTex); ( Giống innerText)

// //3. Lấy nội dung trong thẻ html( chỉ lấy text nhưng lại giữ nguyên khoảng trắng)
// console.log(content.textContent);

// //4. lấy nội dung bao gồm element đang tác động
// console.log(content.outerHTML);

/// Cập nhật nội dung HTML
// content.innerHTML = `<h1>Javascript không khó</h1>`;

// content.innerText = `<h1>Javascript không khó</h1>`;

// content.outerHTML = `<h1>Javascript không khó</h1>`;

// content.innerText = "";

//Bài tập: Xây dựng Counter
// var number = document.querySelector(".number");
// var down = document.querySelector(".down");
// var up = document.querySelector(".up");

// up.addEventListener("click", function () {
//   number.innerText++;
// });

// down.addEventListener("click", function () {
//   number.innerText--;
// });

/*
Bước 1: Tạo element
- Nút +
- Nút -
- Thẻ h1

Bước 2: Gán sự kiện vào 2 button

Bước 3: Xử lý logic tăng/giảm
- Logic tăng
+ Lấy giá trị cũ của thẻ h1
+ Tăng lên 1 đơn vị
+ Cập nhật lại vào thẻ h1

- Logic giảm
+ Lấy giá trị cũ của thẻ h1
+ Giảm lên 1 đơn vị
+ Cập nhật lại vào thẻ h1
*/

//// CHỮA BÀI
var number = document.querySelector(".number");
var downBtn = document.querySelector(".down");
var upBtn = document.querySelector(".up");

var countUp = 0;
var countDown = 0;

upBtn.addEventListener("click", function () {
  var count = number.innerText;
  count++;
  countUp++;
  number.innerText = count;
  this.querySelector("span").innerText = countUp;
});

downBtn.addEventListener("click", function () {
  var count = number.innerText;
  count--;
  countDown++;
  number.innerText = count;
  this.querySelector("span").innerText = countDown;
});
