import logo from './logo.svg';
import './App.css';
import React from "react";
import { AuthProvider } from "./AuthContext";
import Home from "./Home";

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
