import React, { useState } from "react";
import VideoGalleryRow from "./VideoGalleryRow";

const VideoGallery = () => {
  const [suggestedTerms, setSuggestedTerms] = useState([
    "surfing",
    "skateboarding",
    "snowboarding",
    "dirtbikes",
  ]);

  //   const renderGalleryRows = (numberOfRows) => {
  //     let rows = [];
  //     for (let i = 0; i < numberOfRows; i++) {
  //       rows = [...rows, <VideoGalleryRow />];
  //     }
  //     return rows;
  //   };

  const renderGalleryRows = () => {
    return suggestedTerms.map((item) => {
      return <VideoGalleryRow key={item} suggestedTerm={item} />;
    });
  };

  return <div>{renderGalleryRows()}</div>;
};

export default VideoGallery;
