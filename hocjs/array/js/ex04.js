/*
Vòng lặp reduce: có 2 tham số
- callback
+ prevValue
+ currentValue
+ index
- initialValue => Giá trị khởi tạo

Giá trị trả về của reduce là kết quả của lần return cuối cùng trong callback
*/
// var numbers = [5, 10, 15, 20, 25];
// var result = numbers.reduce(function (prev, current) {
//   console.log(prev, current);
//   return current;
// }, 0);
// console.log(result);

// var result = numbers.reduce(function (prev, current) {
//   console.log(prev, current);
//   return prev + current;
// });
// console.log(result);

// Tìm max trong mảng
// dùng reduce
// var numbers = [5, 1, 2, 9, 3];
// var result = numbers.reduce(function (max, number) {
//   return max < number ? number : max;
// });
// console.log(result);

/*
var arr1 = [5,2,1,9,8]
var arr2 = [3,2,9,8]

Tìm phần tử có trong mảng 1 nhưng không có trong mảng 2 và trả về 1 mảng
[5, 1]
Dùng reduce
*/
var arr1 = [5, 2, 1, 9, 8];
var arr2 = [3, 2, 9, 8];

var diff = arr1.reduce(function (prev, current) {
  if (!arr2.includes(current)) {
    prev.push(current);
  }

  return prev;
}, []);
console.log(diff);
