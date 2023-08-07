var i = 1;
var s = 0;
while (i <= 10) {
  //   console.log(`Lan lap thi ${i}`);
  s += i;
  i++;
}
console.log(`S = ${s}`);
/*
Ban đầu vòng lặp sẽ kiểm tra điều kiện 
1. nếu đúng => chạy nội dung => quay lại kiểm tra => chạy nội dung... => khi nào sai => thoát vòng lặp
2.nếu sai => không chạy
*/

var i = 10;
do {
  console.log(i);
} while (i > 10);

/*
Vòng lặp sẽ chạy nội dung trước => sau đó kiểm tra 
Nếu đúng => chạy tiếp
Nếu sai => Thoát vòng lặp

=> Cho dù  sai thì vẫn chạy 1 lần đầu tiên
*/

//  Từ khóa break , continue

for (var i = 1; i <= 10; i++) {
  console.log(`Lan lap thu ${i}`);
  if (i === 5) {
    // i = 10;
    break;
  }
}

var begin = 3;
var end = 10;
//  tim so nho nhat trong khoang begin den end

// var even;
// for (var i = begin; i <= end; i++) {
//   if (i % 2 === 0) {
//     even = i;
//     break;
//   }
// }

// console.log(`So chan nho nhat: ${even}`);

for (var i = 1; i <= 10; i++) {
  console.log("==============");
  console.log("F8 = " + i);
  if (i === 5) continue;
  console.log(` Lan lap thu ${i}`);
  console.log(` Lan lap thu ${i} *`);
}
