import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";

const VideoItem = ({ video }) => {
  const { onVideoClick } = useContext(MyContext);

  const onClick = () => {
    onVideoClick(video);
  };

  return (
    <Link
      to="/watch"
      className="card"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <div className="image">
        <img src={video.snippet.thumbnails.medium.url} alt="youtube video" />
      </div>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </Link>
  );
};

export default VideoItem;
