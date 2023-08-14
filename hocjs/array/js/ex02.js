// console.log(Array.prototype);
// var user = ["An", "Tam", "Dung", "Hung"];
// console.log(user);

//1. at() => Truy cập 1 phần tử theo index
// console.log(user.at(1));

// 2. concat(arr, arr2, arr3,...) : Nối nhiều mảng lại với nhau, thêm 1 phần tử mới
// console.log(user.concat([1, 2, 3], [4, 5, 6]));
// console.log(user.concat("Dương"));

// 3. indexOf(value) => Tìm vị trí xuất hiện đầu tiên của phần tử trong mảng
// console.log(user.indexOf("Tâm"));

// 4. lastIndexOf() => Tìm vị trí của phần tử cuối cùng trong mảng
// console.log(user.lastIndexOf("Tâm"));

// 5.includes(value) => Tìm phần tử trong mảng và trả về true/ false
// console.log(user.includes("Tâm"));

// 6. slide(start, end) => Cắt mảng từ vị trí start đến end và trả về 1 mảng
// console.log(user.slice(0, 3));
// console.log(user.slice(1));
// console.log(user.slice(-2));

// 7. join() => Nối mảng thành chuỗi
// console.log(user.join(" | "));

// những hàm thay mảng ban đàu
// 8. push() => Thêm phần tử vào cuối mảng, thay đổi mảng ban đầu, trả về só lượng phần tử sau khi thêm
// var count = user.push("Dương", "Dương 1", "Dương 2");
// console.log(user);
// console.log(count);

// // 9. unshift() => Thêm phần từ vào đàu mảng,
// var count = user.unshift("Dương", "Dương 1", "Dương 2");
// console.log(user);
// console.log(count);

//10. pop() => Xóa phần tử cuối mảng và trả về phần tử vừa xóa
// var value = user.pop();
// console.log(user);
// console.log(value);

//11. shift() => Xóa phần tử đàu mảng và trả về giá trị phần tử vừa xóa
// var value = user.shift();
// console.log(user);
// console.log(value);

//12. splice(index, count) => Xóa count phần tử từ index
// user.splice(1, 2, "A", "B", "C");
// console.log(user);

//13. reverse() => Đảo ngược mảng
// user.reverse();
// console.log(user);

//14.sort() => Sắp xếp mảng theo thứ tự tăng dần ( không áp dụng với số, chỉ áp dụng với chuỗi)
// user.sort().reverse();
// console.log(user);

// var number = [1, 5, 3, 2, 10];
// number.sort(function (a, b) {
//   //   return a - b;
//   //   return b - a;
//   if (a > b) {
//     return -1;
//   }
// });
// console.log(number);

// bài 1: Lấy tên của họ và tên
// var fullName = "Tạ Hoàng An"; // An
// var firstName = fullName.split(" ").slice(-1).join();
// console.log(firstName);

// bài 2: Sắp xếp danh sách khách hàng theo tên
var customers = [
  "Nguyễn Dương",
  "Trần Xuân Bách",
  "Dương Đức Hiệp",
  "Đỗ Văn Khoa",
  "Tạ Hoàng An",
];
var getFirstName = function (fullName) {
  return fullName.split(" ").slice(-1).join();
};

customers.sort(function (a, b) {
  if (getFirstName(a) < getFirstName(b)) {
    return -1;
  }
});

console.log(customers);
