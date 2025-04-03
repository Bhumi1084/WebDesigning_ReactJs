import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, updateItem } from "./itemsSlice";

const ItemList = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  const startEditing = (item) => {
    setEditingId(item.id);
    setNewText(item.text);
  };

  const handleUpdate = (id) => {
    dispatch(updateItem({ id, newText }));
    setEditingId(null);
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item) => (
        <li key={item.id} style={{ marginBottom: "10px" }}>
          {editingId === item.id ? (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button onClick={() => handleUpdate(item.id)}>Save</button>
            </>
          ) : (
            <>
              <span>{item.text}</span>
              <button onClick={() => startEditing(item)}>Edit</button>
              <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
