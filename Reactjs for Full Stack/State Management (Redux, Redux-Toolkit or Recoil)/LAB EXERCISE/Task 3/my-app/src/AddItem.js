import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./itemsSlice";

const AddItem = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addItem(text));
    setText("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new item"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={handleAdd} style={{ padding: "8px 12px" }}>
        Add
      </button>
    </div>
  );
};

export default AddItem;
