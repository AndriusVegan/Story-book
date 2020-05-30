import React from "react";
import { v4 as uuidv4 } from 'uuid';
import "./TodoContainer.css";
import Todo from "./Todo";

function TodoContainer({ todos }) {
  return (
    <div className="todoContainer">
      {todos.map((todo) => (
        <Todo title={todo} key={uuidv4()} />
      ))}
    </div>
  );
}

export default TodoContainer;
