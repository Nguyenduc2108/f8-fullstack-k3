/*
Biến

let,const
=> Chỉ sử dụng trong phạm vi đã khai báo và các phạm vi con của nó
-> Trong 1 scope chỉ được khai báo 1 lần 
-> không có hoisting

let: thay đổi được

const: không thay đổi được, gán luôn khi khai báo
*/

// let a = 10;
// a = 20;
// console.log(a);

for (let i = 1; i <= 5; i++) {
  let a = 10;
  if (i === 5) {
    let a = 20;
  }
  console.log(a);
}
// console.log(i);
// console.log(a);

// const user = "hoang an";
// user = "duong";
// console.log(user);

const user = {
  name: "hoang an",
  email: "hoangan@gmail.com",
};

// user.name = "F8";
// user = {};

console.log(user);

const getMessage = function () {
  console.log("hello f8");
};
