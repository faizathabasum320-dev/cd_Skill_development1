import React from "react";
import { getStoredUser } from "../api";

function Header() {
  const user = getStoredUser();

  const userName = user?.name || "Student";
  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    <header className="header">
      <div className="header-left">
        <h2>Welcome to SkillFlow</h2>
        <p>Build your skills and grow your career</p>
      </div>

      <div className="header-right">
        <button className="notification-button" title="Notifications">
          🔔
          <span></span>
        </button>

        <div className="header-profile">
          <div className="profile-avatar">{firstLetter}</div>

          <div className="header-user">
            <strong>{userName}</strong>
            <span>Student</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;