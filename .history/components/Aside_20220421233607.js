import { React, useState } from "react";
import { GrFormClose } from "react-icons/gr";
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
  const [OpenedAside, setOpenedAside] = useState(false);

  return (
    <div
      className={`h-screen bg-white  absolute top-0 bottom-0 left-0  shadow-lg overflow-hidden  
   }
    >
      <div className="top flex justify-between items-center  px-2">
        <h1> Aside</h1>

        <GrFormClose onClick={(setOpenedAside) => !OpenedAside} />
      </div>
    </div>
  );
};
