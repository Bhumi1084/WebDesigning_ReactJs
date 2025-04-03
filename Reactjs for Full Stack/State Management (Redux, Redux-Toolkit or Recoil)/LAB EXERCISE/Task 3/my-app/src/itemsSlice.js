import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  items: [],
};

// Create Redux slice
const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload });
    },
    updateItem: (state, action) => {
      const { id, newText } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.text = newText;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Export actions
export const { addItem, updateItem, deleteItem } = itemsSlice.actions;

// Export reducer
export default itemsSlice.reducer;
