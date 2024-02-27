import React from "react";
import { useState } from "react";
import axios from "../Api/axios";
import requests from "../Api/requests";
import "./Search.css";
import { useSearch } from "../../Context/SearchContext";
function Search() {
  const { search, flag, query, setFlag, setQuery, setResults } = useSearch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    if (query) {
      search(query);
    }
  };

  const cancelButton = () => {
    setFlag(!flag);
    setQuery("");
    setResults([]);
  };
  return (
    <div className="search-form">
      <input
        type="text"
        value={query}
        placeholder="Search for movies"
        onChange={handleChange}
        className="search-input"
      />
      {flag && (
        <button className="cancel-button" type="button" onClick={cancelButton}>
          X
        </button>
      )}
      {!flag && (
        <button type="button" className="search-button" onClick={handleSubmit}>
          Search
        </button>
      )}
    </div>
  );
}

export default Search;
