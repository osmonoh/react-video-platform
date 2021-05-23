import React from "react";
import Header from "./Header";
import SearchResultsList from "./SearchResultsList";

const SearchResults = () => {
  return (
    <div className="ui container">
      <Header />
      <SearchResultsList />
    </div>
  );
};

export default SearchResults;
