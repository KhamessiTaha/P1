import { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input) {
      console.log("TODO can't be empty");
      return;
    }

    const newTodo = {
      id: todos.length+1,
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput(""); 

    console.log(newTodo);
  };

  return (
    <div className="form-check">
      <input
        type="text"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="form-control mb-2"
      />
      
      <button className="btn btn-success" onClick={handleAdd}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
