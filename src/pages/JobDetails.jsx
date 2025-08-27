import { useState } from "react";
import { useParams } from "react-router-dom";
import jobs from "../data/jobs";

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  const [applied, setApplied] = useState(false);

  if (!job) return <h2 className="text-center mt-4">Job not found!</h2>;

  const handleApply = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  // Related jobs (exclude current one)
  const relatedJobs = jobs.filter((j) => j.id !== job.id).slice(0, 2);

  return (
    <div className="container my-4">
      {/* Hero Section */}
      <div className="saved-card p-4 mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2>{job.title}</h2>
            <h5 className="text-muted">{job.company}</h5>
            <p>
              <span className="job-icon"><i className="bi bi-geo-alt-fill text-danger"></i> {job.location}</span> |{" "}
              <span className="job-icon"><i className="bi bi-currency-rupee text-success"></i> {job.salary}</span> |{" "}
              <span className="job-icon"><i className="bi bi-briefcase text-secondary"></i> {job.type}</span>
            </p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Job Sections */}
      <div className="mb-4">
        <h4>Job Description</h4>
        <p>{job.description}</p>
      </div>

      <div className="mb-4">
        <h4>Requirements</h4>
        <ul>
          <li>Strong knowledge of React/Node.js</li>
          <li>Experience with Git & teamwork</li>
          <li>Problem-solving mindset</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4>Benefits</h4>
        <ul>
          <li>Competitive salary and perks</li>
          <li>Remote flexibility</li>
          <li>Health insurance & wellness programs</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4>About the Company</h4>
        <p>
          {job.company} is a leading tech company that values innovation,
          collaboration, and employee growth. You'll be part of a diverse and
          talented team working on impactful projects.
        </p>
      </div>

      {/* Application Form */}
      <div className="mb-4">
        <h4>Apply for this job</h4>
        {applied ? (
          <p className="text-success">✅ Application submitted successfully!</p>
        ) : (
          <form onSubmit={handleApply} className="mt-3">
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-2">
              <textarea
                className="form-control"
                placeholder="Why are you a good fit?"
                rows="3"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Application
            </button>
          </form>
        )}
      </div>

      {/* Related Jobs */}
      <div className="mt-5">
        <h4>Related Jobs</h4>
        <div className="row">
          {relatedJobs.map((j) => (
            <div key={j.id} className="col-md-6">
              <div className="saved-card mb-3">
                <div className="card-body">
                  <h5>{j.title}</h5>
                  <p className="text-muted">{j.company}</p>
                  <p>
                    <span className="job-icon"><i className="bi bi-geo-alt-fill text-danger"></i> {j.location}</span> |{" "}
                    <span className="job-icon"><i className="bi bi-currency-rupee text-success"></i> {j.salary}</span>
                  </p>
                  <a href={`/job/${j.id}`} className="btn btn-outline-success btn-sm">
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
