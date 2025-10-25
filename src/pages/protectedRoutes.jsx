import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null); // null = loading, true/false = auth state
  const [passwordInput, setPasswordInput] = useState("");

  useEffect(() => {
    const storedAuth = sessionStorage.getItem("admin-auth");
    if (storedAuth === "true") {
      setAuthenticated(true);
    } else {
      setAuthenticated(false); // show modal
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === import.meta.env.VITE_ADMIN_PASSWORD) {
      setAuthenticated(true);
      sessionStorage.setItem("admin-auth", "true");
    } else {
      alert("Incorrect password!");
    }
  };

  // still loading auth state
  if (authenticated === null) return null;

  // redirect if auth failed
  if (authenticated === false) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow-md w-80">
          <h2 className="text-xl font-bold mb-4">Admin Password</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter password"
              className="w-full px-3 py-2 border rounded mb-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  // authenticated
  return children;
};

export default ProtectedRoutes;
