import React from "react";
import { Link } from "react-router-dom";

const SearchResultsListItem = ({ video, onVideoClick }) => {
  const videoData = video.snippet;

  const onClick = () => {
    onVideoClick(video);
  };

  return (
    <Link
      to="/watch"
      className="item"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <img
        className="ui image"
        src={videoData.thumbnails.medium.url}
        alt="youtube video"
      />
      <div className="content">
        <div className="ui header" style={{ marginBottom: "10px" }}>
          {videoData.title}
        </div>
        <div className="description">{videoData.description}</div>
      </div>
    </Link>
  );
};

export default SearchResultsListItem;
