"use strict"; // bật chế độ nghiêm ngặt cho cả file

// a = 10;
// console.log(a);

// function getMsg(msg) {
//   console.log(msg);
// }
// getMsg();

// JavaScript Hoisting
/*
 - Cơ chế mặc định của JS
 - tự động đẩy khai báo biến và hàm lên trước đoạn code thực thi
 - Chỉ đẩy phần khai báo , không đẩy giá trị
 - Với function: chỉ áp dụng với function declaration(không áp dụng với function expression)
 - Không áp dụng với từ khóa const, let
 */

// a = 10;
// console.log(a);
// var a;

// console.log(a);
// var a = 10;

getMsg();

function getMsg() {
  console.log("Hello F8");
}
