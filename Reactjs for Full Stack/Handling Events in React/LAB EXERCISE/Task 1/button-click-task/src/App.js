import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("Not Clicked");

  // Event handler for button click
  const handleClick = () => {
    setText("Clicked!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{text}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
