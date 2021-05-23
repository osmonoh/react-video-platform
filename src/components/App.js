import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import youtube from "../apis/youtube";

import Home from "./Home";
import SearchResults from "./SearchResults";
import Player from "./Player";

const App = () => {
  const [videosList, setVideosList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // LOGS
  console.log("videosList:", videosList);
  console.log(selectedVideo);
  /////////////////////////////////////////

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
    getVideoList(term, 2, setVideosList);
  };

  const onVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Home
              onSearchSubmit={onSearchSubmit}
              getVideoList={getVideoList}
              onVideoClick={onVideoClick}
            />
          </Route>
          <Route path="/results">
            <SearchResults
              onSearchSubmit={onSearchSubmit}
              onVideoClick={onVideoClick}
              videosList={videosList}
            />
          </Route>
          <Route path="/watch">
            <Player
              onSearchSubmit={onSearchSubmit}
              getVideoList={getVideoList}
              onVideoClick={onVideoClick}
              selectedVideo={selectedVideo}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
