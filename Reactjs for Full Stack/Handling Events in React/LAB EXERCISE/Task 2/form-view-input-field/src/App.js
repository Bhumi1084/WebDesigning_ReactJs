import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  // Event handler for input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dynamic Input Display</h1>
      <form>
        <input
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={handleChange}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "300px",
            margin: "10px 0",
          }}
        />
      </form>
      <p>Typed Value: <strong>{inputValue}</strong></p>
    </div>
  );
}

export default App;
