import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Container from "./context/Container";

import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import Player from "./components/Player";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <div>
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
        </div>
      </BrowserRouter>
    </Container>
  );
};

export default App;
