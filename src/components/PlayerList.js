import React, { useEffect, useState } from "react";
import PlayerListItem from "./PlayerListItem";

const PlayerList = ({
  videosList,
  selectedVideo,
  getVideoList,
  onVideoClick,
}) => {
  const [playerList, setPlayerList] = useState([]);

  // useEffect(() => {
  //   const getVids = async (term, numberOfVideos) => {
  //     const result = await youtube.get("./search", {
  //       params: {
  //         q: term,
  //         maxResults: numberOfVideos,
  //       },
  //     });

  //     setPlayerList(result.data.items);
  //   };

  //   if (selectedVideo) getVids(selectedVideo.snippet.title, 3);
  // }, [selectedVideo]);

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
