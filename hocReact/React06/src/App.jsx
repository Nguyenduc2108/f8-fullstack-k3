import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions/counterAction";
import { useEffect } from "react";
import { fetchTodo } from "./middlewares/fetchTodo";

function App() {
  const count = useSelector((state) => state.counter.count);
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);
  return (
    <div>
      <h1>hoc redux ko kho</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <h2>Todo List</h2>
      {todoList.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
}

export default App;

//ACtion Creator
//Hàm trả về action(object)
