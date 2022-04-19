import React from "react";
import SearchIcon from "../svgs/search.svg";

const Search = () => {
  return (
    <div>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search users, services, skills topics, tags... "
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
