import React, { useState } from "react";
import youtube from "../apis/youtube";
import Home from "./Home";
import Player from "./Player";
import SearchResults from "./SearchResults";

const App = () => {
  const [videosList, setVideosList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // const [playerList, setPlayerList] = useState([]);
  console.log("videosList:", videosList);
  console.log(selectedVideo);

  const getVideoList = async (term, numberOfVideos, setter) => {
    const result = await youtube.get("./search", {
      params: {
        q: term,
        maxResults: numberOfVideos,
      },
    });

    setter(result.data.items);
  };

  // const onSearchSubmit = async (term, numberOfVideos) => {
  //   const result = await youtube.get("./search", {
  //     params: {
  //       q: term,
  //       maxResults: numberOfVideos,
  //     },
  //   });

  //   setVideosList(result.data.items);
  // };

  const onVideoClick = (video) => {
    setSelectedVideo(video);

    // getVideoList(selectedVideo.snippet.title, 3, setPlayerList);
  };

  return (
    <div>
      <Home
        onSearchSubmit={(term) => {
          getVideoList(term, 2, setVideosList);
        }}
        getVideoList={getVideoList}
        onVideoClick={onVideoClick}
      />
      <SearchResults
        onSearchSubmit={(term) => {
          getVideoList(term, 2, setVideosList);
        }}
        onVideoClick={onVideoClick}
        videosList={videosList}
      />
      <Player
        onSearchSubmit={(term) => {
          getVideoList(term, 2, setVideosList);
        }}
        getVideoList={getVideoList}
        onVideoClick={onVideoClick}
        videosList={videosList}
        selectedVideo={selectedVideo}
      />
    </div>
  );
};

export default App;
