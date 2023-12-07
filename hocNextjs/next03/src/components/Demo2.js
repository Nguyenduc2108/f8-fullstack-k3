//Server Components

const getTodos = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  return response.json();
};

const Demo2 = async () => {
  const todoList = await getTodos();
  return (
    <div>
      <h1>Demo2</h1>
      {todoList.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
};
export default Demo2;
