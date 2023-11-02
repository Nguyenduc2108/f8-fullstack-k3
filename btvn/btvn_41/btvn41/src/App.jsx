import React, { Component } from "react";
import TodoWrap from "./component/Todo_wrap";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoWrap />
      </div>
    );
  }
}
