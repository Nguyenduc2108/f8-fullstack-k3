// /*
// Object = Đối tượng
// - Object Literal (Đối tượng nguyên bản)
// - Function Constructor(Hàm tạo)

// Thành phần của 1 đối tượng

// - Thuộc tính: đặc điểm, tính chất(Biến)
// - Phương thức: Hành động(Hàm)
// */
// var users = {
//   //key: value
//   name: "Hoàng An",
//   email: "hoangan@gmail.com",
//   age: 31,
//   getName: function () {
//     return "Hoàng An F8";
//   },
// }; //Object Literal

// //Thêm key mới cho object
// users.country = "Việt Nam";
// users["address"] = "cầu giấy";

// //Sửa giá trị của key trong object
// users.email = "hoangan@fullgmail.com";

// // Xóa key trong object
// delete users.age;

// //Truy cập key trong Object
// // console.log(users.name);
// // console.log(users["email"]);

// // var users = new Object();
// // console.log(users);
// // console.log(users);

// // lấy danh sách key trong object
// // for (var key in users) {
// //   //   console.log(key);
// // //   console.log(users[key]);
// // }
// // console.log(Object.keys(users));
// Object.keys(users).forEach(function (key) {
//   console.log(users[key]);
// });

// //Kiểm tra 1 biến có phải object hay không?
// var a = {};
// if (typeof a === "object" && !Array.isArray(a) && a !== null) {
//   console.log(` là object`);
// } else {
//   console.log(` không phải là object`);
// }
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof null);

// var customer = {
//   name: "Hoàng An",
//   email: "hoangan@gmail.com",
//   getName: function () {
//     return this.name;
//   },

//   getEmail: function () {
//     return this.email;
//   },

//   getInfo: function () {
//     // console.log(this);
//     return `
//     - Name: ${this.name}
//     - Email: ${this.email}
//     `;
//   },
// };
// console.log(customer.getInfo());

var user = {
  name: "Hoàng An",
  email: "hoangan@gamil.com",
  jobs: {
    name: "Giảng Viên",
    salary: 5000000,
    currency: "vnđ",
    per: "Tháng",
    students: [
      {
        id: 1,
        name: "HV 1",
      },
      {
        id: 2,
        name: "HV 2",
      },
      {
        id: 3,
        name: "HV 3",
      },
    ],
  },
};
console.log(user.name);
console.log(user.jobs.name);
console.log(user.jobs.students[0].name);

var users = {
  name: "hoàng an",
  email: "hoangan@gmail.com",
  getInfo: function () {
    var current = this;
    return {
      getName: function () {
        return current.name;
      },
    };
  },
};

console.log(users.getInfo().getName());
