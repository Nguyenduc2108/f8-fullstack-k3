// Next tới 1 element mới

//Prev về 1 element trước
var products = document.querySelector(".products");
var productActive = products.querySelector(".active");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
// console.log(productActive);
// console.log(productActive.nextElementSibling);
// console.log(productActive.nextElementSibling.previousElementSibling);

var productFirst = productActive;
var productActive = (productFirst = products.querySelector(".active"));
var productLast = products.lastElementChild;
// console.log(productLast);

var handlerNext = function () {
  var nextElement = productActive.nextElementSibling;
  if (nextElement === null) {
    nextElement = productFirst;
  }
  nextElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = nextElement;
};

var handlerPrev = function () {
  var prevElement = productActive.previousElementSibling;
  if (prevElement === null) {
    prevElement = productLast;
  }
  prevElement.classList.add("active");
  productActive.classList.remove("active");
  productActive = prevElement;
};
next.addEventListener("click", handlerNext);

prev.addEventListener("click", handlerPrev);

document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight") {
    // Next
    handlerNext();
  }
  if (e.key === "ArrowLeft") {
    // Prev
    handlerPrev();
  }
});
