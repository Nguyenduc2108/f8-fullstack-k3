/*
Chuỗi trong js có 1 hàm tạo tên 
là string để định nghĩa các thuộc tính
và phương thức xử lý
*/
// console.log(String, typeof String);
console.log(String.prototype);

var fullname = "Ta Hoang An";
console.log(fullname.length);

// Các phương thức xử lý chuỗi
var str = "Xin chao f8 - Hoang An f8";
// 1. length => lấy độ dài của chuỗi
// console.log(str.length);

// 2. charAt => lấy ký tự của chuỗi theo index ( index bắt đầu từ 0)
// console.log(str.charAt(1));
// console.log(str[1]);

// 3. charCodeAt(index) => lấy mã ASCII của ký tự theo index
// console.log(str.charCodeAt(0));

// 4.concat(chuoi1,chuoi2,...) => NỐi chuỗi
// console.log(str.concat(" A", "B", "C"));

// 5.indexOf(sub) => Tìm vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi cha và trả về index nếu không tìm thấy thì trả về -1
// console.log(str.indexOf("f8"));

//6. lastIndexOf(sub) => Tìm vị trí cuối
// console.log(str.lastIndexOf("f8"));

// 7. includes(sub) => Tìm chuỗi con trong chuỗi cha trả về true/ false
// console.log(str.includes("F8"));

// 8. slice(start , end) => Cắt chuỗi từ chuỗi cha từ start đến end
// console.log(str.slice(1, 3));
// console.log(str.slice(-4));

// 9. replace(search , with) => Thay thế chuỗi
// console.log(str.replace("F8", "F88"));
// Lưu ý: Hmaf này hỗ trợ thay thế bằng biểu thức chính quy (Regex)

// Ví dụ: Thay thế chữ số sau chữ f thành dấu *
// var pattern = /f(\d+)/g;
// console.log(str.replace(pattern, "*"));
// console.log(str.replace(pattern, "f <span>$1</span>"));

// 10. replaceAll(search, width) => Tìm kiếm tất cả
// console.log(str.replaceAll("f8", "f88"));

// 11. split(char) => Tách chuỗi thành mảng
// console.log(str.split(""));

// 12. trim() => Xóa khoảng trắng đàu và cuối chuỗi
// console.log("           Hoang An".trim());

// 13. trimStrart() => Loại bỏ đàu chuỗi

// 14. trimEnd() => Loại bỏ cuối chuỗi

// 15. match() => Cắt chuỗi dựa vào biểu thức chính quy(Regex)

var content = `Lorem ipsum dolor, sit amet consectetur 0123124124 adipisicing elit. At libero,
consequatur nesciunt unde odit quae temporibus corporis  0412414212 optio autem quos
natus aperiam beatae explicabo praesentium expedita +84123123123 quaerat, accusamus
dicta velit?`;

var pattern = /(0|\+84)\d{9}/g;
var phones = content.match(pattern);
console.log(phones);

//16. toLowerCase()

// 17.toUpperCase()
