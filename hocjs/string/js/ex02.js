// var email = "hoangan.web@gmail.com";

// // lấy username
// var username = email.slice(0, email.indexOf("@"));
// console.log(username);

// /*
// Bài 2: Kiểm tra 1 chuỗi có được viết hoa hết hay không
// */
// var fullname = "Ta HOÀNG AN";
// var check = fullname === fullname.toUpperCase();
// console.log(check);
// if (fullname === fullname.toUpperCase()) {
//   console.log(`Viết hoa hết`);
// } else {
//   console.log(` Không viết hoa hết`);
// }

/*
Bài 3:
var fullname = "ta hoang an";
=> chuyển hộ tên thành dạng tên chuẩn: Tạ Hoàng An
*/
var fullname = "ta hoang an ";

fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

for (var i = 0; i < fullname.length; i++) {
  var char = fullname.charAt(i);
  var charNext = fullname.charAt(i + 1);

  if (char === "" && charNext !== "") {
    var index = i + 1;
    fullname =
      fullname.slice(0, index) +
      charNext.toUpperCase() +
      fullname.slice(index + 1);
  }
}
console.log(fullname);

// đếm số lần xuất hiện của 1 từ trong 1 đoạn văn
