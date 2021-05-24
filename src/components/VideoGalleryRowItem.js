import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import "../App.css";

const VideoItem = ({ video }) => {
  const { isDark, onVideoClick } = useContext(MyContext);

  const onClick = () => {
    onVideoClick(video);
  };

  return (
    <Link
      to="/watch"
      className={`${isDark ? "gallery-card-dark" : undefined} card`}
      onClick={onClick}
    >
      <div className="image">
        <img src={video.snippet.thumbnails.medium.url} alt="youtube video" />
      </div>
      <div className="content">
        <div className={`${isDark ? "card-header-dark" : undefined} header`}>
          {video.snippet.title}
        </div>
      </div>
    </Link>
  );
};

export default VideoItem;
