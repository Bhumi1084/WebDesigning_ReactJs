import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button 
        onClick={toggleTheme} 
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
          borderRadius: "5px",
          border: "none",
          background: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#000"
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Home;
