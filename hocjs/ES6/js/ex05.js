// Classes => định nghĩa 1 object

class Person {
  // phương thức khởi tạo
  //-> chạy đầu tiên khi phương thức được khởi tạo
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  //Định nghĩa các phương thức
  getName() {
    return this.name;
  }
  getEmail = function () {
    return this.email;
  };
  getAge = () => {
    return this.age;
  };
}

class Girl extends Person {
  constructor(name, email, age, address) {
    console.log(name, email, age);
    console.log(" Contructor cua class con");
    super(name, email, age);
    this.address = address;
  }
  getInfo() {
    return `
        - Name: ${this.getName()}
        - Email: ${this.getEmail()}
        - Age: ${this.getAge()}
        - Address: ${this.address}
        `;
  }
}
const girl = new Girl("hoang an", "hoangan@gmail.com", 32, "ha noi");
console.log(girl.getInfo());
//Tạo Object
// const person = new Person("Hoang an", "hoangan@gmail.com", 31);
// console.log(person);

// Áp dụng vào việc customElements
customElements.define(
  "hello-world",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerText = "hello f8";
    }
  }
);

//thuộc tính , phưng thức tĩnh(static)
/**
 Ví dụ: Array.isArray(),Math.PI
 */

class User {
  constructor() {
    this.name = "hoang an";
    this.email = "hoangan@gmail.com";
  }

  //phương thức non-static
  getName() {
    // console.log(this);
    return this.name;
  }

  //thuộc tính static
  static age = 31;

  //Phương thức static
  static isUser() {
    // console.log(this);
    // console.log(this.constructor);
    // console.log(this.constructor.isUser());
    // console.log(new this().getName());
    const _this = new this();
    console.log(_this.getName());
    return "toi la user";
  }
}

console.log(User.isUser());
// console.log(User.age);

// const user = new User();
// console.log(user.getName());
