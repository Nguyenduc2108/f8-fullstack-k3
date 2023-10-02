// Spread Operator

const oldOj = {
  name: "hoang an",
  email: "hoangan@gmail.com",
};

const newOj = { course: "Fullstack", ...oldOj };

console.log(newOj);

const oldArr = ["hoang an", "hoangan@gmail.com"];

const newArr = ["fullstack,...oldArr"];

console.log(newArr);

const getTotal = (a, b) => {
  console.log(a, b);
};

const values = [10, 20];

getTotal(...values);

//Enhance Object Literal

const name = "hoang an";
const email = "hoangan@gmail.com";
const age = undefined;

// const user = {
//   name,
//   email,
//   age,
// };
// console.log(user);

const result = {
  sum(a, b) {
    return a + b;
  },
  div(a, b) {
    return a - b;
  },
};

console.log(result);
console.log(result.sum(10, 20));
