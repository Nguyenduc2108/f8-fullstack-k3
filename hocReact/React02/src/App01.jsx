import React, { useState } from "react";
// import { Counter } from "./components/Counter";
// import Login from "./components/Login";
import TodoList from "./components/Todo/TodoList";
import TodoForm from "./components/Todo/TodoForm";

const App = () => {
  const [name, setName] = useState("");
  const handleGetName = (name) => {
    setName(name);
  };
  return (
    <div>
      <TodoList name={name} />
      <hr />
      <TodoForm onGetName={handleGetName} />
    </div>
  );
};
export default App;
