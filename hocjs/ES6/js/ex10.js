// Async Await
/*
Async Function luôn trả về 1 promise
*/

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hoang an");
      //   reject("Error");
    }, 1000);
  });
};

// getUser().then((data) => {
//   console.log(data);
// });

// Async Function kết hợp với await
// const showUser = async () => {
//   try {
//     const data = await getUser();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("hoàn thành");
//   }
// };

// showUser();

//IIFE
(async () => {
  const data = await getUser();
  console.log(data);
})();

// Await trong vòng lặp
// Promise.all()
// Chuyển promise chaining => async await
