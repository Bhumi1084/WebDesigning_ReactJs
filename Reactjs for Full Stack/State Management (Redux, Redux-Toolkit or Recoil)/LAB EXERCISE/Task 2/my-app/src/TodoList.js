import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./todoState";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const todos = useRecoilValue(todoListState);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Todo List</h1>
      <AddTodo />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
