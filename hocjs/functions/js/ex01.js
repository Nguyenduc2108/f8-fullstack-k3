/*
Hàm ( Function): Thế 1 chức năng ( Động từ)

1.Hàm Không tham số
function tenHam() {
    Nội dung hàm
}

2.Hàm có tham số 
function tenHam(Thamso1,Thamso2,...) {
    Nội dung
}

Tên hàm: 
- Động từ: get , set ,make , build,...
-Dùng cameCase

3.Hám có giá trị trả về và hàm không có giá trị trả về
- Hàm có giá trị trả về: Có từ khóa return
=> Hàm return

- Hàm không có giá trị trả về: không Có từ khóa return
=> Hàm void
*/

// Định nghĩa Hàm
function getMessage(msg, type = "success") {
  console.log(`Hoang An`, msg, type);
}

//Gọi hàm
getMessage("F8", "Fullstack");

function sum(a, b) {
  var total = a + b;
  //   console.log(total);
  return total;
  // lưu ý: khi return được gọi => các đoạn code bên dưới return không hoạt động
}

// sum(10, 20); // => Gia tri cua ham
// console.log(sum(10, 20));

// var result = sum(10, 20) + 50;
// console.log(result);

// a /b a: so bi chia , b: so chia
function division(a, b) {
  if (b !== 0) {
    var result = a / b;
    // Biến cục bộ
    return result;
  }
  return "Khong tinh duoc";
}
console.log(division(10, 2));

function getMessage() {
  return msg;
}

function setMessage(value) {
  msg = value;
}

var msg = " hoang an F8";
// Biến toàn cục: global variable

setMessage("Fullstack");

console.log(getMessage());
