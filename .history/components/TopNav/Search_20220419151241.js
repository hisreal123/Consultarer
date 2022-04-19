import React from "react";
import SearchIcon from "../svgs/search.svg";

const Search = () => {
  return (
    <div className=" flex items-center  relative bg-[#E9E1E1] justify-between pr-3  ">
      <input
        type="text"
        name="search"
        id="search"
        value=""
        placeholder="Search users, services, skills topics, tags... "
        className="bg-[#E9E1E1] py-3 px-2 w-full rounded-lg"
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
