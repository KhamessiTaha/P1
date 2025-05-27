import { useState } from "react";
const AddTodo = () => {
  const [input, setInput] = useState('');
  return (<div>
    <input name="myInput" />
    <button onClick={()=> {}}>Add Todo</button>
  </div>)
};
export default AddTodo;
