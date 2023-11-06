import React, { Component } from "react";
import TodoWrap from "./Components/Todo_wrap";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoWrap />
      </div>
    );
  }
}
