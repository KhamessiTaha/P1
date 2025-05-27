import "./TodoList.css";
const TodoList = () => {
  const todos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Todo App", completed: true },
  ];

  return (
    <div>
      {todos.map((item) => {
        return (
          <div
            className="list"
            key={item.id}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            <ul>
              <li>
                {item.text} -{" "}
                {item.completed ? "◄ Completed ►" : "◄ Not Completed ►"}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default TodoList;
