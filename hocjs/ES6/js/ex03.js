//rest parameter
// const sum = (msg, ...args) => {
//   console.log(msg);
//   console.log(args);
// };
// sum("Sum = ", 5, 10, 15, 20);

// //default parameter
// const division = (a, b = 1) => {
//   console.log(a, b);
// };
// division(10);

//Detructuring
//-> phá vỡ cấu trúc của aray, object để truy cập vào các phần tử và gán thnahf các biến riêng biệt

// const user = {
//   name: "hoang an",
//   email: "hoangan.web@gmail.com",
//   age: 31,
//   address: "Hà Nội",
//   "shipping-address": "Hồ  chí minh",
// };

// console.log(user);

// const key = "address";

// const {
//   name: username,
//   email,
//   age = 29,
//   "shipping-address": shippingAddress,
// } = user;
// console.log(username, email, age, shippingAddress, address);
// cú pháp đổi tên là dấu :

// const { name: username, email, ...rest } = user;
// console.log(username, email);
// console.log(rest);

const user = [
  "hoang an",
  "hoangan.web@gmail.com",
  undefined,
  {
    age: 31,
    addredd: "hà nội",
  },
];

// const [username, email, , address] = user;
// console.log(username, email, address);

// const [username, email, ...rest] = user;
// console.log(username, email);
// console.log(rest);
// const [username, email, course = "fullstack"] = user;
// console.log(username, email, course);
// const [username, email, course = "fullstack", age, address] = user;
// console.log(username, email, course);
// console.log(age, address);

// let a = "An";
// let b = "duong";
// [a, b] = [b, a];
// console.log(a, b);

const users = [
  {
    id: 1,
    name: "nguyen van a",
  },
  {
    id: 2,
    name: "nguyen van b",
  },
  {
    id: 3,
    name: "nguyen van c",
  },
];

// const getUser = (value) => users.find(({ id }) => id === value);

// console.log(getUser(2));

const html = users.map(({ id }) => `<h2>${id} - ${name}</h2>`).join("");
document.body.innerHTML = html;

const getResult = () => [1, 2];

const [value1, value2] = getResult();

console.log(value1, value2);
