import React from "react";
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
      <h1>Logo</h1>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <TwinButtons />
    </div>
  );
};

export default Header;
