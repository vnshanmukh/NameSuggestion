import React from "react";
import "./SearchBox.css";
const SearchBox = ({ inputchange }) => {
  return (
    <div className="search-container">
      <input
        onChange={(event) => inputchange(event.target.value)}
        placeholder="Type-Keywords"
        className="search-input"
      />
    </div>
  );
};

export default SearchBox;
