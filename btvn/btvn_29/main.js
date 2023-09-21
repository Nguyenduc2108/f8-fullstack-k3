var list = document.querySelector(".list");
var listItems = document.querySelectorAll(".list-item");

listItems.forEach(function (element) {
  element.addEventListener("dragstart", function () {
    element.classList.add("dragging");
  });

  element.addEventListener("dragend", function () {
    element.classList.remove("dragging");
  });
});

list.addEventListener("dragover", function (e) {
  e.preventDefault();
  var dragging = list.querySelector(".dragging");
  var remainingElements = list.querySelectorAll(".list-item:not(.dragging)");

  var changeUp = Array.from(remainingElements).find(function (element) {
    var box = element.getBoundingClientRect();
    if (e.clientY >= box.top - box.height / 2) return element;
  });

  var changeDown = Array.from(remainingElements).find(function (element) {
    var box = element.getBoundingClientRect();
    if (e.clientY <= box.top + box.height / 2) return element;
  });

  if (changeUp) list.insertBefore(dragging, changeUp);
  else list.prepend(dragging);

  if (changeDown) list.insertBefore(dragging, changeDown);
  else list.appendChild(dragging);
});
