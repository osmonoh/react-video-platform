import React, { useState } from "react";
import youtube from "../apis/youtube";
import { MyContext } from "./MyContext";

const Container = ({ children }) => {
  const [videosList, setVideosList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const getVideoList = async (term, numberOfVideos, setter) => {
    const result = await youtube.get("./search", {
      params: {
        q: term,
        maxResults: numberOfVideos,
      },
    });

    setter(result.data.items);
  };

  const onSearchSubmit = (term) => {
    getVideoList(term, 3, setVideosList);
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
        getVideoList,
        onSearchSubmit,
        onVideoClick,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Container;
