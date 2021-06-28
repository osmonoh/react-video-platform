import React, { useContext, useEffect, useState } from "react";
import { getVideoList } from "../context/Container";
import { MyContext } from "../context/MyContext";
import PlayerListItem from "./PlayerListItem";

const PlayerList = () => {
  // const { isDark, mount, setMount, memoGetVideoList, selectedVideo } =
  //   useContext(MyContext);
  const { isDark, mount, setMount, selectedVideo } = useContext(MyContext);

  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    if (selectedVideo)
      getVideoList(selectedVideo.snippet.title, 12, setPlayerList, mount);
    setMount(true);

    return () => setMount(!mount);
  }, [selectedVideo, mount, setMount]);

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
