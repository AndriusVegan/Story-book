import React from "react";
import TodoContainer from "../TodoContainer";

export default {
  title: "TodoContainer",
  component: TodoContainer,
};

export const NormalTodo = () => (
  <TodoContainer todos={["Go for a run", "Go to work", "take a rest"]} />
);
