import React from "react";

const VideoItem = ({ video, onVideoClick }) => {
  const onClick = () => {
    onVideoClick(video);
  };

  return (
    <div className="card" style={{ cursor: "pointer" }} onClick={onClick}>
      <div className="image">
        <img src={video.snippet.thumbnails.medium.url} alt="youtube video" />
      </div>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
