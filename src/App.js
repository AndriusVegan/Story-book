
import React, { useState } from "react";

import "./App.css";
// import Todo from "./Todo.js";
import TodoContainer from "./TodoContainer";


function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault()

    setTodos([...todos, input]);
    setInput("");
  }

  return (
    <div>
      <form>
        <input value= {input} onChange={e => setInput(e.target.value)} type="text" />
        <button type="submit" onClick={addTodo}>ADD TODO</button>
      </form>
      <TodoContainer todos={todos} />
    </div>
  );
}

export default App;
