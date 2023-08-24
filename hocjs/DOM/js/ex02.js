/*
DOM Event 
- Mỗi thẻ HTML có các event nhất định ( có sẵn)
- Có event xuất hiện trong tất cả các thẻ
- Có evnet chỉ xuất hiện trong 1 số thẻ

ví dụ: 
- click
- dbclick
- mouseover
- mouseout
- mousemove

=> thẻ html nào cũng có

- submit => chỉ có trong thẻ form
- keyup,keydown => chỉ xuất hiện trong các ô nhập liệu
- play, pause, timeupdate => xuất hiện trong thẻ audo, video
*/

// B1: Tạo Element
var btn = document.querySelector(".btn");
console.log([btn]);

// B2: Gán sự kiện
btn.onclick = function () {
  console.log("Dang ky thanh cong");
};

btn.onmouseover = function () {
  console.log("Over");
};

btn.onmouseout = function () {
  console.log("Out");
};

btn.onmousemove = function () {
  console.log("Move");
};

var email = document.querySelector(".email");
email.onchange = function () {
  console.log("Da xong", email.value);
};

email.onfocus = function () {
  console.log("focus");
};

email.onblur = function () {
  console.log("Ra ngoai");
};

email.onkeyup = function (e) {
  console.log("dang go phim", e.key);
};
