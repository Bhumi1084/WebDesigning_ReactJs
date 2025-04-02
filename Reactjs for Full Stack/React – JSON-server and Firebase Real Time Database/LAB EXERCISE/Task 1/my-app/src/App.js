import logo from './logo.svg';
import './App.css';
import React from "react";
import UserTable from "./UserTable";

function App() {
  return (
    <div className="App">
      <h1>CRUD with JSON Server</h1>
      <UserTable />
    </div>
  );
}

export default App;
