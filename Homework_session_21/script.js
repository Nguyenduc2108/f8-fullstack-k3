// Bài 1:
console.log("Bài 1:");
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};
function getError(feild) {
  if (errors[feild]) {
    for (var key in errors[feild]) {
      return errors[feild][key];
    }
  } else {
    return "";
  }
}
console.log(getError("name"));
//=============================================================

// Bài 2:
console.log("Bài 2:");
function Customer(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}
function createCustomers(customers) {
  const customerObjects = customers.map(
    (customer) => new Customer(customer.name, customer.age, customer.address)
  );
  customerObjects.sort((a, b) => a.age - b.age);
  customerObjects.forEach((customer) => {
    const lastName = customer.name.split(" ")[0];
    customer.shortName = `${lastName} ${customer.name.split(" ")[2]}`;
  });
  return customerObjects;
}
const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];
const result = createCustomers(customers);
console.log(result);
//====================================================================

// Bài 3
console.log("Bài 3:");
// Hàm tạo Constructor để khởi tạo đối tượng User
function User(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
  this.role = "user";
}

const data = [];

function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    console.log("Vui lòng điền đầy đủ thông tin đăng ký.");
    return;
  }
  const existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.log("Email đã được đăng ký trước đó.");
    return;
  }
  const newUser = new User(name, password, email);
  data.push(newUser);
  return newUser;
}

function handleLogin(email, password) {
  const user = data.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    return user;
  } else {
    console.log("Thông tin đăng nhập không hợp lệ.");
    return null;
  }
}

const dataRegisterA = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegisterB = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");

console.log("data =", data);
console.log("dataLogin =", dataLogin);
