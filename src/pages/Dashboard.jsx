import { useState } from "react";
import jobs from "../data/jobs";

function Dashboard() {
  const [appliedJobs] = useState([
    { id: 1, title: "Frontend Developer", company: "Google", status: "In Review" },
    { id: 2, title: "Backend Developer", company: "Microsoft", status: "Applied" },
  ]);

  const [savedJobs, setSavedJobs] = useState([jobs[0], jobs[1]]);
  const profileCompletion = 70; 
  const recommendedJobs = jobs.slice(2, 5); 

  const removeSavedJob = (id) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== id));
  };

  const handleSave = (job) => {
    if (!savedJobs.find((j) => j.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  return (
    <div className="container my-4">
      <div className="dashboard-container">
        <div className="row">

          {/* Left Column: Profile */}
          <div className="col-lg-3 mb-4">
            <div className="profile-card">
              <div className="profile-avatar">
                R
              </div>
              <div className="profile-info">
                <h5 className="profile-name">Rashmi Kumari</h5>
                <p className="profile-title">Frontend Developer</p>
              </div>
              
              <div className="profile-completion-section">
                <h6>Profile Completion</h6>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    style={{ width: `${profileCompletion}%` }}
                  >
                    <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>
                      {profileCompletion}%
                    </span>
                  </div>
                </div>
                <button className="btn btn-outline-primary w-100">Edit Profile</button>
              </div>
              
              {/* Stats Cards */}
              <div className="stats-container">
                <div className="stat-card">
                  <span className="stat-number">{appliedJobs.length}</span>
                  <span className="stat-label">Applications</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">{savedJobs.length}</span>
                  <span className="stat-label">Saved Jobs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Applications + Saved Jobs */}
          <div className="col-lg-6 mb-4">

            {/* Applied Jobs */}
            <div className="applications-card">
              <h5>My Applications</h5>
              {appliedJobs.length === 0 ? (
                <p className="text-muted">You haven't applied for any jobs yet.</p>
              ) : (
                <table className="table mt-3">
                  <thead>
                    <tr>
                      <th>Job Title</th>
                      <th>Company</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appliedJobs.map((job) => (
                      <tr key={job.id}>
                        <td>{job.title}</td>
                        <td>{job.company}</td>
                        <td>
                          <span className={`badge ${
                            job.status === "Applied"
                              ? "bg-primary"
                              : job.status === "In Review"
                              ? "bg-warning text-dark"
                              : "bg-success"
                          }`}>
                            {job.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Saved Jobs */}
            <div className="saved-jobs-card">
              <h5>Saved Jobs</h5>
              {savedJobs.length === 0 ? (
                <p className="text-muted">No saved jobs yet.</p>
              ) : (
                savedJobs.map((job) => (
                  <div key={job.id} className="saved-card hover-shadow mb-3">
                    <div className="card-body">
                      <h6 className="card-title">{job.title}</h6>
                      <p className="text-muted mb-1">{job.company}</p>
                      <p className="mb-1">
                        <span className="job-icon">
                          <i className="bi bi-geo-alt-fill text-primary"></i>{job.location}
                        </span>
                        <br />
                        <span className="job-icon">
                          <i className="bi bi-currency-dollar text-success"></i>{job.salary} | 
                          <i className="bi bi-briefcase text-secondary"></i>{job.type}
                        </span>
                      </p>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeSavedJob(job.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Column: Recommended Jobs */}
          <div className="col-lg-3 mb-4">
            <div className="recommended-card">
              <h5>Recommended Jobs</h5>
              {recommendedJobs.length === 0 ? (
                <p className="text-muted">No recommendations yet.</p>
              ) : (
                recommendedJobs.map((job) => (
                  <div key={job.id} className="saved-card hover-shadow mb-3">
                    <div className="card-body">
                      <h6 className="card-title">{job.title}</h6>
                      <p className="text-muted mb-1">{job.company}</p>
                      <p className="mb-1">
                        <span className="job-icon">
                          <i className="bi bi-geo-alt-fill text-primary"></i>{job.location}
                        </span>
                        <br />
                        <span className="job-icon">
                          <i className="bi bi-currency-dollar text-success"></i>{job.salary} 
                          <i className="bi bi-briefcase text-secondary"></i>{job.type}
                        </span>
                      </p>
                      <button
                        className="btn btn-outline-success btn-sm w-100"
                        onClick={() => handleSave(job)}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;