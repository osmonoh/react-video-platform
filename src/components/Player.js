import React from "react";
import Header from "./Header";
import PlayerList from "./PlayerList";
import PlayerVideo from "./PlayerVideo";

const Player = ({
  onSearchSubmit,
  getVideoList,
  onVideoClick,
  selectedVideo,
}) => {
  return (
    <div className="ui container">
      <Header onSearchSubmit={onSearchSubmit} />
      {/* <h1>watch</h1> */}
      <div className="ui grid">
        <div className="eleven wide column">
          <PlayerVideo selectedVideo={selectedVideo} />
        </div>
        <div className="five wide column">
          <PlayerList
            getVideoList={getVideoList}
            onVideoClick={onVideoClick}
            selectedVideo={selectedVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
