/* 
Toán tử - Biểu thức

Biểu thức = Toán hạng + Toán tử

var a = b + c;

1.Toán tử số học

+, - , x, / , %(Chia lấy dư), **(Lũy thừa)

++ , -- => Phép tăng , Phép giảm

*/

// var a ="10.5" //chuỗi số
// var b =20;
// var c = a + b;
// console.log(c);

// // ép kiểu : parseInt , parseFloat
// // var c = parseInt(a) + parseInt(b);

// //  mẹo tron js
// var c = +a + +b;
// console.log(c);

// var a = 10;
// var b = 3 ;
// var c = a ** b;
// console.log(c);

// var count = 1;
//     s;
// count++; // count = count + 1
// ++count; // count = count + 1
// console.log(count)

// s = count++;
// console.log(s);  // console.log(`S = ${s}`)
// console.log(count); // console.log( Count = ${count})

// var count = 1;
// var total = count++ + ++count;
// console.log(total);

/*
2. Toán tử logic

> , < , >= , <= , == , === ,!= , !== 

=> trả về kiểu boolean ( true, false)
*/

// var a = "10";
// var b = 10;
// var c = +a === +b;
// console.log(c);

/*
3. Toán tử gán

*/

// var a = 10;
// // a = a + 5;
// a+= 5; // a = a + 5;
// a-= 5; // a = a - 5;
// a*= 5; // a = a * 5;
// a/= 5; // a = a / 5;
// a%= 2; // a = a % 5;
// console.log(a);

// var str = "f8";
// str += " f8";
// str += " f8";
// str += " f8";
// str += " f8";
// console.log(str);


/*
4. Toán tử lý luận
&& => và 
|| => hoặc 
! => phủ định 
*/

// var a = 10 ;
// // var b = a >= 5 && a <= 10;
// // var b = a < 0 || a >= 5;
// var b = a < 0 || a >=5;
// b = !b;
// //  var b = !(a < 0 || a >=5);
// console.log(b);

/*
5. Toán tử 3 ngôi

bieuthuc(logic) ? giatridng : giatrisai
*/

// var a = 10;
// var b = a >= 10 ? "F8" : "Hoang An";
// console.log(b);
// document.write(`${a >= 10 ? "F8" : "Hoang An"}`)

// var a = 10;
// var b = 1 + 2 + 3 + a  >= 5 ? 10 : 20 + 4 + 5;
// var b = 1 + 2 + 3 + ( a  >= 5 ? 10 : 20) + 4 + 5;
// console.log(b);

/*
6. Toán tử nulllish(??)
*/

// var a = null;
// var b = a ?? "F8"; // check !== null && !== undefined
// console.log(b); 

// //  => bai tap : chuyen toan tu nulllish thanh toan tu 3 ngoi

// var b = a !== undefined && a !== null ? a :"F8";
// console.log(b);

// var a = 10;
// var b = a ? "F8" : "Hoang An";
// console.log(b);

/*
Tự chuyển về boolean trong trường hợp phải dùng để so sánh

Nếu mà tự chuyển về false => Falsy
0 , "", false , undefined, null, NaN

Nếu và tự chuyển về true => Truthy
Các trường hợp còn lại 
*/


/*
7. Toán tử &&
*/

// var a = "Hoang An";
// var b = a && "F8";
// console.log(b);

/*
8. Toán tử ||
*/
var a = 0 ;
var b = a || "F8"; // Đừng nhầm lẫn với nullish
console.log(b);