// context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 const [showAuth, setShowAuth] = useState(false);
  // On load, get user session
  useEffect(() => {
    const stored = localStorage.getItem("currentUser");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const signup = ({ name, email, password }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Prevent duplicate email
    const emailExists = users.some(u => u.email === email);
    if (emailExists) throw new Error("Email already exists");

    const newUser = { name, email, password };
    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      u => u.email === email && u.password === password
    );

    if (!existingUser) throw new Error("Invalid credentials");

    localStorage.setItem("currentUser", JSON.stringify(existingUser));
    setUser(existingUser);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, showAuth, setShowAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
