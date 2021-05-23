import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // onSearchSubmit(term, 2);
    onSearchSubmit(term);
  };

  return (
    <form className="ui form" style={{ width: "50%" }} onSubmit={onSubmit}>
      <div className="ui action input" style={{ width: "100%" }}>
        <input
          type="text"
          placeholder="Search..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="ui icon button">
          <i className="search icon"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

// pure SEARCH BAR to be used in all pages

// import React from "react";

// const SearchBar = () => {
//   return (
//     <form className="ui form" style={{ width: "50%" }}>
//       <div className="ui action input" style={{ width: "100%" }}>
//         <input type="text" placeholder="Search..." />
//         <button className="ui icon button">
//           <i className="search icon"></i>
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;
