import { React, useState } from "react";
import {IoClose} from 'react-icons/io'
import { BsBriefcase } from "react-icons/bs";
import { MdOutlineCoronavirus } from "react-icons/md";

const AsideLink = [
  {
    id: 1,
    title: " Workplace",
  },

  {
    id: 2,
    title: "Hub",
  },
];

// Aside Navbar
export const Aside = () => {
  const [OpenedAside, setOpenedAside] = useState(true);

  return (
    <div className="h-screen bg-white w-3/4 absolute top-0 bottom-0 left-0  shadow-lg ">
    .t
      <h1> Aside Navbar for opening </h1>


    </div>
  );
};
