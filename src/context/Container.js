import React, { useState, useCallback } from "react";
import youtube from "../apis/youtube";
import { MyContext } from "./MyContext";

const Container = ({ children }) => {
  const [videosList, setVideosList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [mount, setMount] = useState(true);

  const getVideoList = async (term, numberOfVideos, setter) => {
    const result = await youtube.get("./search", {
      params: {
        q: term,
        maxResults: numberOfVideos,
      },
    });

    if (mount) {
      setter(result.data.items);
    }
  };

  const memoGetVideoList = useCallback(
    (term, numberOfVideos, setter) =>
      getVideoList(term, numberOfVideos, setter),
    []
  );

  const onSearchSubmit = (term) => {
    memoGetVideoList(term, 3, setVideosList);
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
        memoGetVideoList,
        onSearchSubmit,
        onVideoClick,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Container;
