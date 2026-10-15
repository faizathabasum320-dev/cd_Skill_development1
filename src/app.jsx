import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Layout from "./components/layout";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Assessment from "./pages/Assessment";
import Roadmap from "./pages/Roadmap";
import Jobs from "./pages/Jobs";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";

import { getStoredUser, clearAuth } from "./api";

function ProtectedRoutes() {
  const user = getStoredUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

function App() {
  const [user, setUser] = useState(getStoredUser());

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    clearAuth();
    setUser(null);
  };

  return (
    <BrowserRouter>
      {!user ? (
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                onLogin={handleLogin}
                goToRegister={() => {
                  window.location.href = "/register";
                }}
              />
            }
          />

          <Route
            path="/register"
            element={
              <Register
                onRegister={handleLogin}
                goToLogin={() => {
                  window.location.href = "/login";
                }}
              />
            }
          />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        <>
          <ProtectedRoutes />

          <button
            onClick={handleLogout}
            style={{ display: "none" }}
          >
            Logout
          </button>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;