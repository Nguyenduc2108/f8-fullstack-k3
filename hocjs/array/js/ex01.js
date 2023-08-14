// khai báo
var users = ["An", "Tam", "Dung", "Hung"];
// var users = new Array("An", "Tam", "Dung");
// var users = []; //mảng rỗng
// console.log(users);
// console.log(Array.prototype);
// console.log([Array]);

// những phương thức , thuộc tính build trược tiếp từ hàm tạo => Array.tenPhuongThuc()
// console.log(typeof users);

//Kiểm tra 1 biến có phải là mảng hay không?
// if (Array.isArray(users)) {
//   console.log("Đây là mảng");
// } else {
//   console.log("Đây không phải mảng");
// }

// Lấy số phần tử của mảng
// console.log(users.length);

//1. Thêm phần tử mới vào mảng
// users[users.length] = "Mai";
// users[users.length] = "Quy";
// console.log(users);

//2. Truy cập vào 1 phần tử
// console.log(users);
// console.log(users[1]);

// 3. Sửa 1 phần tử
// users[1] = "Văn Quân";
// console.log(users);

// 4. Duyệt mảng
// console.log(users);
// for (var i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// for (var index in users) {
//   console.log(users[index]);
// }

// for (var users of users) {
//   console.log(users);
// }

// 5. Xóa mảng
// var indexDel = 1;
// var result = [];
// for (var index in users) {
//   if (+indexDel === +index) {
//     continue;
//   }
//   result[result.length] = users[index];
// }
// console.log(users);
// console.log(result);

// bài tập : Thêm 1 phần tử vào đầu mảng
var value = "Quý";
var newArr = [];
newArr[newArr.length] = value;
for (var index in users) {
  newArr[newArr.length] = users[index];
}
console.log(users);
console.log(newArr);
