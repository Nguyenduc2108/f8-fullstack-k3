import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    //Khai báo state
    this.state = {
      count: 0,
    };
    this.message = "";
  }

  handleIncrement = () => {
    //Để thay đổi state -> dùng hàm seState
    // Click vào + -> tăng state lên 1
    // hàm setState -> Nhập vào 1 object -> tên state cần thay đổi
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    if (this.state.count === 5) {
      this.message = "Thành công";
    }
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        {this.message && <h2>{this.message}</h2>}
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default App;

// Trong class component chứa các thành phần của React
/*
    State
    Lifecycle

    1. State là gì -> trạng thái
    - thường là 1 object
    - Nếu muốn thay đổi dữ liệu của 1 component -> Dùng state -> Nội bộ trong 1 component
    - Khi state thay đổi -> Component sẽ bị re-render
    - không được thay đổi trực tiếp biết State mà phải thông qua hàm riêng để thay đổi

    nhớ nguyên tắc: : Muốn component update lại UI -> thay đổi State
  */
