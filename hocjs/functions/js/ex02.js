// function max(a, b) {
//   console.log(arguments);
//   console.log(a, b);
// }

// max(5, 10, 15, 20, 25, 30);

//

//rest parameter
// function max(result, ...args) {
//   console.log(result);
//   //   console.log(arguments);
//   console.log(args);
// }
// max("Max = ", 5, 10, 15, 20, 25, 30);

// Expression Function

// anonymous function
// var getMsg = function () {
//   console.log("Xin chao F8");
// };
// getMsg();

//  kiem tra xem co phai ham hay khong?
// if (typeof getMsg === "function") {
//   console.log("Day la ham");
// }

//IIFE
// (function (value) {
//   console.log("Hoang An F8: " + value);
// })("Fullstack");

var getA = function (fn, ...args) {
  //console.log("getA");
  // Thuc thi ham a
  console.log("getA");
  if (typeof fn === "function") {
    fn(...args);
  }
};

var getB = function (name, email) {
  console.log("getB: " + name, email);
};
// var handleGetB = function () {
//   getB("F8");
// };
// getA(handleGetB); //Callback
getA(getB, "F8", "Hoangan@gmail.com ");
// getA(function () {
//   console.log("Xin chao F8");
// });
// getA(); // mat 2s
// getB(); // mat 1s

// tenHam() => loi goi ham chu dong

//Delay 1 doan chuong trinh
setTimeout(
  function (name, email) {
    console.log("Xin chao F8", name, email);
  },
  2000,
  "Fulltack",
  "hoangan@gmail.com"
);
