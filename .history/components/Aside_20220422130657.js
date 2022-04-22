import { React, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlineCoronavirus } from "react-icons/md";
import Divider from "./divider";

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
export const Aside = ({ toggleStyle }) => {
  const [OpenedAside, setOpenedAside] = useState(false);

  return (
    <div
      className={`h-screen bg-white  absolute top-0 bottom-0 left-0  shadow-lg overflow-hidden w-3/4 -translate-x-full  
      
      ${toggleStyle}`}

      
    >
      <div className="top  ">
        <div className="top flex  justify-between items-center py-2 px-2">
          <p className="logo"> logo</p>
          <GrFormClose onClick={() => setOpenedAside(!OpenedAside)} />
        </div>
        <Divider />
        <h4 className="text-xs text-red-500  pl-5 py-1 "> Account</h4>
        {AsideLink.map((item) => (
          <div key={item.id} className="flex items-center px-2 py-2">
            <span className="mr-2 hover:text-red-400">{item.icon}</span>
            <h1> {item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
