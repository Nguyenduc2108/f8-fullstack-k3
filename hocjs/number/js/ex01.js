// Number: kiểu dữ liệu nguyên thủy cách hoạt đọngo giống string
console.log([Number]);

var a = 10.5;
console.log(a, typeof a);
// Kiểm tra 1 biến có phải là số hay không?
if (typeof a === "number") {
  console.log("Day la so");
  // Kiem tra so nguyen
  if (Number.isInteger(a)) {
    console.log("day la so nguyen");
  } else {
    console.log("day khong phai la so nguyen");
  }
} else {
  console.log("day khong phai la so");
}

// Số NaN( Not A Number)
/*
- Ép kiểu thất bại
- tính toán các biểu thức  số học mà có 1 toán hạng mang gái trị NaN hoặc do quá trình tự đọngo ép kiểu khi thực hiện phép toán
*/
var a = NaN;
console.log(a, typeof a);

var a = "F8";
var b = 10;
var c = a - b; // - , *, / , % , **, ++ , --
if (!Number.isNaN(c)) {
  console.log(c);
} else {
  console.log("Khong tinh toan duoc");
}
// console.log(c);
// a++
// console.log(a++);
// a = +a;
// console.log(a);

// Số Infinity xuat hien khi gia tri vuot qua gia tri cho phep
var a = 1000 ** 1000;
var b = 10 / 0;
console.log(a);
console.log(b);

// Kiem tra so Infinity
if (a === Infinity) {
  console.log("Day la so Infinity");
}

var a = 10;
if (typeof a === "number" && !Number.isNaN(a) && a !== Infinity) {
  console.log("Day la so");
}
// Number : dung` thu vien
// thoi gian: dung` thu vien : moment.js

// Ép kiểu
var a = "10.5a";
// // => Ep sang kieu so nguyen
// a = Number.parseInt(a);
// console.log(a);

// => Ep sang kieu so thuc
// a = Number.parseFloat(a);
// console.log(a);

// => Ep kieu so (so nguyen , so thuc)
// a = Number(a);
a = +a;
console.log(a);

//Bai tap: Tính tổng các số chẵn của mảng sau
var numbers = [
  5,
  2,
  1,
  9,
  8,
  4,
  "10",
  -Infinity,
  undefined,
  null,
  "",
  "20abc",
  true,
  false,
];
var total = 0;
numbers.forEach(function (number) {
  number = +number;
  if (!Number.isNaN(number) && number % 2 === 0) {
    total += number;
  }
});
console.log(total);

//toFixed() =>  lấy số chữ số phần thập phân
// trả về 1 chuỗi
var a = 10.567;
a = a.toFixed(2);
console.log(a);

//toString() =>  chuyển số thành chuỗi
a = 123;
a = a.toString();
console.log(a);

// Dinh dang so
var price = 1299000.56;
price = price.toLocaleString("vi", {
  style: "currency",
  currency: "EUR",
});
console.log(price);

console.log(Math);
