import React, { useState } from "react";
import { authApi, setAuth } from "../api";

function Register({ onRegister, goToLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const data = await authApi.register({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      setAuth(data.token, data.user);

      onRegister(data.user);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
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
        <p className="eyebrow">GET STARTED</p>

        <h1>Create your account</h1>

        <p className="auth-subtitle">
          Build your personalized career development plan.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>

            <input
              name="name"
              required
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              name="password"
              type="password"
              required
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              name="confirmPassword"
              type="password"
              required
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            className="primary-button full-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="auth-bottom">
          Already have an account?{" "}

          <button
            className="link-button"
            type="button"
            onClick={goToLogin}
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;