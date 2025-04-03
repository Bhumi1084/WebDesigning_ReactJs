import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./todoState";

const TodoItem = ({ todo, index }) => {
  const [todos, setTodos] = useRecoilState(todoListState);

  const toggleComplete = () => {
    setTodos(
      todos.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTask = () => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <li style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
      <span
        onClick={toggleComplete}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          marginRight: "10px"
        }}
      >
        {todo.text}
      </span>
      <button onClick={removeTask} style={{ padding: "5px 10px", backgroundColor: "red", color: "white", border: "none", cursor: "pointer" }}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
