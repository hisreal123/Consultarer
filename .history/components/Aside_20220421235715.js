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
      <div className="top px-2 pt-3">
        <div className="top flex  justify-between items-center  ">
          <p className="logo"> logo</p>
          <GrFormClose />
        </div>
        {AsideLink.map((item) => (
          <div key={item.id} className='flex'>
            <h1> {item.title}</h1>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
