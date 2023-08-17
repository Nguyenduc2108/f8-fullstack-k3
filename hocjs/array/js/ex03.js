console.log(Array.prototype);

var users = ["An", "Tân", "Dũng", "Hùng", "Tâm"];
// console.log(user);

//1. fill() => cập nhật tất cả các phần tử của mảng thành 1 giá trị
// console.log(user.fill("F8"));

//2. forEach(callback) => Duyệt quá từng phần tử và trả về element, index trong callback
// console.log(user);
// user.forEach(function (user, index) {
//   console.log(user, index);
// });

//3. map(callback)
/*
-Duyệt quá từng phần tử trong mảng, trả về element, index trong callback
- Trả về 1 mảng mới chính là return của callback
- Số lượng phần tử của mảng mới bảng số lượng phần tử của mảng ban đầu
*/

// var newArr = user.map(function (user, index) {
//   console.log(user, index);
//   return `<h3>${index} - ${user}</h3>`;
// });
// console.log(newArr);

//4.some(callback)
/*
- Giá trị của hàm some là true/false 
- Trả về true nếu: có ít nhất 1 lần lặp return true
- Trả về false nếu: tất cả cá lần lặp không phải return true
- Vòng lặp sẽ chạy tới khi nào có return true thì sẽ dừng
*/
// var numbers = [1, 2, 3, 5, 7, 9];
// // => Kiểm tra trong mảng numbers có số chẵn không
// var check = numbers.some(function (number) {
//   if (number % 2 === 0) {
//     return true;
//   }
// });
// console.log(check);

//5. every(callback)
/*
- Trả về true/false 
- Trả về true nếu: tất cả các lần lặp return true
- trả về false nếu: có ít nhật 1 lần lặp không return true
*/
// var numbers = [2, 4, 6, 8, 10];
// // => Kiểm tra mảng trên có phải tất cả đều là só chẵn không
// var check = numbers.every(function (number) {
//   if (number % 2 === 0) {
//     return true;
//   }
// });
// console.log(check);

//6. filter(callback)
/*
- Luôn trả về 1 mảng mới 
- Mảng mới chính là phần tử của mảng cũ mà được return true
*/
// var newArr = users.filter(function (user) {
//   if (user === "An" || user === "Hùng") {
//     return true;
//   }
// });
// console.log(newArr);

// var customers = [
//   "Nguyễn Dương",
//   "Trần Xuân Bách",
//   "Nguyễn Hoàng Anh",
//   "Dương Đức Hiệp",
//   "Đỗ Văn Khoa",
//   "Tạ Hoàng An",
// ];
// var keyword = "an";
// var newArr = customers.filter(function (user) {
//   return user.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(newArr);
// Tìm trong mảng trên có tên khách hàng nào chứa từ khóa thì sẽ trả về 1 mảng

/*
7.find(callback)
- Cách hoạt động giống filter nhưng chỉ trả về 1 phần tử đầu tiên

8. findLast(callback)
- cách hoạt động giống filter nhưng trả về 1 phần tử cuỗi cùng

9. fingIndex(callback)
- Trả về index đầu tiên

10.findLastIndex(callback)
-Trả về index cuối cùng
*/

// var customers = [
//   "Nguyễn Dương",
//   "Trần Xuân Bách",
//   "Nguyễn Hoàng Anh",
//   "Dương Đức Hiệp",
//   "Đỗ Văn Khoa",
//   "Tạ Hoàng An",
// ];
// var keyword = "an";
// var newArr = customers.findLastIndex(function (user) {
//   return user.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(newArr);

var users = [
  ["Hoàng An", "hoangan@gmail.com", 31],
  ["Nguyễn Dương", "duong@gmail.com", 19],
  ["Trần Xuân Bách", "bach@gmail.com", 25],
];
var newArr = users.map(function (user) {
  if (user[1] === "duong@gmail.com") {
    user[2] += 2;
  }
  return user;
});
// yêu cầu: tăng thêm 2 tuổi cho user có email là duong@giam.com
console.log(newArr);
