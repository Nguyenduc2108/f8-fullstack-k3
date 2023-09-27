// Arrow Function => hàm mũi tên

// 1. Arrow function không có tham số

// const getMessage = () => {
//   console.log("Hello F8");
// };
// getMessage();

// 2. Arrow function có 1 tham số
// const getMessage = (msg) => {
//   console.log(msg);
// };
// getMessage("hello f8");

// 3. Arrow function có nhiều tham số
// const getMessage = (msg, type = "success") => {
//   console.log(msg, type);
// };
// getMessage("F8", "error");

//4. Arrow function có return
// const getTotal = (a, b) => a + b;

// console.log(getTotal(10, 20));

// const getUser = () => ({
//   name: "Hoang an",
//   email: "hoangan@gmail.com",
// });
// console.log(getUser());

//5. Lồng nhiều function trong Arrow function
// const getTotal = (a) => (b) => a + b;
// const add = getTotal(10);
// console.log(add(20));

// const user = [
//   {
//     name: "Hoang An",
//     email: "hoangan.web@gmail.com",
//   },
//   {
//     name: "Hoang An 2",
//     email: "hoangan.web2@gmail.com",
//   },
//   {
//     name: "Hoang An 3",
//     email: "hoangan.web3@gmail.com",
//   },
// ];

// const html = user
//   .map(
//     (user) => `
// <h3>${user.name}</h3>
// <h3>${user.email}</h3>
// <hr />
// `
//   )
//   .join("");
// document.body.innerHTML = html;

/*
Nguyên tắc khi làm việc với arrow function

- Arrow function không được sử dụng để thay thế function truyền thống
- Arrow function không binding được this
- Arrow function không binding được arguments
- Arrow function không được sử dụng để tạo method cho object
- Arrow function không có hoisting
- Arrow function không được sử dụng để xây dựng Constructor
*/

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log(this);
});

const user = {
  name: "hoang an",
  email: "hoangan.web@gmail.com",
  getName: function () {
    return {
      getInfo: function () {
        console.log(this);
        return this.name;
      },
    };
  },
};
console.log(user.getName().getInfo());

const max = (...args) => {
  console.log(args);
};
max(5, 10, 15, 20);

const User = () => {
  this.name = "hoang an";
};

const user2 = new User();

/*
Buổi sau:

1.Destructuring

2.Spread

3.Enhance literal Object

4. Classes
- cú pháp class
- Kế thừa: extends
- Getter, Setter
- Static
*/
