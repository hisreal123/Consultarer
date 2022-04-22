import { React, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlineCoronavirus } from "react-icons/md";

const AsideLink = [
  {
    id: 1,
    title: " Workplace",
    icon: <BsBriefcase />,
  },

  {
    id: 2,
    title: "Hub",
    icon: <MdOutlineCoronavirus />,
  },
];

// Aside Navbar
export const Aside = ({ list }) => {
  const [OpenedAside, setOpenedAside] = useState(false);

  return (
    <div
      className={`h-screen bg-white  absolute top-0 bottom-0 left-0  shadow-lg overflow-hidden w-3/4  `}
    >
      <div className="top flex justify-between items-center  px-2">
        {Aside.map((list, index) => (
          <div key={index} > 
          <h1></h1>
          </div>
        ))}
      </div>
    </div>
  );
};
