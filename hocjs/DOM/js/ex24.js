var slider = document.querySelector(".slider");

// định nghĩa 1 sự kiện có tên là finish
var finishEvent = new Event("finish");
console.log(finishEvent);

slider.addEventListener("input", function (e) {
  console.log(e);
  if (this.value === "100") {
    slider.dispatchEvent(finishEvent);
    finishEvent.abc = "xyz";
  }
});

slider.addEventListener("mousemove", function (e) {
  finishEvent.offsetX = e.offsetX;
  finishEvent.offsetY = e.offsetY;
});

// listener Event
slider.addEventListener("finish", function (e) {
  console.log(e);
  console.log("da xong");
});
