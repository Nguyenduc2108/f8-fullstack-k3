var sum = function (a) {
  return function (b) {
    return a + b;
  };
};

/*
can thuc hien 3 phep tinh
10+ 5
10 + 20
10 + 30
*/
// var add = sum(10); // return function
// console.log(add(5));
// console.log(add(20));
// console.log(add(30));

// Closure

//setTimeout
// setTimeout(
//   function (name, email) {
//     console.log("hello F8", name, email);
//   },
//   2000,
//   "Hoang An",
//   "abc@gmail.com"
// );

// setInterval => lặp đi lặp lại sau 1 khoảng time
// var count = 0;
// var id = setInterval(function () {
//   console.log(++count);
//   if (count === 10) {
//     clearInterval(id);
//   }
// }, 1000);

// Đệ quy
// var showNumber = function (n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };

// showNumber(10);

// Tinh tong S = 1 + 2 + 3 +... + n
// var getTotal = function (n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n + getTotal(n - 1);
// };
// console.log(getTotal(10));

var fibonacci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(6));

// n = 5
/*
fibonacci(4) + fibonacci(3)
=> fibonacci(3) + fibonacci(2) +fibonacci(2) + fibonacci(1)
=> fibonacci(2) + fibonacci(!) + 1 + 1 + 1 
=> 1 + 1 + 1 + 1 + 1 = 5
*/
