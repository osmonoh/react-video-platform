import React, { useEffect, useState } from "react";
import PlayerListItem from "./PlayerListItem";

const PlayerList = ({ selectedVideo, getVideoList, onVideoClick }) => {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    if (selectedVideo)
      getVideoList(selectedVideo.snippet.title, 3, setPlayerList);
  }, [selectedVideo, getVideoList]);

  const renderVideoItems = () => {
    return playerList
      .filter((item) => item.id.videoId !== selectedVideo.id.videoId)
      .map((item) => (
        <PlayerListItem
          key={item.id.videoId}
          video={item}
          onVideoClick={onVideoClick}
        />
      ));
  };

  return <div className="ui relaxed divided list">{renderVideoItems()}</div>;
};

export default PlayerList;
