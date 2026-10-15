import React, { useState } from "react";

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [savedJobs, setSavedJobs] = useState([]);

  const jobs = [
    {
      id: 1,
      title: "Junior Java Developer",
      company: "Tech Solutions",
      location: "Hyderabad",
      type: "Full Time",
      experience: "0-2 Years",
      match: 92,
      skills: ["Java", "Spring Boot", "SQL"],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "WebWorks",
      location: "Bangalore",
      type: "Full Time",
      experience: "0-2 Years",
      match: 86,
      skills: ["React", "JavaScript", "HTML"],
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Data Insights",
      location: "Hyderabad",
      type: "Full Time",
      experience: "1-3 Years",
      match: 81,
      skills: ["Python", "SQL", "Excel"],
    },
    {
      id: 4,
      title: "Software Engineer Intern",
      company: "Innovate Labs",
      location: "Chennai",
      type: "Internship",
      experience: "Fresher",
      match: 78,
      skills: ["Java", "Python", "DSA"],
    },
  ];

  const toggleSave = (id) => {
    setSavedJobs((previous) =>
      previous.includes(id)
        ? previous.filter((jobId) => jobId !== id)
        : [...previous, id]
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "All Locations" || job.location === location;

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <p className="eyebrow">CAREER OPPORTUNITIES</p>
          <h1>Find Your Next Job</h1>
          <p className="page-subtitle">
            Discover jobs that match your skills and career goals.
          </p>
        </div>
      </div>

      <div className="jobs-summary">
        <div>
          <strong>{jobs.length}</strong>
          <span>Recommended Jobs</span>
        </div>

        <div>
          <strong>{savedJobs.length}</strong>
          <span>Saved Jobs</span>
        </div>

        <div>
          <strong>85%</strong>
          <span>Average Skill Match</span>
        </div>
      </div>

      <div className="jobs-filter-card">
        <div className="job-search">
          <label>Search Jobs</label>
          <input
            type="text"
            placeholder="Search by job title or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="job-location">
          <label>Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>All Locations</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Chennai</option>
          </select>
        </div>
      </div>

      <div className="jobs-header">
        <div>
          <h2>Recommended Jobs</h2>
          <p>Jobs selected based on your current skills.</p>
        </div>
        <span>{filteredJobs.length} jobs found</span>
      </div>

      <div className="jobs-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-main">
                <div className="company-logo">
                  {job.company.charAt(0)}
                </div>

                <div className="job-info">
                  <h3>{job.title}</h3>
                  <p className="company-name">{job.company}</p>

                  <div className="job-details">
                    <span>📍 {job.location}</span>
                    <span>◷ {job.type}</span>
                    <span>◆ {job.experience}</span>
                  </div>

                  <div className="job-skills">
                    {job.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="job-actions">
                <div className="match-box">
                  <strong>{job.match}%</strong>
                  <span>Skill Match</span>
                </div>

                <button
                  className={`save-job ${
                    savedJobs.includes(job.id) ? "saved" : ""
                  }`}
                  onClick={() => toggleSave(job.id)}
                >
                  {savedJobs.includes(job.id) ? "★ Saved" : "☆ Save"}
                </button>

                <button className="primary-button small-button">
                  View Job
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-jobs">
            <div className="no-jobs-icon">⌕</div>
            <h3>No jobs found</h3>
            <p>
              Try changing your search or location filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;