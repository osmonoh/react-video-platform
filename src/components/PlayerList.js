import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import PlayerListItem from "./PlayerListItem";

const PlayerList = () => {
  const { isDark, mount, setMount, memoGetVideoList, selectedVideo } =
    useContext(MyContext);

  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    if (selectedVideo)
      memoGetVideoList(selectedVideo.snippet.title, 12, setPlayerList);
    setMount(true);

    return () => setMount(!mount);
  }, [selectedVideo, mount, setMount, memoGetVideoList]);

  const renderVideoItems = () => {
    return playerList
      .filter((item) => item.id.videoId !== selectedVideo.id.videoId)
      .map((item) => <PlayerListItem key={item.id.videoId} video={item} />);
  };

  return (
    <div
      className={`${isDark ? "inverted" : undefined} ui relaxed divided list`}
    >
      {renderVideoItems()}
    </div>
  );
};

export default PlayerList;
