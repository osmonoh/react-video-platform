import React, { useContext, useEffect, useState } from "react";
import { getVideoList } from "../apis/controllers";
import { MyContext } from "../context/MyContext";
import VideoGalleryRowItem from "./VideoGalleryRowItem";

const VideoGalleryRow = ({ suggestedTerm }) => {
  const { mount } = useContext(MyContext);

  const [rowVideos, setRowVideos] = useState([]);

  useEffect(() => {
    getVideoList(suggestedTerm, 4, setRowVideos, mount);
  }, [suggestedTerm, mount]);

  const renderVideosInRow = () => {
    return rowVideos.map((item) => (
      <VideoGalleryRowItem key={item.id.videoId} video={item} />
    ));
  };

  return <div className="ui four cards">{renderVideosInRow()}</div>;
};

export default VideoGalleryRow;
