import React, { useState } from "react";
import VideoGalleryRow from "./VideoGalleryRow";

const VideoGallery = () => {
  const [suggestedTerms] = useState([
    "surfing",
    "skateboarding",
    "snowboarding",
    "dirtbikes",
  ]);

  const renderGalleryRows = () => {
    return suggestedTerms.map((item) => {
      return <VideoGalleryRow key={item} suggestedTerm={item} />;
    });
  };

  return <div>{renderGalleryRows()}</div>;
};

export default VideoGallery;
