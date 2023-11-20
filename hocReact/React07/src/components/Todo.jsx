import { useEffect, useState } from "react";
import { fetchPosts, todoSlice } from "../slice/todoSlice";
import { useDispatch, useSelector } from "react-redux";
const { addTodo } = todoSlice.actions;

function Todo() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todoList);
  const [name, setName] = useState("");
  const posts = useSelector((state) => state.todos.posts);
  const status = useSelector((state) => state.todos.status);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(name));
    setName("");
  };
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên..."
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </form>
      <h2>Posts</h2>
      {status !== "idle" && status === "pending" ? (
        <h3>Loading...</h3>
      ) : (
        posts.map((id, title) => <h3 key={id}>{title}</h3>)
      )}
    </div>
  );
}

export default Todo;
