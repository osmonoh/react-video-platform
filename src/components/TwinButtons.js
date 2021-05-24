import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const TwinButtons = () => {
  const { setIsDark } = useContext(MyContext);

  const darkOn = () => setIsDark(true);
  const darkOff = () => setIsDark(false);

  return (
    <div>
      <button className="ui left attached button" onClick={darkOn}>
        Login
      </button>
      <button className="ui right attached button" onClick={darkOff}>
        Register
      </button>
    </div>
  );
};

export default TwinButtons;
