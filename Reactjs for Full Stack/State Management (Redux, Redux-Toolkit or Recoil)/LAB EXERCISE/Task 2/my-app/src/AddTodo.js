import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./todoState";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const setTodos = useSetRecoilState(todoListState);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos((oldTodos) => [...oldTodos, { text: task, completed: false }]);
    setTask("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={addTask} style={{ padding: "8px 12px" }}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
