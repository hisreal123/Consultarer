import Link from "next/link";
import React from "react";
import CatLinkData from '../../utils/'

const ListLink = () => {
  return (
    <div className="relative ">
      <ul className=" bg-red-200 w-full inline-flex justify-between">
        <li className="p-2">Digital Marketing</li>

        <li>Graphic and Design</li>

        <li>Film Making</li>

        <li>Photography</li>

        <li>Android Development</li>

        <li>Copywriting</li>
      </ul>
    </div>
  );
};

export default ListLink;
