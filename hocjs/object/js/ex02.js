// thêm phương thức prototype
Object.prototype.combine = function (...args) {
  var current = this;
  if (args.length) {
    return args.map(function (key) {
      return current[key];
    });
  }
};

Object.prototype.message = "F8";

var user = {
  name: "Hoang An",
  email: "hoangan@gmail.com",
};

var customer = {
  name: "Nguyễn Dương",
  age: "19",
  position: "1",
};
console.log(user);

// var result1 = user.combine("name", "email");
// console.log(result1);

// var result2 = customer.combine("name", "age", "position");
// console.log(result2);

// Mong muốn bất ký object nào cũng sử dụng được combine
// => kế thừa phương thức, thuộc tính
// => định nghĩa thuộc tính, phương thức vào prototype

var a = " F8";
console.log(String.prototype);
console.log(a.message);

var b = [];
console.log(Array.prototype);
console.log(b.message);

var c = 10;
console.log(Number.prototype);
console.log(c.message);
