import './App.css';
import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <div className="App">
      <Greeting name="John" />
      <Greeting name="Jane" />
    </div>
  );
}

export default App;
