import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const Home = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  return (
    <div style={{
      textAlign: "center",
      marginTop: "50px",
      fontFamily: "Arial, sans-serif"
    }}>
      {user ? (
        <>
          <h1>Welcome, {user.name}!</h1>
          <button 
            onClick={logout} 
            style={{ padding: "10px 20px", cursor: "pointer", marginTop: "10px" }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h2>Please log in</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "8px", marginRight: "10px" }}
          />
          <button 
            onClick={() => login(username)} 
            style={{ padding: "10px 20px", cursor: "pointer" }}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
