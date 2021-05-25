import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import SearchBar from "./SearchBar";
import HeaderButtons from "./HeaderButtons";

// logomakr.com/5uwQ3M
import logoDark from "../images/watch-logo-darkgrey.png";
import logoLight from "../images/watch-logo-lightgrey.png";

const Header = () => {
  const { isDark } = useContext(MyContext);

  return (
    <div
      className={`${isDark ? "header-dark" : undefined} ui segment`}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <img
          src={isDark ? logoLight : logoDark}
          alt="logo"
          style={{ maxWidth: "120px" }}
        />
      </Link>
      <SearchBar />
      <HeaderButtons />
    </div>
  );
};

export default Header;
