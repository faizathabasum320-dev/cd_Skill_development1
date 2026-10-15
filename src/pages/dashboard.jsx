import React from "react";
 
import { useNavigate } from "react-router-dom";
 
function Dashboard() {
   const navigate = useNavigate();
  return (
    <div className="page-container">
      <div className="page-heading dashboard-heading">
        <div>
          <p className="eyebrow">WELCOME BACK, ALEX</p>
          <h1>Ready to grow your career?</h1>
          <p className="page-subtitle">
            Continue your learning journey and build the skills for your dream
            career.
          </p>
        </div>

        <button className="primary-button"  onClick={() => navigate("/roadmap")}>

  Continue Learning</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon purple">✦</div>
          <div>
            <p>Career Readiness</p>
            <h2>68%</h2>
            <span className="success-text">+12% this month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">▤</div>
          <div>
            <p>Skills Completed</p>
            <h2>12</h2>
            <span>Out of 20 skills</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">◷</div>
          <div>
            <p>Learning Hours</p>
            <h2>24.5</h2>
            <span>This month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">✓</div>
          <div>
            <p>Job Matches</p>
            <h2>18</h2>
            <span>New opportunities</span>
          </div>
        </div>
      </div>

      <div className="two-column-grid">
        <div className="content-card">
          <div className="card-header">
            <div>
              <h2>Learning Progress</h2>
              <p>Track your overall learning progress.</p>
            </div>
            <button className="text-button">View Details</button>
          </div>

          <div className="progress-area">
            <div className="progress-circle">
              <div className="progress-circle-inner">
                <strong>68%</strong>
                <span>Completed</span>
              </div>
            </div>

            <div className="progress-details">
              <div className="progress-row">
                <span>Completed Modules</span>
                <strong>8</strong>
              </div>
              <div className="progress-row">
                <span>Modules in Progress</span>
                <strong>3</strong>
              </div>
              <div className="progress-row">
                <span>Remaining Modules</span>
                <strong>4</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card">
          <div className="card-header">
            <div>
              <h2>Recommended Skills</h2>
              <p>Skills that can improve your career readiness.</p>
            </div>
          </div>

          <div className="skill-list">
            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-dot purple-dot"></span>
                <div>
                  <strong>Python Advanced</strong>
                  <p>Programming</p>
                </div>
              </div>
              <span className="skill-level">Advanced</span>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-dot blue-dot"></span>
                <div>
                  <strong>Machine Learning</strong>
                  <p>Artificial Intelligence</p>
                </div>
              </div>
              <span className="skill-level">Intermediate</span>
            </div>

            <div className="skill-item">
              <div className="skill-info">
                <span className="skill-dot green-dot"></span>
                <div>
                  <strong>SQL for Data Science</strong>
                  <p>Database</p>
                </div>
              </div>
              <span className="skill-level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="content-card">
        <div className="card-header">
          <div>
            <h2>Continue Learning</h2>
            <p>Pick up where you left off.</p>
          </div>
          <button className="text-button" onClick={() => navigate("/roadmap")}>View Roadmap</button>
        </div>

        <div className="learning-module">
          <div className="module-number">01</div>

          <div className="module-content">
            <span className="module-category">PYTHON</span>
            <h3>Python Advanced</h3>
            <p>
              Strengthen your Python programming skills with advanced concepts
              and practical problem solving.
            </p>

            <div className="module-meta">
              <span>◷ 3 weeks</span>
              <span>◆ Advanced</span>
              <span>5 Topics</span>
            </div>
          </div>

          <div className="module-action">
            <span className="status-badge">In Progress</span>
            <button className="primary-button small-button"  onClick={() => navigate("/roadmap")}>
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;