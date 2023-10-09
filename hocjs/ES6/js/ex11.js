const getUser = (id) => {
  const users = [
    {
      id: 1,
      name: "User 1",
      salary: 5000000,
    },
    {
      id: 2,
      name: "User 2",
      salary: 10000000,
    },
    {
      id: 3,
      name: "User 3",
      salary: 50000000,
    },
    {
      id: 4,
      name: "User 4",
      salary: 15000000,
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(({ id: _id }) => id === _id);
      resolve(user);
    }, 1000);
  });
};

// getUser(1).then((user) => {
//   console.log(user);
// });
const lists = [1, 3, 4];
//Yêu cầu tình tổng thu nhập của tất cả các user trong mảng lists

let salary = 0;
// lists.forEach(async (id) => {
//   const user = await getUser(id);
//   salary += user.salary;
// });
// console.log(salary);

// const getSalary = async () => {
//   for (let id of lists) {
//     const user = await getUser(id);
//     salary += user.salary;
//     console.log(salary);
//   }
// };
// getSalary();

//Promise.all() -> nhận 1 mảng chứa tất cả các Promise

const requests = lists.map((id) => getUser(id));
console.log(requests);

Promise.all(requests).then((users) => {
  console.log(users);
  const salary = users.reduce((total, { salary }) => total + salary, 0);
  console.log(salary);
});

const promise = Promise.resolve("f8");
promise.then((data) => {
  console.log(data);
});

const promise2 = Promise.reject("Network Error");
promise2.catch((err) => {
  console.log(err);
});
