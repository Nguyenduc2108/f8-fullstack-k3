// định nghĩa các event

// định nghĩa event có tên là over cho ác input range

var overEvent = new Event("over");
var rangeInputList = document.querySelectorAll('input[type="range"]');
if (rangeInputList.length) {
  rangeInputList.forEach(function (rangeInput) {
    rangeInput.addEventListener("mousemove", function (e) {
      var value = (e.offsetX * 100) / this.clientWidth;
      value = value.toFixed("2");
      this.dispatchEvent(overEvent);
      this.data = value;

      // thêm thông tin vào event object
      overEvent.offsetX = e.offsetX;
      overEvent.offsetY = e.offsetY;
    });
  });
}
