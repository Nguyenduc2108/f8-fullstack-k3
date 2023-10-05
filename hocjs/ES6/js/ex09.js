/*
try {

} catch(exception) {

}

-> bắt các lỗi ngoại lệ 
Code logic => để trong block try
Nếu xảy ra lỗi => chuyển sang block catch và lưu vào exception
*/
try {
  //   getA();
  //   console.log(a);
  const a = 10;
  // bắn 1 lỗi logic vào catch
  if (a < 20) {
    throw new Error("a phai tu 20 tro len");
  }
} catch (exception) {
  //   console.log(exception.message);
  document.body.innerHTML = ` <h3>${exception.message}</h3>`;
} finally {
  console.log("đã xong");
}

// Try => Catch => finally

console.log("chuong trinh tiep");

// throw new Error("hello f8");
