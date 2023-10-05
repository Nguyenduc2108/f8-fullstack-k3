// Setter, getter

class User {
  constructor() {
    this.data = ["Item 1", "item 2 ", "item 3"];
  }

  //get first element
  get first() {
    return this.data[0];
  }

  get latest() {
    return this.data[this.data.length - 1];
  }
  set latest(value) {
    this.data.push(value);
  }
}

const user = new User();
// console.log(user.first());
// console.log(user.latest());
// console.log(user.first);
user.latest = "User 4";
console.log(user.data);
