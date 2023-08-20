// var a = {
//   name: "hoang an",
//   email: "hoanan@gmail.com",
// };

// var b = {
//   teacher: "Hoang An",
//   salary: 5000000,
// };

// for (var key in b) {
//   //   console.log(b[key]);
//   a[key] = b[key];
// }
// console.log(a);
// // Nối object b vào object a
// // Yêu cầu: không dùng hàm có săn

// Object.key(b).forEach(function (key) {
//   a[key] = b[key];
// });
// console.log(a);

// bài tập 2
var query = {
  name: "Hoang An",
  keyword: "Fullstack",
  category: 1,
};

// chuyển đổi object trên thành dạng query string
// name=Hoang+an&keyword=fullstack&category=1
// sử dụng thêm hàm: Object.entries()
console.log(Object.entries(query));
var queryString = Object.entries(query)
  .map(function (item) {
    return item.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");
console.log(queryString);

//Object.assign(target, source)
// var a = {
//   name: "hoang an",
//   email: "hoanan@gmail.com",
// };

// var b = {
//   teacher: "Hoang An",
//   salary: 5000000,
// };
// var result = Object.assign(a, b);
// console.log(a);
// console.log(result);

//Object.create(null) => tạo object không có prototype
// var a = Object.create(null);
// console.log(a);

// var a = {
//   name: "hoang an",
//   email: "hoanan@gmail.com",
// };

// // var b = a;
// // var b = {... a}
// var b = JSON.parse(JSON.stringify(a));
// b = Object.assign({}, a);
// b.name = "Hoang an F8";
// console.log(a);
// console.log(b);

// var a = ["hoang an", "hoanan@gmail.com"];
// // var b = a.map(function (item) {
// //   return item;
// // });
// // var b = [...a];
// var b = JSON.parse(JSON.stringify(a));
// b[[0]] = "Hoang an F8";
// console.log(a);
// console.log(b);

// console.log([] === []);
// console.log({} === {});
// console.log(function () {} === function () {});

// 1.Optional Chaining với thuộc tính
// Optional Chaining(?.)
// var a = null;
// console.log(a?.name);

// var fullname = ["an"];
// if (fullname?.length) {
//   console.log("ok");
// }

// 2.Optional Chaining với phương thức
// var a = {};
// console.log(a.getName?.());

// var fullname = "An";
// if (fullname?.length) {
//   fullname.forEach?.(function (item) {
//     console.log(item);
//   });
// }
