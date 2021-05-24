import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import TwinButtons from "./TwinButtons";

import logoBlack from "../images/watch-logo-grey.png";
// logomakr.com/5uwQ3M

const Header = () => {
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
        <img src={logoBlack} alt="logo" style={{ maxWidth: "120px" }} />
      </Link>
      <SearchBar />
      <TwinButtons />
    </div>
  );
};

export default Header;
