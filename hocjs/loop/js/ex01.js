/*
2 loại vòng lặp
1. Vòng lặp với số lần lặp xác định trước
for

for ( bienchay; dieukiendung; buocnhay) {
    Nội dung
}

2. Vòng lặp với số lần không xác định trước
while , do while
*/

// for (var i = 1; i <= 10; i++) {
//   console.log("Lan lap thu: " + i);
// }

// for (var i = 10; i >= 1; i--) {
//   console.log("Lap lap thu:" + i);
// }

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 10; j++) {
//     console.log(`i = ${i} - j = ${j}`);
//   }
// }

// bai 1: S = 1 + 2 + 3 + ... + N

var n = 10;
var s = 0;
for (var i = 1; i <= n; i++) {
  s += i;
}

console.log("Tổng = " + s);

// bài 2 : tính giá trị biểu thức
// total = 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n

var n = 5;
var total = 0;
var subTotal = 1;
for (var i = 1; i <= n; i++) {
  subTotal *= i;
  total += subTotal;
  //   console.log(subTotal);
}

console.log("Tổng = " + total);

/*
i = 1 => subTotal = 1 * 1 => total = 0 + 1 * 1
i = 2 => subTotal = 1 * 1 * 2 => total = 0 + 1 * 1 + 1 * 1 * 2
i = 3 => subTotal = 1 * 1 * 2 * 3 => total = 0 + 1 * 1 + 1 * 1 * 2 + 1 * 1 * 2 * 3
*/

/* 
bài tập 3: Vẽ tam giác sao *

*
* *
* * * 
* * * *
* * * * *

 n = số dòng = 5
*/

var n = 5;
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("* ");
  }
  document.write(`<br/>`);
}
