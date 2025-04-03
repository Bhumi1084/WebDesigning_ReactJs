import React, { createContext, useState } from "react";

// Create Auth Context
export const AuthContext = createContext();

// Create Auth Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to log in (mock user authentication)
  const login = (username) => {
    setUser({ name: username });
  };

  // Function to log out
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
