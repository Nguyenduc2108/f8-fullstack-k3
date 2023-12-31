var link = document.querySelector(".link");
console.log(link);

//Thuộc tính
/*
Khi làm việc với js => có 2 loại thuoc jtinhs 

1. Thuộc tính có săn của thẻ html

2.Thuộc tính tự tạo (Data Attribute)

*/

// Thuộc tính có sẵn

// lấy giá trị thuộc tính: element.tenthuoctinh
// console.log(link.href);
// console.log(link.id);
// console.log(link.target);
// console.log(link.title);
// // riêng thuộc tính class: element.className
// console.log(link.className);

// Cập nhật giá trị thuôc jtinhs:
//element.tenthuoctinh = giatri
link.href = "https://google.com";
link.title = "Trang chu Google";
link.target = "_self";
link.id = "abc";

// Giá trị mặc định của 1 thuộc tính sẽ là 1 chuỗi rỗng
// console.log(link.rel);

// //Thuộc tính tự tạo(data attribute)

// Lấy data attribute
// console.log(link.getAttribute("data-count"));
// console.log(link.dataset.count); //data-count
// console.log(link.dataset.indexNumber); // data-index-number

//Thêm data attribute
// // link.setAttribute("data-count", 10);
// link.dataset.count = "20";
// link.dataset.indexNumber = "axxxsa";
// link.dataset.animationDuration = "1s";

var content = document.querySelector(".content");
// content.className = content.className + " abc";
console.log(content.classList);

//Thêm class mới
content.classList.add("abc", "ax");

// Xóa class mới
content.classList.remove("ax");

//Kiểm tra class tồn tại
console.log(content.classList.contains("abc"));

// Class toggle => thêm class nếu không tồn tại và xóa class nếu tồn tại
content.classList.toggle("element");
content.classList.toggle("element");

// Xóa element : tên element.remove()
content.remove();

// Xóa thuộc tính
link.removeAttribute("title");
