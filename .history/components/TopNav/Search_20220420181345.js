import React from "react";
import SearchIcon from "../svgs/search.svg";

const Search = ({ widthStyle, mobileStyle,  inputStyle }) => {
  return (
    <div
      className={`transition hover:shadow-md  flex items-center  relative  bg-white lg:bg-[#E9E1E1] justify-between pr-3 lg:rounded-lg group ${widthStyle} ${mobileStyle}`}
    >
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search users, services, skills topics, tags... "
        className={inputStyle}
      />
      <SearchIcon className="transition hover:scale-105 cursor-pointer  " />
    </div>
  );
};

export default Search;
