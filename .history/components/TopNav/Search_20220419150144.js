import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div>
      <input
        type="search"
        name="search"
        id="search"
        placeholder={`Search users, services, skills topics, tags... `}
      />
    </div>
  );
};

export default Search;
