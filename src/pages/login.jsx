import React, { useState } from "react";
import { authApi, setAuth } from "../api";
function Login({ onLogin, goToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const data = await authApi.login({
      email,
      password,
    });

    setAuth(data.token, data.user);
    onLogin(data.user);
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div className="auth-page">
      <div className="auth-brand">
        <div className="brand-logo">S</div>
        <div>
          <h2>SkillFlow</h2>
          <p>Career Intelligence</p>
        </div>
      </div>

      <div className="auth-card">
        <p className="eyebrow">WELCOME BACK</p>
        <h1>Sign in to SkillFlow</h1>
        <p className="auth-subtitle">
          Continue your personalized career journey.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="auth-options">
            <label className="remember-label">
              <input type="checkbox" />
              Remember me
            </label>

            <button type="button" className="text-button">
              Forgot Password?
            </button>
          </div>

          <button className="primary-button full-button" type="submit">
            Sign In
          </button>
        </form>

        <p className="auth-bottom">
          Don’t have an account?{" "}
          <button className="link-button" onClick={goToRegister}>
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;