import React from "react";

import "./style.css"

export default function SearchForm({ value, onChange, handleSubmit }) {
    return (
        <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={onChange}
            value={value}
            name="search"
            type="text"
            className="form-control"
            id="search"
          />
          <br />
          <button onClick={handleSubmit} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    )
}