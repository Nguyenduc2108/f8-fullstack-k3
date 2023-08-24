function filterDuplicates(arr) {
  var Arr = [];
  var elements = {};

  for (var element of arr) {
    if (!elements[element]) {
      Arr.push(element);
      elements[element] = true;
    }
  }

  return Arr;
}

var initialArr = [2, 5, 9, 9, 2, 8, 5, 3, 3];
var filteredArr = filterDuplicates(initialArr);

console.log(filteredArr);
