import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const PlayerListItem = ({ video }) => {
  const { onVideoClick } = useContext(MyContext);

  return (
    <div
      className="item"
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={() => onVideoClick(video)}
    >
      <img
        className="ui image"
        style={{ maxWidth: "180px" }}
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default PlayerListItem;
