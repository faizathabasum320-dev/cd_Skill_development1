import React, { useState } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    jobAlerts: true,
    learningReminders: true,
    weeklyReport: false,
  });

  const [saved, setSaved] = useState(false);

  const handleToggle = (name) => {
    setSettings({
      ...settings,
      [name]: !settings[name],
    });

    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <p className="eyebrow">ACCOUNT PREFERENCES</p>
          <h1>Settings</h1>
          <p className="page-subtitle">
            Manage your account, notifications and learning preferences.
          </p>
        </div>

        <button className="primary-button" onClick={handleSave}>
          Save Settings
        </button>
      </div>

      {saved && (
        <div className="settings-success">
          ✓ Your settings have been saved successfully.
        </div>
      )}

      {/* Account Settings */}

      <div className="settings-card">
        <div className="settings-card-header">
          <div className="settings-icon blue">⚙</div>

          <div>
            <h2>Account Settings</h2>
            <p>Manage your basic account information.</p>
          </div>
        </div>

        <div className="settings-form">
          <div className="settings-field">
            <label>Full Name</label>
            <input type="text" defaultValue="Gayathri" />
          </div>

          <div className="settings-field">
            <label>Email Address</label>
            <input
              type="email"
              defaultValue="gayathri@example.com"
            />
          </div>

          <div className="settings-field">
            <label>Current Role</label>
            <select defaultValue="Student">
              <option>Student</option>
              <option>Fresher</option>
              <option>Working Professional</option>
            </select>
          </div>

          <div className="settings-field">
            <label>Career Goal</label>
            <select defaultValue="Software Developer">
              <option>Software Developer</option>
              <option>Data Analyst</option>
              <option>Web Developer</option>
              <option>AI / ML Engineer</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notifications */}

      <div className="settings-card">
        <div className="settings-card-header">
          <div className="settings-icon purple">🔔</div>

          <div>
            <h2>Notifications</h2>
            <p>Choose which notifications you want to receive.</p>
          </div>
        </div>

        <div className="settings-options">
          <div className="setting-row">
            <div>
              <h3>Email Notifications</h3>
              <p>Receive important updates through email.</p>
            </div>

            <button
              className={`toggle ${
                settings.emailNotifications ? "active" : ""
              }`}
              onClick={() => handleToggle("emailNotifications")}
            >
              <span></span>
            </button>
          </div>

          <div className="setting-row">
            <div>
              <h3>Job Alerts</h3>
              <p>Get notified about new job opportunities.</p>
            </div>

            <button
              className={`toggle ${
                settings.jobAlerts ? "active" : ""
              }`}
              onClick={() => handleToggle("jobAlerts")}
            >
              <span></span>
            </button>
          </div>

          <div className="setting-row">
            <div>
              <h3>Learning Reminders</h3>
              <p>Receive reminders to continue your learning.</p>
            </div>

            <button
              className={`toggle ${
                settings.learningReminders ? "active" : ""
              }`}
              onClick={() => handleToggle("learningReminders")}
            >
              <span></span>
            </button>
          </div>

          <div className="setting-row">
            <div>
              <h3>Weekly Progress Report</h3>
              <p>Receive a summary of your weekly progress.</p>
            </div>

            <button
              className={`toggle ${
                settings.weeklyReport ? "active" : ""
              }`}
              onClick={() => handleToggle("weeklyReport")}
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Learning Preferences */}

      <div className="settings-card">
        <div className="settings-card-header">
          <div className="settings-icon green">✓</div>

          <div>
            <h2>Learning Preferences</h2>
            <p>Customize your learning experience.</p>
          </div>
        </div>

        <div className="settings-form">
          <div className="settings-field">
            <label>Preferred Learning Mode</label>
            <select defaultValue="Practical">
              <option>Practical</option>
              <option>Theory</option>
              <option>Mixed</option>
            </select>
          </div>

          <div className="settings-field">
            <label>Daily Learning Time</label>
            <select defaultValue="1-2 Hours">
              <option>Less than 1 Hour</option>
              <option>1-2 Hours</option>
              <option>2-3 Hours</option>
              <option>More than 3 Hours</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security */}

      <div className="settings-card">
        <div className="settings-card-header">
          <div className="settings-icon orange">🔒</div>

          <div>
            <h2>Security</h2>
            <p>Manage your password and account security.</p>
          </div>
        </div>

        <div className="security-content">
          <div>
            <h3>Password</h3>
            <p>
              Update your password regularly to keep your account secure.
            </p>
          </div>

          <button className="secondary-button">
            Change Password
          </button>
        </div>
      </div>

      {/* Danger Zone */}

      <div className="danger-card">
        <div>
          <h2>Account Actions</h2>
          <p>
            These actions affect your SkillFlow account.
          </p>
        </div>

        <button className="logout-button">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Settings;