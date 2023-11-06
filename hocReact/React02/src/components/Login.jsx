import React from "react";
import { useEffect } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    setUsers([...users, { email, password }]);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   console.log("F");
  //   return () => {
  //     console.log("Cleanup");
  //   };
  // }, []);

  useEffect(() => {
    console.log("Hello");
    return () => {
      console.log("Cleanup");
    };
  }, [users]);
  console.log("re-render");

  // useEffect(() => {
  //   console.log("ComponentDidMount");
  //   return () => {
  //     console.log("ComponentWillUnmount");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("2. Component Re-render");
  // });

  // useEffect(() => {
  //   console.log("Hello");
  // }, [form.email]);

  const getTodo = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const todo = await response.json();
    setTodo(todo);
  };
  useEffect(() => {
    getTodo();
  }, []);
  console.log("Component re-render");
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            onChange={handleChange}
            placeholder="Email..."
            name="email"
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={handleChange}
            placeholder="Password..."
            name="password"
          />
        </div>
        <button>Submit</button>
      </form>
      <hr />
      {}
    </div>
  );
};

export default Login;
