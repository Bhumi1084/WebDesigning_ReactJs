import logo from './logo.svg';
import './App.css';
import React from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

function App() {
  return (
    <div className="App">
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>CRUD App with Redux</h1>
        <AddItem />
        <ItemList />
      </div>
    </div>
  );
}

export default App;
