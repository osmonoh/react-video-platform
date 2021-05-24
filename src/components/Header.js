import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

import SearchBar from "./SearchBar";
import TwinButtons from "./TwinButtons";

// logomakr.com/5uwQ3M
import logoBlack from "../images/watch-logo-grey.png";
import logoWhite from "../images/watch-logo-white.png";

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
          src={isDark ? logoWhite : logoBlack}
          alt="logo"
          style={{ maxWidth: "120px" }}
        />
      </Link>
      <SearchBar />
      <TwinButtons />
    </div>
  );
};

export default Header;
