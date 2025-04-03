import { atom } from "recoil";

// Define Todo List Atom
export const todoListState = atom({
  key: "todoListState",
  default: [],
});
