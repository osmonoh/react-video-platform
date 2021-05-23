import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import TwinButtons from "./TwinButtons";

const Header = ({ onSearchSubmit }) => {
  return (
    <div
      className="ui segment"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <TwinButtons />
    </div>
  );
};

export default Header;
