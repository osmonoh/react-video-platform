import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import SearchResultsListItem from "./SearchResultsListItem";

const SearchResultsList = () => {
  const { videosList, isDark } = useContext(MyContext);

  const renderVideoItems = () => {
    return videosList.map((item) => (
      <SearchResultsListItem key={item.id.videoId} video={item} />
    ));
  };

  return (
    <div
      className={`${isDark ? "inverted" : undefined} ui relaxed divided list`}
    >
      {renderVideoItems()}
    </div>
  );
};

export default SearchResultsList;
