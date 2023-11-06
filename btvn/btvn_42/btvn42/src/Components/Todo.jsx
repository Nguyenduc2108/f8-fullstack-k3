import React, { Component } from "react";
import { client } from "../../client";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editedTask: this.props.todo.todo,
    };
  }

  handleEditClick = () => {
    this.setState({ isEditing: true });
  };

  handleEditChange = (e) => {
    this.setState({ editedTask: e.target.value });
  };

  handleDeleteClick = () => {
    this.props.handleDelete(this.props.todo._id);
  };

  handleSave = async () => {
    const updatedTask = this.state.editedTask;
    const { response } = await client.put(`/todos/${this.props.todo._id}`, {
      todo: updatedTask,
    });

    if (response.ok) {
      this.setState({ isEditing: false });
    } else {
      console.log("Error");
    }
  };

  render() {
    return (
      <div className="todo">
        {this.state.isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              className="input-edit"
              value={this.state.editedTask}
              onChange={this.handleEditChange}
            />
            <button className="button-save" onClick={this.handleSave}>
              Lưu
            </button>
          </div>
        ) : (
          <div className="task">
            <p className="name-task">{this.state.editedTask}</p>
            <div className="control">
              <button className="button-edit" onClick={this.handleEditClick}>
                Sửa
              </button>
              <button
                className="button-delete"
                onClick={this.handleDeleteClick}
              >
                Xóa
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
