import React, { useState } from "react";
import { getVideoList } from "../apis/controllers";
import { MyContext } from "./MyContext";

const Container = ({ children }) => {
  const [videosList, setVideosList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [mount, setMount] = useState(true);

  const onSearchSubmit = (term) => {
    getVideoList(term, 9, setVideosList, mount);
  };

  const onVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <MyContext.Provider
      value={{
        videosList,
        setVideosList,
        selectedVideo,
        setSelectedVideo,
        isDark,
        setIsDark,
        mount,
        setMount,
        onSearchSubmit,
        onVideoClick,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Container;
