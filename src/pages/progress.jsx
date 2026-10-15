import React from "react";

function Progress() {
  const skills = [
    {
      name: "Java",
      category: "Programming",
      progress: 85,
      status: "Completed",
    },
    {
      name: "Python",
      category: "Programming",
      progress: 70,
      status: "In Progress",
    },
    {
      name: "SQL",
      category: "Database",
      progress: 60,
      status: "In Progress",
    },
    {
      name: "React",
      category: "Web Development",
      progress: 45,
      status: "In Progress",
    },
    {
      name: "Data Structures",
      category: "Computer Science",
      progress: 90,
      status: "Completed",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <p className="eyebrow">YOUR PERFORMANCE</p>
          <h1>Learning Progress</h1>
          <p className="page-subtitle">
            Track your skills, learning activity and achievements.
          </p>
        </div>
      </div>

      {/* Summary Cards */}

      <div className="progress-summary">
        <div className="progress-summary-card">
          <div className="progress-summary-icon blue">%</div>
          <div>
            <span>Overall Progress</span>
            <strong>68%</strong>
          </div>
        </div>

        <div className="progress-summary-card">
          <div className="progress-summary-icon green">✓</div>
          <div>
            <span>Completed Skills</span>
            <strong>12</strong>
          </div>
        </div>

        <div className="progress-summary-card">
          <div className="progress-summary-icon orange">◷</div>
          <div>
            <span>Learning Hours</span>
            <strong>24.5</strong>
          </div>
        </div>

        <div className="progress-summary-card">
          <div className="progress-summary-icon purple">★</div>
          <div>
            <span>Achievements</span>
            <strong>6</strong>
          </div>
        </div>
      </div>

      {/* Skill Progress */}

      <div className="content-card progress-skills-card">
        <div className="card-header">
          <div>
            <h2>Skill Progress</h2>
            <p>Monitor your progress across different skills.</p>
          </div>
        </div>

        <div className="progress-skill-list">
          {skills.map((skill) => (
            <div className="progress-skill-item" key={skill.name}>
              <div className="progress-skill-top">
                <div>
                  <h3>{skill.name}</h3>
                  <span>{skill.category}</span>
                </div>

                <div className="progress-skill-percentage">
                  {skill.progress}%
                </div>
              </div>

              <div className="skill-progress-bar">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>

              <div className="progress-skill-bottom">
                <span
                  className={
                    skill.status === "Completed"
                      ? "completed-label"
                      : "learning-label"
                  }
                >
                  {skill.status}
                </span>

                <span>{skill.progress}% complete</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Activity */}

      <div className="two-column-grid progress-bottom-grid">
        <div className="content-card">
          <div className="card-header">
            <div>
              <h2>Weekly Activity</h2>
              <p>Your learning activity this week.</p>
            </div>
          </div>

          <div className="activity-list">
            <div className="activity-row">
              <span>Monday</span>
              <div className="activity-bar">
                <div style={{ width: "75%" }}></div>
              </div>
              <strong>2.5h</strong>
            </div>

            <div className="activity-row">
              <span>Tuesday</span>
              <div className="activity-bar">
                <div style={{ width: "50%" }}></div>
              </div>
              <strong>1.5h</strong>
            </div>

            <div className="activity-row">
              <span>Wednesday</span>
              <div className="activity-bar">
                <div style={{ width: "90%" }}></div>
              </div>
              <strong>3h</strong>
            </div>

            <div className="activity-row">
              <span>Thursday</span>
              <div className="activity-bar">
                <div style={{ width: "65%" }}></div>
              </div>
              <strong>2h</strong>
            </div>

            <div className="activity-row">
              <span>Friday</span>
              <div className="activity-bar">
                <div style={{ width: "80%" }}></div>
              </div>
              <strong>2.5h</strong>
            </div>
          </div>
        </div>

        {/* Achievements */}

        <div className="content-card">
          <div className="card-header">
            <div>
              <h2>Achievements</h2>
              <p>Milestones you have reached.</p>
            </div>
          </div>

          <div className="achievement-list">
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <div>
                <h3>First Skill Completed</h3>
                <p>Completed your first learning module.</p>
              </div>
            </div>

            <div className="achievement-item">
              <div className="achievement-icon">🔥</div>
              <div>
                <h3>Learning Streak</h3>
                <p>Maintained a 7-day learning streak.</p>
              </div>
            </div>

            <div className="achievement-item">
              <div className="achievement-icon">🚀</div>
              <div>
                <h3>Career Ready</h3>
                <p>Reached 60% career readiness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Goal */}

      <div className="learning-goal-card">
        <div>
          <p className="eyebrow">MONTHLY GOAL</p>
          <h2>Complete 30 Learning Hours</h2>
          <p>
            You have completed 24.5 hours this month. Keep learning to
            reach your goal.
          </p>
        </div>

        <div className="goal-progress">
          <strong>82%</strong>
          <div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;