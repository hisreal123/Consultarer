import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const ListLink = ({ data }) => {
  const router = useRouter();
  return (
    <div className="relative  bg-[#EBEBEB] ">
      <ul className=" w-100  flex whitespace-nowrap px-10 sm:px-20 space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide py-2 md:text-lg lg:w-screen">
        {data.map((list) => (
          <li
            key={list.id}
            // onClick={() => router.push(`/${list.Category}`)}
            className="hover:scale-105 transition duration-100  cursor-pointer active:text-red-500"
          >
            {list.Category}
          </li>
        ))}
      </ul>

      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#EBEBEB] h-10 w-11"></div>
    </div>
  );
};

export default ListLink;
