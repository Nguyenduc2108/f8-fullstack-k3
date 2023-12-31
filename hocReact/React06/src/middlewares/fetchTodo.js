/* eslint-disable no-unused-vars */
//Middleware

// eslint-disable-next-line no-unused-vars
export const fetchTodo = () => {
  return async (dispatch, getState) => {
    // Xử lý --> có dữ liệu --> dispatch lên reducer thông qua tham số dispatch
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const todo = await response.json();
    dispatch({
      type: "todo/fetch",
      payload: todo,
    });
  };
};
