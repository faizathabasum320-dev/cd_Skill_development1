import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { path: "/", label: "Dashboard", icon: "⌂" },
    { path: "/profile", label: "Profile", icon: "●" },
    { path: "/assessment", label: "Assessment", icon: "✓" },
    { path: "/roadmap", label: "Roadmap", icon: "◇" },
    { path: "/jobs", label: "Jobs", icon: "▣" },
    { path: "/progress", label: "Progress", icon: "◷" },
    { path: "/settings", label: "Settings", icon: "⚙" },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-mark">S</div>
        <div>
          <h2>SkillFlow</h2>
          <span>Career Growth</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-tip">
          <span>💡</span>
          <div>
            <strong>Keep Learning</strong>
            <p>Small progress every day.</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;