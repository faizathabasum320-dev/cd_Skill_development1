import React from "react";

function Home({ goToLogin, goToRegister }) {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="brand">
          <div className="brand-logo">S</div>
          <div>
            <h2>SkillFlow</h2>
            <p>Career Intelligence</p>
          </div>
        </div>

        <div className="home-actions">
          <button className="secondary-button" onClick={goToLogin}>
            Sign In
          </button>
          <button className="primary-button" onClick={goToRegister}>
            Get Started
          </button>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">YOUR CAREER, YOUR FUTURE</p>
          <h1>Build the skills for your dream career.</h1>
          <p>
            SkillFlow helps you understand your strengths, identify skill gaps,
            follow a personalized roadmap and discover matching opportunities.
          </p>

          <div className="hero-buttons">
            <button className="primary-button" onClick={goToRegister}>
              Start Your Journey →
            </button>
            <button className="secondary-button" onClick={goToLogin}>
              Explore Dashboard
            </button>
          </div>
        </div>

        <div className="hero-preview">
          <div className="preview-top">
            <span>SkillFlow Dashboard</span>
            <span className="preview-dot"></span>
          </div>

          <div className="preview-welcome">
            <p>WELCOME BACK, ALEX</p>
            <h2>Ready to grow your career?</h2>
          </div>

          <div className="preview-stats">
            <div>
              <span>Career Readiness</span>
              <strong>68%</strong>
            </div>
            <div>
              <span>Skills Completed</span>
              <strong>12</strong>
            </div>
          </div>

          <div className="preview-progress">
            <div className="preview-progress-header">
              <strong>Learning Progress</strong>
              <span>68%</span>
            </div>
            <div className="mini-progress">
              <span style={{ width: "68%" }}></span>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-title center-title">
          <p className="eyebrow">EVERYTHING YOU NEED</p>
          <h2>Plan. Learn. Grow.</h2>
          <p>One platform for your complete career development journey.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon purple">▤</div>
            <h3>Skill Assessment</h3>
            <p>Understand your current skills and identify areas to improve.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon blue">◎</div>
            <h3>Personalized Roadmap</h3>
            <p>Follow a learning path designed around your career goals.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon green">◆</div>
            <h3>Job Matches</h3>
            <p>Discover opportunities that match your skills and interests.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;