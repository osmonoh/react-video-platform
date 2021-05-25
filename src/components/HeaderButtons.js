import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const TwinButtons = () => {
  const { isDark, setIsDark } = useContext(MyContext);

  const darkToggle = () => setIsDark(!isDark);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div className="twin-buttons">
        <button
          className={`ui left attached ${isDark ? "grey" : undefined} button`}
        >
          Login
        </button>
        <button
          className={`ui right attached ${isDark ? "grey" : undefined} button`}
        >
          Register
        </button>
      </div>
      <button
        className={`circular ui icon ${isDark ? "grey" : undefined} button`}
        onClick={darkToggle}
      >
        <i className={`icon ${isDark ? "sun" : "moon"}`}></i>
      </button>
    </div>
  );
};

export default TwinButtons;
