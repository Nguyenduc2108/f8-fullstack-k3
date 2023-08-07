/*
Câu lệnh rẽ nhánh switch case
*/

var action = "edit";

switch (action) {
  case "add":
  case "create":
  case "insert":
    console.log("Them");
    break;

  case "edit":
  case "update":
    console.log("Sua");
    break;
  case "delete":
  case "remove":
  case "destroy":
    console.log("Xoa");
    break;

  default:
    console.log("Danh sach");
    break;
}
//  chuyen doan code tren thanh if else

if (action === "add" || action === "create" || action === "insert") {
  console.log("Them");
} else if (action === "edit" || action === "update") {
  console.log("Sua");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xoa");
} else {
  console.log("Danh sach");
}

/*
Hiển thị số ngày của 1 tháng 
var month = 11;
=> tháng 11 có 30 ngày 

Quy ước :
- 31 ngày : 1 , 3, ,5 ,7 ,8, 10 ,12
- 30 ngày: 4 , 6 ,9 ,11 
- 29 ngày: 2

yêu cầu ràng buộc
- tháng phải là số nguyên
- tháng từ 1 đến 12
- không được sủ dụng hàm để kiểm tra
*/

var month = 11;
if (month % 1 === 0 && month >= 1 && month <= 12) {
  // xu ly kiem ngay
  var days;
  //   month += month; // ep kieu
  switch (+month) {
    case 2:
      days = 29;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;

    default:
      days = 31;
      break;
  }
  console.log(`Thang ${month} co ${days} ngay`);
}
