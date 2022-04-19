import React from "react";

const Search = () => {
  return (
    <div>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search users, services, skills topics, tags... "
      />
      <AiOutlineSearch />
    </div>
  );
};

export default Search;
