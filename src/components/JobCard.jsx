import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Keep icons

function JobCard({ job, onSave }) {
  return (
    <div className="card job-card mb-3">
      <div className="card-body">
        {/* Title and Status */}
        <div className="title-status">
          <h5 className="card-title">{job.title}</h5>
          <span className={`badge ${
            job.status === "New" ? "bg-success" :
            job.status === "Hot" ? "bg-danger" :
            "bg-warning text-dark"
          }`}>
            {job.status}
          </span>
        </div>

        {/* Company */}
        <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>

        {/* Job Details */}
        <p className="card-text">
          <span className="job-icon">
            <i className="bi bi-geo-alt-fill text-primary"></i> {job.location}
          </span>
          <br />
          <span className="job-icon">
            <i className="bi bi-currency-dollar text-success"></i> {job.salary} | 
            <i className="bi bi-briefcase text-secondary"></i> {job.type}
          </span>
        </p>

        {/* Buttons */}
        <div className="card-actions">
          <Link to={`/job/${job.id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
          <button
            className="btn btn-outline-success btn-sm"
            onClick={() => onSave(job)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
