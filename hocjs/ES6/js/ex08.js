// JS là ngôn ngữ lập trình xử lý bất đồng bộ
/*
giả sử mỗi hàm mất 1s để xủ lý 
    a() => b() => c() -> bất đồng bộ -> tổng thời gian thực thi 3 hàm là 1s

    a() => b() => c() -> đồng bộ -> tổng thời gian thực thi 3 hàm là 3s


    Có 3 cách để xử lý bất đồng bộ (để chuyển thành đồng bộ)
    -Callback       Function
    - Promise       Object
    - Async Await   Function (đa số xử dụng)
*/

// const downloadImage = (callback, ...args) => {
//   setTimeout(() => {
//     console.log("Download thanfh coong");
//     if (typeof callback === "function") {
//       callback(...args);
//     }
//   }, 1000);
// };

// const showMessage = (size) => {
//   console.log("hien thi hinh anh: " + size);
// };

// // downloadImage(() => {
// //   showMessage("big");
// // });
// downloadImage(showMessage, "big");

// Promise
// -> Object dac biet dung de xu ly cac tac vu xu ly bat dong bo
/*
    Promise State
    - pending -> chờ xử lý 
    -fulfilled -> xử lý thành công
    - reject -> xử lý thất bại  
*/

const getUser = () => {
  const user = ["User 1", "User 2", "User 3"];
  return new Promise((resolve, reject) => {
    // resolve, rejcet => la` function
    setTimeout(() => {
      // logic lay du lieu tu server
      // neu thanh cong => goi resolve()
      // neu that bai => goi reject()
      //   resolve(user); //   giai quyet
      resolve(user);
      reject("loi mang");
    }, 1000);
  });
};

const showMessage = () => {
  console.log("lay du lieu thanh cong");
};

getUser()
  .then((user) => {
    console.log(user);
    showMessage();
  })
  .catch((error) => {
    console.log(error);
  });

// promise chaining
