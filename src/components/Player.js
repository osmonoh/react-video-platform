import React from "react";
import Header from "./Header";
import PlayerList from "./PlayerList";
import PlayerVideo from "./PlayerVideo";

const Player = () => {
  return (
    <div className="ui container">
      <Header />
      <div className="ui grid">
        <div className="eleven wide column">
          <PlayerVideo />
        </div>
        <div className="five wide column">
          <PlayerList />
        </div>
      </div>
    </div>
  );
};

export default Player;
