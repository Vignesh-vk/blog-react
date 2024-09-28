import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.length > 0 ? (
        results.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.id}`} className="result-item">
            <h4>{blog.title}</h4>
            <p>{blog.author}</p>
          </Link>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
