var checkBoxAll = document.querySelector(".check-box-all");
var checkItems = document.querySelectorAll(".check_box");

checkBoxAll.addEventListener("change", function () {
  var checkStatus = this.checked;
  checkItems.forEach(function (checkItem) {
    checkItem.checked = checkStatus;
  });
});

checkItems.forEach(function (checkItem) {
  checkItem.addEventListener("change", function () {
    if (!this.checked) {
      checkBoxAll.checked = false;
      return;
    }
    // kiểm tra xem tất cả checkbox có được check hay không?
    var status = Array.from(checkItems).every(function (item) {
      return item.checked;
    });
    checkBoxAll.checked = status;
  });
});
