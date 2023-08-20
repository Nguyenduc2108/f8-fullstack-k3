// var user = {
//   name: "Hoang an",
//   email: "haongan@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

// var customer = {
//   name: "Hoang an",
//   email: "duongnguyen@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

// => Tạo ra 1 bản thiết kế cho object
// trong js => function Constructor( Hàm tạo)
// Tên hàm tạo: Viết theo cú pháp PascalCase
var Person = function (name, email) {
  this.name = name;
  this.email = email;
  this.getName = function () {
    return this.name;
  };
};
console.log(Person);
Person.prototype.message = "F8 - fullstack";

// tạo đối tượng hàm tạo
var person = new Person("hoang an", "hoangan@gmail.com");
console.log(person);
// console.log(person.name);
// console.log(person.email);
// console.log(person.getName());

var user = new Person("Nguyen Dong", "dungabc@gmail.com");
console.log(user);

console.log(person.message);
console.log(user.message);

Array.prototype.first = function () {
  return this[0];
};
var a = ["An", "Duong", "Vuong"];
console.log(a.first());

String.prototype.end = function () {
  return this.slice(-1);
};
var b = "Ta hoang an";
console.log(b.end());

// Kiểm tra objext thuộc hàm tọa nào
console.log(person.constructor.name);
// var a = 12;
// console.log(a.constructor.name);

// var b = null;
// console.log(b.constructor.name);

if (a === 0 || (a && a.constructor.number === "Number")) {
  console.log(Number);
}

// Xây dựng 1 hàm nội bộ từ hàm tạo
var gerMessage = "helo G8";

Person.isPerSon = function (variable) {
  return variable && variable.constructor.name === "Person";
};
if (Person.isPerSon(person)) {
  console.log(" Đây là person");
} else {
  console.log(" không phải person");
}
