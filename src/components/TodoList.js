import "./TodoList.css";

const TodoList = ({ todos, setTodos }) => {
  const handleComplete = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updated);
  };

  const handleDelete = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  return (
    <div>
      {todos.map((item) => (
        <div
          className="text-primary list"
          key={item.id}
          style={{
            textDecoration: item.completed ? "line-through" : "none",
          }}
        >
          <ul>
            <li>
              {item.text} -{" "}
              {item.completed ? "◄ Completed ►" : "◄ Not Completed ►"}
              <button
                className="btn btn-success mx-2"
                onClick={() => handleComplete(item.id)}
              >
                Complete
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item.id)}
              >
                Delete Todo
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
