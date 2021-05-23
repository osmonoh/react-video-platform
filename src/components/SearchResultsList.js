import React from "react";
import SearchResultsListItem from "./SearchResultsListItem";

const SearchResultsList = ({ onVideoClick, videosList }) => {
  const renderVideoItems = () => {
    return videosList.map((item) => (
      <SearchResultsListItem
        key={item.id.videoId}
        video={item}
        onVideoClick={onVideoClick}
      />
    ));
  };

  return <div className="ui relaxed divided list">{renderVideoItems()}</div>;
};

export default SearchResultsList;
