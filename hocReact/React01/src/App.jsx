import React, { Component } from "react";
import Counter from "./components/Counter";
import Login from "./components/Login";

export class App extends Component {
  constructor() {
    super();
    this.state = { isShow: false, todo: [] };
  }
  getTodo = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    this.setState({ todo: data });
  };
  componentDidMount() {
    this.getTodo();
  }

  render() {
    const { todo } = this.state;

    return (
      <div>
        <Login />
        {/* { {this.isShow && <Counter />}
        <button
          onClick={() => {
            this.setState({ isShow: !this.state.isShow });
          }}
        >
          Toogle
        </button>
        {todo.map(({ id, title }) => {
          <h3 key={id}>{title}</h3>;
        })}
      } */}
      </div>
    );
  }
}

export default App;

/*
Call API -> Render Ui
*/
