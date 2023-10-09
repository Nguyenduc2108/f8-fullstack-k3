/*
Client <=> Server
- Lấy dữ liệu từ Server để trả về Client ( Render lên giao diện)
- Đẩy dữ liệu từ Client lên Server

HTTP Request => Server => HTTP Response

API = Application Programming Interface

Giao diện lập tình ứng dụng
- Giap tiếp gữa Client với Server
- Giao tiếp Giữa Server với Server
- Giao tiếp giữa phần mềm với hệ điều hành
- Giao tiếp giữa chương trình với các hàm trong thư viện / framework

WEB API => chuẩn thiết kế API => RESTFul API

Những quy tắc của chuẩn RESTFul 

 - URL: Base Server + resource( resource sẽ có quy tắc đặt tên riêng)
 => Ví dụ: https://api.fullstack.edu.vn/users
 - HTTP METHOD: 
 + GET: lấy dữ liệu
 + POST: thêm
 + PUT: sửa khác PATCH
 + PATCH: sửa
 + DELETE: xóa

 - HTTP Method + resource => Endpoint

 GET /users => Lấy danh sách user 
 POST /users => thêm mới user
 GET /users/{id} => Lấy thông tin 1 user
 PUT /users/{id} => Sửa thông tin 1 user

 - Response Code(chuẩn)
 - Response Body(nội dung trả về) => Kiểu JSON

 Làm thế nào để có Server API

    - Tự viết(có kiến thức về backend)
    - Sự dụng các dịch vụ Mockup API( Fake API)
    - Sử dụng thư viện Mockup API 

    Làm thể nào để goi API

    - XMLHttpRequest -> không trả về promise
    - fetch -> Trả về promise
    - Thư viện: axios, jquery ajax
*/

const serverApi = `http://localhost:3000`;

// fetch(`${serverApi}/users`)
//   .then((response) => {
//     //   console.log(response);
//     return response.json(); //response.text()
//   })
//   .then((data) => {
//     const body = document.body;
//     body.innerHTML = data.map(({ name }) => `<h2>${name}</h2>`).join("");
//   });

const getUsers = async () => {
  const response = await fetch(`${serverApi}/users`);
  const users = await response.json();
  console.log(users);
};

getUsers();

const getUser = async (id) => {
  const response = await fetch(`${serverApi}/users/${id}`);
  const users = await response.json();
  console.log(users);
};

// getUser(2);

/*
POST => THÊM MỚI 
PUT => Update, ghi đè
PATCH => Update, không ghi đè
DELETE => Xóa
*/

const postUser = async (data) => {
  //data la 1 object
  /*
    - URL
    - METHOD = POST
    - Headers: Content -Type
    - Body
    */
  const dataEndcode = new URLSearchParams(data).toString();
  // => Chuyển về dang key1-value1&key2=value2...
  const response = await fetch(`${serverApi}/users`, {
    method: "POST",
    headers: {
      //   "Content-Type": "application/json",
      "Content-Type": "application/x-www-form-urlencoded ",
    },
    // body: JSON.stringify(data),
    // body: `name=User6&email=user6@gmail.com`,
    body: dataEndcode,
  });
  console.log(response);
};

// postUser({
//   name: "User 5",
//   email: "user5@gmail.com",
// });

const updateUser = async (data, id) => {
  const response = await fetch(`${serverApi}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);
};

// updateUser(
//   {
//     name: "User 11",
//   },
//   1
// );

const deleteUser = async (id) => {
  const response = await fetch(`${serverApi}/users/${id}`, {
    method: "DELETE",
  });
  console.log(response);
};
deleteUser(7);
