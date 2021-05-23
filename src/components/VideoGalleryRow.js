import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import VideoGalleryRowItem from "./VideoGalleryRowItem";

const VideoGalleryRow = ({ suggestedTerm }) => {
  const { getVideoList } = useContext(MyContext);

  const [rowVideos, setRowVideos] = useState([]);

  useEffect(() => {
    getVideoList(suggestedTerm, 4, setRowVideos);
  }, [suggestedTerm, getVideoList]);

  const renderVideosInRow = () => {
    return rowVideos.map((item) => (
      <VideoGalleryRowItem key={item.id.videoId} video={item} />
    ));
  };

  return <div className="ui four cards">{renderVideosInRow()}</div>;
};

export default VideoGalleryRow;
