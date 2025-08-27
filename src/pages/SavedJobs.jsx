import { useState } from "react";
import jobs from "../data/jobs";

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([jobs[0], jobs[1]]);

  const removeJob = (id) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== id));
  };

  return (
    <div className="container my-4">
      <h2>Saved Jobs</h2>
      {savedJobs.length === 0 ? (
        <p className="text-muted">No saved jobs yet.</p>
      ) : (
        <div className="row">
          {savedJobs.map((job) => (
            <div key={job.id} className="col-md-6">
              <div className="saved-card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
                  <p className="card-text">
                    <span className="job-icon"><i className="bi bi-geo-alt-fill text-primary"></i> {job.location}</span> <br />
                    <span className="job-icon"><i className="bi bi-currency-dollar text-success"></i> {job.salary}</span> |{" "}
                    <span className="job-icon"><i className="bi bi-briefcase text-secondary"></i> {job.type}</span>
                  </p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeJob(job.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedJobs;
