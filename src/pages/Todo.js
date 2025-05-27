import { useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Todo App", completed: true },
  ]);

  return (
    <div>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;