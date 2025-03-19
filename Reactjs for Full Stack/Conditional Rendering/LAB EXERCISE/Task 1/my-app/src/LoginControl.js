import React, { useState } from "react";

const LoginControl = () => {
    // State to track login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Handlers to toggle login state
    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h2>
            {isLoggedIn ? (
                <button onClick={handleLogout} style={buttonStyle}>
                    Logout
                </button>
            ) : (
                <button onClick={handleLogin} style={buttonStyle}>
                    Login
                </button>
            )}
        </div>
    );
};

const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
};

export default LoginControl;
