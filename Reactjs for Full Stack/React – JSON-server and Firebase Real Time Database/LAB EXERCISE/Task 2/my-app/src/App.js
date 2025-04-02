import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import UsersCrud from "./UsersCrud";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Firebase CRUD & Google Authentication</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<UsersCrud />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
