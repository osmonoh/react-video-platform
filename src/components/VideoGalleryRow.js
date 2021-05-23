import React, { useEffect, useState } from "react";
import VideoGalleryRowItem from "./VideoGalleryRowItem";

const VideoGalleryRow = ({ suggestedTerm, getVideoList, onVideoClick }) => {
  const [rowVideos, setRowVideos] = useState([]);
  //   console.log(props);

  // useEffect(() => {
  //   const getVids = async (term, numberOfVideos) => {
  //     const result = await youtube.get("./search", {
  //       params: {
  //         q: term,
  //         maxResults: numberOfVideos,
  //       },
  //     });

  //     setRowVideos(result.data.items);
  //   };

  //   getVids(suggestedTerm, 4);
  // }, [suggestedTerm]);

  useEffect(() => {
    getVideoList(suggestedTerm, 4, setRowVideos);
  }, [suggestedTerm, getVideoList]);

  const renderVideosInRow = () => {
    return rowVideos.map((item) => {
      //   console.log(item);
      return (
        <VideoGalleryRowItem
          key={item.id.videoId}
          video={item}
          onVideoClick={onVideoClick}
        />
      );
    });
  };

  return <div className="ui four cards">{renderVideosInRow()}</div>;
};

export default VideoGalleryRow;
