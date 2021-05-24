import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MyContext } from "./context/MyContext";

import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import Player from "./components/Player";
import "./App.css";

const App = () => {
  const { isDark } = useContext(MyContext);

  return (
    <div className={isDark ? "app-dark" : undefined}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/results">
            <SearchResults />
          </Route>
          <Route path="/watch">
            <Player />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
