import { useEffect, useState } from "react";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [search, setSearch] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [filterLocation, setFilterLocation] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [filteredJobs, setFilteredJobs] = useState(jobs); 

  const handleSave = (job) => {
    if (!savedJobs.find((j) => j.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
      alert("Job saved!");
    }
  };

  
  const filterJobs = () => {
    let filtered = jobs
      .filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase())
      )
      .filter((job) => filterLocation === "All" || job.location === filterLocation)
      .filter((job) => filterType === "All" || job.type === filterType)
      .sort((a, b) => {
        if (sortBy === "date") return new Date(b.datePosted) - new Date(a.datePosted);
        if (sortBy === "salary")
          return parseInt(b.salary.replace(/\D/g, "")) - parseInt(a.salary.replace(/\D/g, ""));
        if (sortBy === "company") return a.company.localeCompare(b.company);
        return 0;
      });

    setFilteredJobs(filtered); 
  };

  
  useEffect(() => {
    filterJobs();
  }, [search]); 

  return (
    <div className="container my-4">
      <h2 className="mb-3">Find Your Dream Job</h2>

      {/* Search Bar */}
      <div className="mb-3">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {/* Filters + Sort */}
      <div className="row mb-4">
        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
          >
            <option value="All">All Locations</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Pune">Pune</option>
          </select>
        </div>
        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Sort by Date</option>
            <option value="salary">Sort by Salary</option>
            <option value="company">Sort by Company</option>
          </select>
        </div>
      </div>

      {/* Job Cards */}
      <div className="row">
        {filteredJobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className="col-md-6 mb-3">
              <JobCard job={job} onSave={handleSave} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
