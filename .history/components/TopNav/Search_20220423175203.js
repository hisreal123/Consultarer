import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ widthStyle, mobileStyle, inputStyle , lgStyle}) => {
  return (
    <div
      className={`transition hover:shadow-md  flex items-center  relative  bg-white  justify-between pr-3 lg:rounded-lg group  ${widthStyle} ${mobileStyle} ${lgStyle}`}
    >
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search users, services, skills topics, tags... "
        className={inputStyle}
      />
      <AiOutlineSearch className="transition hover:scale-105 cursor-pointer  " />
    </div>
  );
};

export default Search;
