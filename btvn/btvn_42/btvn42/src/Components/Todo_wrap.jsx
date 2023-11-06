import React, { Component, Fragment } from "react";
import Form from "./Form";
import Todo from "./Todo";
import { client } from "../../client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class TodoWrap extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      searchQuery: "",
      isLoading: false,
    };
  }

  componentDidMount() {
    this.handleGetApi();
  }

  handleGetApi = async () => {
    const { response, data } = await client.get(
      `/api-key?email=vanducnguyen2108@gmail.com`
    );

    if (response.ok) {
      client.setApiKey(data.data.apiKey);

      toast.success("Success get API-Key!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      const { data: dataLoad } = await client.get("/todos");
      this.setState({ todos: dataLoad.data.listTodo });
    } else {
      toast.error("Failed get API-Key!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  addTodo = async (nameTask) => {
    const { data: dataLoad } = await client.get("/todos");
    this.setState({ todos: dataLoad.data.listTodo });
  };

  handleDelete = (deleteId) => {
    const catchTodo = this.state.todos.find(({ _id }) => {
      return _id === deleteId;
    });

    const handleClick = async () => {
      const { response } = await client.delete(`/todos/${catchTodo._id}`);
      if (response.ok) {
        toast.success("Success delete todo!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        const newTodos = this.state.todos.filter(({ _id }) => {
          return _id !== deleteId;
        });
        this.setState({ todos: newTodos });
      } else {
      }
    };

    toast.warn("Click to confirm.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClick: handleClick,
    });
  };

  handleSearch = async () => {
    this.setState({ isLoading: true });

    const { data: dataLoad } = await client.get("/todos");
    const filteredTodos = dataLoad.data.listTodo.filter((element) =>
      element.todo.includes(this.state.searchQuery)
    );

    this.setState({ todos: filteredTodos, isLoading: false });
  };

  handleSearchInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(this.handleSearch, 300);
    handleSearch;
  };

  render() {
    return (
      <div className="todo-wrap">
        <h2>Welcome to Todo App!</h2>
        <Form addTodo={this.addTodo} handleApi={this.handleApi} />
        <input
          type="text"
          value={this.state.searchQuery}
          onChange={this.handleSearchInputChange}
          placeholder="Tìm kiếm..."
        />
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          this.state.todos.map((element, index) => {
            return (
              <Todo
                key={index}
                todo={element}
                handleDelete={this.handleDelete}
              />
            );
          })
        )}
        <ToastContainer />
      </div>
    );
  }
}
