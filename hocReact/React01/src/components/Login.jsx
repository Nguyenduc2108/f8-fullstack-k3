import React, { Component } from "react";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: "",
        email: "",
      },
      error: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state.form;
    console.log(name, email);
  };
  handleChangeValue = (e) => {
    console.log(e.target.name, e.target.value);

    //update dữ liệu nhận được vào state form
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Tên</label>
            <input type="text" name="name" placeholder="Tên..." />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" name="name" placeholder="Email..." />
          </div>
          <button onChange={this.handleChangeValue}>Submit</button>
        </form>
      </div>
    );
  }
}
