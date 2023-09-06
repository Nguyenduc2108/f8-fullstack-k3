// tạo các elemant
var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var nextBtn = carousel.querySelector(".next");
var prevBtn = carousel.querySelector(".prev");

// lấy kích thước của 1 item
var itemWidth = carouselInner.clientWidth; // lấy chiều rộng của 1 element

// lấy tất cả item
var items = carouselInner.children;

// Tính tổng kích thước các item
var totalWidth = items.length * itemWidth;
console.log(totalWidth);

// cập nhật css cho carouseInner
carouselInner.style.width = `${totalWidth}px`;

var position = 0;
nextBtn.addEventListener("click", function () {
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;
    carouselInner.style.translate = `${position}px`;
  }
});

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) > 0) {
    position += itemWidth;
    carouselInner.style.translate = `${position}px`;
  }
});

// tính năng vuốt
// dấu chấm (đốt)
// infinity
