import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
    history.push("/results");
  };

  return (
    <form className="ui form" style={{ width: "50%" }} onSubmit={onSubmit}>
      <div className="ui action input" style={{ width: "100%" }}>
        <input
          type="text"
          placeholder="Search..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="ui icon button">
          <i className="search icon"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
