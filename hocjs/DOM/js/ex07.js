// DOM CSS: Can thiệp vào CSS vào ác element thông qua thuộc tính style

// var content = document.querySelector(".content");

//Cách 1:
// content.style = " color: red; font-weight:bold";

// content.style = "background:red";

// console.log(content.style);

//Cách 2:
// content.style.color = "red";
// content.style.fontWeight = "bold"; // font-weight
// content.style.textDecoration = "line-through";

// Cách 3:
// var css = {
//   color: "red",
//   fontWeight: "bold",
//   textDecoration: "line-through",
//   fontStyle: "italic",
//   backgroundImage:
//     "url(https://fastly.picsum.photos/id/219/200/200.jpg?hmac=A55nsncpsnDAEPuZjs3_12i2n8HJNZ5-1SVCIN2fAgc)",
//   transition: "all 0.4s ease",
//   transform: "translateX(20px)",
// };

// Object.assign(content.style, css);

// Bài tập: Thêm các thuộc tính sau:
/*
background-image: url(linkanh)
transition: all 0.4s ease
transform: translateX(20px)
*/

// var css = {
//   backgroundImage:
//     "url(https://fastly.picsum.photos/id/219/200/200.jpg?hmac=A55nsncpsnDAEPuZjs3_12i2n8HJNZ5-1SVCIN2fAgc)",
//   transition: "all 0.4s ease",
//   transform: "translateX(20px)",
// };

// Object.assign(content.style, css);

// BÀI 2
var content = document.querySelector(".content");
var btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (!content.style.display) {
    content.style.display = "none";
    btn.innerText = "Hiện";
  } else {
    content.style.display = "";
    btn.innerText = "Ẩn";
  }
});
