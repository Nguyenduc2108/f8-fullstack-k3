// Bài 1:
console.log(`Bài 1: `);
var a = 3;
var b = 2;
console.log(`Before`, ` a = ` + a, ` b = ` + b);

a = a + b;
b = a - b;
a = a - b;
console.log(`After`, `a = ` + a, ` b = ` + b);
console.log(`========`);

// Bài 2:
console.log(`Bài 2:`);
var sum = 10 + 20 + 5 ** 10 / 2;
console.log("Tổng = " + sum);
console.log(`========`);

// Bài 3:
console.log(`Bài 3:`);
var a = 1;
var b = 2;
var c = 3;
var max = a;
if (b > max) {
  max = b;
}
if (c > max) {
  max = c;
}
console.log(`Số lớn nhất = ` + max);
console.log(`========`);

// Bài 4:
console.log(`Bài 4: `);
var a = 1;
var b = -1;

if (a * b > 0) {
  console.log(` 2 số cùng dấu`);
} else if (a * b < 0) {
  console.log(` 2 số ngược dấu`);
} else {
  console.log(` 1 trong 2 số = 0`);
}
console.log(`========`);

// Bài 5:
console.log(`Bài 5: `);
var a = 10;
var b = 6;
var c = 8;
console.log(`Begin: ${a} ${b} ${c}`);
if (a > b) {
  var temp = a;
  a = b;
  b = temp;
}
if (b > c) {
  var temp = b;
  b = c;
  c = temp;
}
if (a > b) {
  var temp = a;
  a = b;
  b = temp;
}
console.log(`After: ${a} ${b} ${c}`);
