import React from "react";
import "./Dashboard.css";

const skillData = [
  { name: "Python", value: 78, type: "strong" },
  { name: "Machine Learning", value: 62, type: "moderate" },
  { name: "SQL", value: 45, type: "moderate" },
  { name: "Data Analysis", value: 78, type: "strong" },
  { name: "Communication", value: 52, type: "moderate" },
];

const roadmap = [
  "Python Advanced",
  "Machine Learning Basics",
  "SQL for Data Science",
  "Data Visualization",
];

const jobs = [
  { title: "Data Analyst", match: "95%" },
  { title: "ML Engineer", match: "90%" },
  { title: "Python Developer", match: "85%" },
];

function Dashboard() {
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">✦</div>
          <span>SkillSync AI</span>
        </div>

        <nav className="sidebar-nav">
          <a href="/dashboard" className="nav-item active">
            <span>▣</span>
            Dashboard
          </a>

          <a href="/profile" className="nav-item">
            <span>♙</span>
            Profile
          </a>

          <a href="/skill-assessment" className="nav-item">
            <span>▤</span>
            Skill Assessment
          </a>

          <a href="/roadmap" className="nav-item">
            <span>◎</span>
            Roadmap
          </a>

          <a href="/job-matches" className="nav-item">
            <span>▣</span>
            Job Matches
          </a>

          <a href="/progress" className="nav-item">
            <span>◒</span>
            Progress
          </a>

          <a href="/settings" className="nav-item">
            <span>⚙</span>
            Settings
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="help-box">
            <div className="help-icon">?</div>
            <div>
              <strong>Need Help?</strong>
              <small>Contact support</small>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* HEADER */}
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, Asma!</p>
            <span>Track your skills, progress and opportunities.</span>
          </div>

          <div className="header-actions">
            <button className="notification-btn" title="Notifications">
              ♧
              <span className="notification-dot"></span>
            </button>

            <div className="avatar">A</div>
          </div>
        </header>

        {/* SUMMARY CARDS */}
        <section className="summary-grid">

          <div className="summary-card score-card">
            <div>
              <p>Skill Score</p>
              <h2>78%</h2>
              <span className="good">Good Score</span>
            </div>

            <div className="score-circle">
              <div className="score-circle-inner">78%</div>
            </div>
          </div>

          <div className="summary-card">
            <p>Skills Identified</p>
            <h2>24</h2>
            <span className="card-description">Skills discovered</span>
          </div>

          <div className="summary-card">
            <p>Skill Gaps</p>
            <h2>6</h2>
            <span className="improve">Improve</span>
          </div>

          <div className="summary-card">
            <p>Courses Recommended</p>
            <h2>8</h2>
            <span className="card-description">Based on your skills</span>
          </div>

        </section>

        {/* LOWER SECTION */}
        <section className="dashboard-grid">

          {/* SKILL GAP */}
          <div className="dashboard-card skill-card">
            <div className="card-header">
              <div>
                <h3>Skill Gap Overview</h3>
                <p>Understand where you can improve</p>
              </div>
              <button className="more-btn">•••</button>
            </div>

            <div className="skills-list">
              {skillData.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <strong>{skill.value}%</strong>
                  </div>

                  <div className="progress-track">
                    <div
                      className={`progress-fill ${skill.type}`}
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="legend">
              <span>
                <i className="legend-dot strong"></i>
                Strong
              </span>

              <span>
                <i className="legend-dot moderate"></i>
                Moderate
              </span>

              <span>
                <i className="legend-dot weak"></i>
                Weak
              </span>
            </div>
          </div>

          {/* ROADMAP */}
          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h3>Recommended Roadmap</h3>
                <p>Personalized learning path</p>
              </div>
            </div>

            <div className="roadmap-list">
              {roadmap.map((item, index) => (
                <a
                  href="/roadmap"
                  className="roadmap-item"
                  key={item}
                >
                  <div className="roadmap-number">
                    {index + 1}
                  </div>

                  <span>{item}</span>

                  <strong>›</strong>
                </a>
              ))}
            </div>
          </div>

          {/* JOB MATCHES */}
          <div className="dashboard-card job-card">
            <div className="card-header">
              <div>
                <h3>Top Job Matches</h3>
                <p>Jobs matching your skills</p>
              </div>
            </div>

            <div className="job-list">
              {jobs.map((job) => (
                <a
                  href="/job-matches"
                  className="job-item"
                  key={job.title}
                >
                  <div className="job-icon">♙</div>

                  <span>{job.title}</span>

                  <strong>{job.match} Match</strong>
                </a>
              ))}
            </div>

            <a href="/job-matches" className="view-all-btn">
              View All Matches
            </a>
          </div>

        </section>

        {/* QUICK ACTIONS */}
        <section className="quick-section">
          <h3>Quick Actions</h3>

          <div className="quick-grid">
            <a href="/skill-assessment" className="quick-card">
              <div className="quick-icon">✓</div>
              <div>
                <strong>Take Skill Assessment</strong>
                <span>Evaluate your current skills</span>
              </div>
              <b>›</b>
            </a>

            <a href="/roadmap" className="quick-card">
              <div className="quick-icon">◎</div>
              <div>
                <strong>Continue Roadmap</strong>
                <span>Keep improving your skills</span>
              </div>
              <b>›</b>
            </a>

            <a href="/job-matches" className="quick-card">
              <div className="quick-icon">♙</div>
              <div>
                <strong>Explore Jobs</strong>
                <span>Find opportunities for you</span>
              </div>
              <b>›</b>
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Dashboard;