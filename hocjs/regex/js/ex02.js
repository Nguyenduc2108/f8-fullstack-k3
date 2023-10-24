// Cắt chuỗi: match()

// const content = `xin chào, tôi tên là Hoàng An, số điện thoại 0388875179. Thêm số nữa +84123456789`;

// const pattern = /(0|\+84)\d{9}/g;

// const result = content.match(pattern);

// console.log(result);

//Capturing Group: Kỹ thuật lấy 1 phẩn của biểu thức chính quy (không áp dụng global)

// const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, non
// fugit doloribus porro vero rem nulla vitae ea totam saepe expedita natus
// ipsum cum mollitia nisi ipsa repellat, labore hoangan@fullstack.edu.vn suscipit accusantium unde.
// Aliquam molestiae, sapiente nemo, ducimus officia provident unde nulla
// dolore accusantium repellendus minima sit dolor nostrum consequuntur
// voluptatibus doloribus email.com ad libero iure, eius vel placeat. Dicta nobis quas
// animi, magnam commodi quae fugit hoangan.web officia nam maxime corporis mollitia
// magni impedit harum deleniti at recusandae qui accusantium laboriosam
// consequuntur! Quos, officia inventore dolorum a consectetur est similique
// placeat alias, quasi, sunt aliquid quis ipsum assumenda magnam quod fugiat
// suscipit?`;

// const pattern = /([a-z0-9-_\.]{3,})@([a-z0-9-_\.]+\.[a-z]{2,})/;
// const emailList = content.match(pattern);
// console.log(emailList);

//Non-Capturing Group -> Loại trừ nội dung trong cặp ngoặc tròn ra khỏi kết quả
// ?:
// const pattern =
//   /^(?:http|https):\/\/[a-z0-9-_\.]+\.([a-z]{2,})(?:\/?|\/[a-z0-9-_\.\/]+)$/;
// const str = "https://fullstack.edu.vn/khoa-hoc/fullstack-offline/index.html";

// const result = str.match(pattern);
// console.log(result);

// Greedy, Lary -> Chỉ áp dụng với dấu (.)

// const html = `<img src="https://fullstack.edu.vn/images/image01.jpg" title="F8" />`;
// const pattern = /<img.*src="(.+?)"/;

// const result = html.match(pattern);

// console.log(result);

//Thay thế
// const content = `xin chào, tôi tên là Hoàng An, số điện thoại 0388875179. Thêm số nữa +84123456789`;

// const pattern = /(0|\+84)\d{9}/g;

// const result = content.replace(pattern, "***");

// console.log(result);

//Đối sách chuỗi
const content = `xin chào, tôi tên là Hoàng An, số điện thoại 0388875179. Thêm số nữa +84123456789`;

const pattern = /((0|\+84)\d{9})/g;

const result = content.replace(
  pattern,
  `<a href="tel:$1" data-start="$2">$1</a>`
);

console.log(content);
