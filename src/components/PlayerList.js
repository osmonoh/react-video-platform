import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import PlayerListItem from "./PlayerListItem";

const PlayerList = () => {
  const { getVideoList, selectedVideo } = useContext(MyContext);

  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    if (selectedVideo)
      getVideoList(selectedVideo.snippet.title, 3, setPlayerList);
  }, [selectedVideo, getVideoList]);

  const renderVideoItems = () => {
    return playerList
      .filter((item) => item.id.videoId !== selectedVideo.id.videoId)
      .map((item) => <PlayerListItem key={item.id.videoId} video={item} />);
  };

  return <div className="ui relaxed divided list">{renderVideoItems()}</div>;
};

export default PlayerList;
