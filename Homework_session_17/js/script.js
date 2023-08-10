/*Bài 1:
Tính tiền cước taxi dựa vào các điều kiện sau
Số km ≤ 1 giá 15000đ
1 < số km ≤ 5 giá 13500đ
Số km > 5 giá 11000đ
Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền
*/
var kilometer = 1;
const km_1 = 1;
const km_2 = 4;
const km_3 = 5;
var discount = 0;
var total = 0;
if (kilometer > 0 && kilometer <= 1) {
  total = kilometer * 15000;
} else if (kilometer > 1 && kilometer <= 5) {
  total = km_1 * 15000 + (kilometer - 1) * 13500;
} else if (kilometer > 5) {
  total = km_1 * 15000 + km_2 * 13500 + (kilometer - 5) * 11000;
}

if (kilometer > 120) {
  discount = total * 0.1;
  total = total - discount;
}

console.log(`Ex1:`);
console.log(`Tiền cước taxi của ${kilometer}km là: ${total}vnđ`);
console.log(`============`);

//Bài 2
var total = function (number) {
  var price_1 = 1.678;
  var price_2 = 1.734;
  var price_3 = 2.014;
  var price_4 = 2.536;
  var price_5 = 2.834;
  var price_6 = 2.927;
  var cost = 0;
  if (number > 0 && number <= 50) {
    cont = number * price_1;
  } else if (number > 50 && number <= 100) {
    cost = 50 * price_1 + (number - 50) * price_2;
  } else if (number > 100 && number <= 200) {
    cost = 50 * price_1 + 50 * price_2 + (number - 100) * price_3;
  } else if (number > 200 && number <= 300) {
    cost =
      50 * price_1 + 50 * price_2 + 100 * price_3 + (number - 200) * price_4;
  } else if (number > 300 && number <= 400) {
    cost =
      50 * price_1 +
      50 * price_2 +
      100 * price_3 +
      100 * price_4 +
      (number - 300) * price_5;
  } else if (number > 400) {
    cost =
      50 * price_1 +
      50 * price_2 +
      100 * price_3 +
      100 * price_4 +
      100 * price_5 +
      (number - 400) * price_6;
  } else {
    cost = 0;
  }
  console.log(`Bài 2:`);
  console.log(`Số tiền điện phải trả là: ${cost}vnđ`);
};
total(100);
console.log(`========`);

//bài 3
function calculate(n) {
  var total = 0;
  for (var i = 1; i <= n; i++) {
    total += i * (i + 1);
  }
  return total;
}
const n = 5;
const result = calculate(n);
console.log(`Bài 3:`);
console.log(`Tổng S có n = ${n} là ${result}`);
console.log(`========`);

// Bài 4
console.log(`Bài 4:`);
function kiemtraSNT(number) {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
    return true;
  }
}
const checkNumber = 17;
if (kiemtraSNT(checkNumber)) {
  console.log(`${checkNumber} là số nguyên tố`);
} else {
  console.log(`${checkNumber} không là số nguyên tố`);
}
console.log(`========`);

//Bài 5
console.log(`Bài 5:`);
function triangle(n) {
  var num = 1;
  for (var i = 1; i <= n; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
      row += num + "\t";
      num++;
    }
    console.log(row);
  }
}
const numRow = 5;
triangle(numRow);
console.log(`===============`);

// bài 6:
console.log(`Bài 6: bàn cờ vua`);
function drawChess(n) {
  for (var i = 0; i < n; i++) {
    var row = "";
    for (var j = 0; j < n; j++) {
      row += (i + j) % 2 === 0 ? "⬛" : "⬜";
    } //⬛ ⬜
    console.log(row);
  }
}
const boardChess = 8;
drawChess(boardChess);
console.log(`=======`);

//Bài 7
console.log(` Bài 7: bảng cửu chương`);
function multiplicationTable() {
  for (var i = 1; i <= 10; i++) {
    var row = "";
    for (var j = 1; j <= 10; j++) {
      row += `${i} x ${j} = ${i * j}\t`;
    }
    console.log(row);
  }
}
multiplicationTable();
console.log(`=========`);

//bài 8: Tính giá trị biểu thức: S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N
console.log(`Bài 8:`);
function calculateS(n) {
  if (n === 1) {
    return 1;
  }
  return 1 / n + calculateS(n - 1);
}
const N = 4;
const results = calculateS(N);
console.log(`Tổng S có N = ${N} là ${results}`);
