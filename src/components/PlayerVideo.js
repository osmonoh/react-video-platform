import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const PlayerVideo = () => {
  const { selectedVideo } = useContext(MyContext);

  if (selectedVideo) {
    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    return (
      <div className="ui segment">
        <div className="ui embed">
          <iframe
            src={videoSrc}
            title="video player"
            frameBorder="0"
            allow="fullscreen"
          ></iframe>
        </div>
        <div className="ui header">{selectedVideo.snippet.title}</div>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    );
  }
  return null;
};

export default PlayerVideo;
