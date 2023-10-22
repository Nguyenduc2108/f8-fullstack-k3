// Storage : kho lưu trữ dữ liệu tại trình duyệt
// Chỉ lưu trữ text

/*
1. localStorage
- lưu trữ vô thời hạn
- dung lượng lưu trữ lớn


2. sessionStorage 
- lưu trữ theo phiên (tắt trình duyệt tự xóa)
- dung lượng lưu trữ lớn

-> Lỗi bảo mật XSS

3.Cookie
- Lưu trữ có thời hạn xác định
- dung lượng lưu trữ nhỏ
- An toàn hơn localStorage, sessionStorage

-> Lỗi bảo mật CSRF ( hình thức tấn công giả mạo )
*/

//LocalStorage
// 1. THêm dữ liệu
// localStorage.setItem("username", "hoangan.web");

//2. Sửa dữ liệu
// localStorage.setItem("username","hoanganui119");

// 3.ĐỌc dữ liệu
// console.log(localStorage.getItem("username"));

//4. Xóa dữ liệu
// localStorage.removeItem("username");

//5. XÓa tất cả
// localStorage.clear();

//sessionStorage: tương tự như các phương thức trong localStorage
// sessionStorage.setItem("username", "hoangan.web");
// sessionStorage.email = "hoangan@gmail.com";

//Cookie

/*
Cookie tự động gắn vào request header khi sư dụng trình duyệt
- server có thể yêu cầu trình duyệt set cookie thông qua responsive  header set-cookie 
*/
//1. set cookie
//expires: thời gian sống của cookie
const expires = new Date("2023-10-20 09:00:00");
// document.cookie = `username=hoangan;expires=${expires}`;
// document.cookie = `email=haongan@giam.com;expires=${new Date(
//   "2023/10/20 12:00:00"
// )}`;

// 2. Cập nhật lại cookie
// document.cookie = ` username=hoangan119`;

//3. Xóa cookie
// document.cookie = `email=;expires=${new Date().toUTCString()}`;

//4. ĐỌc cookie
// console.log(document.cookie);

document.cookiev = `username=hoangan.web;path=/`;
