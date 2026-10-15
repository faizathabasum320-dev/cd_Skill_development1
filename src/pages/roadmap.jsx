import React, { useEffect, useState } from "react";
import { roadmapApi } from "../api";

function Roadmap() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadRoadmap();
  }, []);

  const loadRoadmap = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await roadmapApi.get();

      setModules(data.roadmap || []);
    } catch (err) {
      console.error("Roadmap loading failed:", err);
      setError(err.message || "Failed to load roadmap");
    } finally {
      setLoading(false);
    }
  };

  const toggleComplete = async (module) => {
    try {
      const newStatus = !module.completed;

      await roadmapApi.update(module.id, newStatus);

      setModules((previous) =>
        previous.map((item) =>
          item.id === module.id
            ? { ...item, completed: newStatus }
            : item
        )
      );
    } catch (err) {
      alert(err.message || "Failed to update progress");
    }
  };

  const completedCount = modules.filter(
    (module) => module.completed
  ).length;

  const progress =
    modules.length > 0
      ? Math.round((completedCount / modules.length) * 100)
      : 0;

  if (loading) {
    return (
      <div className="page-container">
        <div className="page-heading">
          <p className="eyebrow">YOUR LEARNING PATH</p>
          <h1>Career Roadmap</h1>
          <p className="page-subtitle">
            Loading your personalized learning path...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="page-heading">
          <p className="eyebrow">YOUR LEARNING PATH</p>
          <h1>Career Roadmap</h1>
          <p className="page-subtitle">
            {error}
          </p>

          <button
            className="primary-button"
            onClick={loadRoadmap}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-heading roadmap-heading">
        <div>
          <p className="eyebrow">YOUR LEARNING PATH</p>

          <h1>Career Roadmap</h1>

          <p className="page-subtitle">
            Follow your personalized learning path and build the skills
            needed for your career.
          </p>
        </div>
      </div>

      {/* Roadmap Overview */}

      <div className="roadmap-overview">
        <div className="roadmap-overview-content">
          <div>
            <p className="overview-label">OVERALL PROGRESS</p>

            <h2>{progress}%</h2>

            <p>
              {completedCount} of {modules.length} modules completed
            </p>
          </div>

          <div className="roadmap-progress-box">
            <div className="roadmap-progress-header">
              <span>Learning Progress</span>

              <strong>{progress}%</strong>
            </div>

            <div className="roadmap-progress">
              <div
                className="roadmap-progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Modules */}

      <div className="roadmap-section">
        <div className="section-title">
          <div>
            <h2>Learning Modules</h2>

            <p>
              Complete each module to move forward in your roadmap.
            </p>
          </div>
        </div>

        <div className="roadmap-list">
          {modules.map((module, index) => (
            <div
              className={`roadmap-module ${
                module.completed ? "module-completed" : ""
              }`}
              key={module.id}
            >
              <div className="roadmap-number">
                {module.completed
                  ? "✓"
                  : String(index + 1).padStart(2, "0")}
              </div>

              <div className="roadmap-module-content">
                <span className="roadmap-category">
                  {module.skill}
                </span>

                <h3>{module.title}</h3>

                <p>{module.description}</p>

                <div className="roadmap-meta">
                  {module.duration && (
                    <span>◷ {module.duration}</span>
                  )}

                  {module.level && (
                    <span>◆ {module.level}</span>
                  )}

                  {module.topics && (
                    <span>● {module.topics}</span>
                  )}
                </div>
              </div>

              <div className="roadmap-module-action">
                <span
                  className={`roadmap-status ${
                    module.completed
                      ? "completed-status"
                      : "pending-status"
                  }`}
                >
                  {module.completed
                    ? "Completed"
                    : "Not Started"}
                </span>

                <button
                  className="primary-button small-button"
                  onClick={() => toggleComplete(module)}
                >
                  {module.completed
                    ? "Mark Incomplete"
                    : "Start Learning"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Goal */}

      <div className="career-goal-card">
        <div className="career-goal-icon">★</div>

        <div>
          <p className="eyebrow">CAREER GOAL</p>

          <h2>Software Developer</h2>

          <p>
            Complete your roadmap to strengthen your programming,
            development and database skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;