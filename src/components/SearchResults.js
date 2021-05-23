import React from "react";
import Header from "./Header";
import SearchResultsList from "./SearchResultsList";

const SearchResults = ({ onSearchSubmit, onVideoClick, videosList }) => {
  return (
    <div className="ui container">
      <Header onSearchSubmit={onSearchSubmit} />
      <SearchResultsList onVideoClick={onVideoClick} videosList={videosList} />
    </div>
  );
};

export default SearchResults;
