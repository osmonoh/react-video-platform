import React from "react";
import Header from "./Header";
import VideoGallery from "./VideoGallery";

const Home = ({ onSearchSubmit, getVideoList, onVideoClick }) => {
  return (
    <div className="ui container">
      <Header onSearchSubmit={onSearchSubmit} />
      <VideoGallery getVideoList={getVideoList} onVideoClick={onVideoClick} />
    </div>
  );
};

export default Home;
