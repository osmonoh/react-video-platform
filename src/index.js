import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Container from "./context/Container";

const Wrap = () => {
  return <App />;
};

ReactDOM.render(
  <Container>
    <Wrap />
  </Container>,
  document.querySelector("#root")
);
