function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <i className="bi bi-search search-icon"></i>
      <input
        type="text"
        className="form-control"
        placeholder="Search jobs by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
