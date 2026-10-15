import React, { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Gayathri",
    email: "gayathri@example.com",
    phone: "+91 98765 43210",
    education: "B.Tech",
    branch: "Computer Science",
    location: "Hyderabad, India",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="page-container">

      {/* Page Heading */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">MY PROFILE</p>

          <h1>Profile</h1>

          <p className="page-subtitle">
            Manage your personal information and career details.
          </p>
        </div>

        {!isEditing ? (
          <button
            className="primary-button"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        ) : (
          <button
            className="primary-button"
            onClick={handleSave}
          >
            Save Changes
          </button>
        )}
      </div>

      {/* Profile Layout */}
      <div className="profile-layout">

        {/* Left Profile Card */}
        <div className="profile-card">

          <div className="profile-large-avatar">
            G
          </div>

          <h2>{profile.name}</h2>

          <p>{profile.education}</p>

          <div className="profile-status">
            Active Learner
          </div>

          <div className="profile-stats">
            <div>
              <strong>12</strong>
              <span>Skills</span>
            </div>

            <div>
              <strong>68%</strong>
              <span>Progress</span>
            </div>

            <div>
              <strong>18</strong>
              <span>Matches</span>
            </div>
          </div>

        </div>

        {/* Right Profile Information */}
        <div className="profile-info">

          <h2>Personal Information</h2>

          <div className="profile-form">

            <div className="form-group">
              <label>Full Name</label>

              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  {profile.name}
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Email</label>

              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  {profile.email}
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Phone</label>

              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  {profile.phone}
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Education</label>

              {isEditing ? (
                <input
                  type="text"
                  name="education"
                  value={profile.education}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  {profile.education}
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Branch</label>

              {isEditing ? (
                <input
                  type="text"
                  name="branch"
                  value={profile.branch}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  {profile.branch}
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Location</label>

              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  {profile.location}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="content-card profile-skills-card">

        <div className="card-header">
          <div>
            <h2>My Skills</h2>

            <p>
              Skills you are currently learning or have completed.
            </p>
          </div>
        </div>

        <div className="profile-skills">

          <span className="profile-skill purple">
            Java<br></br>
          </span>

          <span className="profile-skill blue">
            Python<br></br>
          </span>

          <span className="profile-skill green">
            SQL<br></br>
          </span>

          <span className="profile-skill orange">
            Data Structures<br></br>
          </span>

          <span className="profile-skill purple">
            React<br></br>
          </span>

          <span className="profile-skill blue">
            JavaScript<br></br>
          </span>

        </div>

      </div>

    </div>
  );
}

export default Profile;