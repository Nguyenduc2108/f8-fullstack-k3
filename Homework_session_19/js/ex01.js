// bài 1
function findMinMax(arr) {
  if (arr.length === 0) {
    return "Mảng rỗng.";
  }

  var min = arr[0];
  var max = arr[0];
  var minIndex = 0;
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }

    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return {
    minValue: min,
    minIndex: minIndex,
    maxValue: max,
    maxIndex: maxIndex,
  };
}

var arr = [5, 2, 9, 1, 5, 6];
var result = findMinMax(arr);

console.log(arr);
console.log(`Số nhỏ nhất là ${result.minValue} ở vị trí ${result.minIndex}`);
console.log(`Số lớn nhất là ${result.maxValue} ở vị trí ${result.maxIndex}`);
