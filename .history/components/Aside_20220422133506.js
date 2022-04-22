import { React, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { AccountLinks } from "./AccountLinks";
import Divider from "./divider";

export const Aside = ({ toggleStyle }) => {
  const [OpenedAside, setOpenedAside] = useState(false);

  return (
    <div
      className={`h-screen bg-white  absolute top-0 bottom-0 left-0  shadow-lg overflow-hidden w-3/4  transition
      ${OpenedAside ? " " : "-translate-x-full"} ${toggleStyle}
      `}
    >
      <div className="top  ">
        <div className="top flex  justify-between items-center py-2 px-2">
          <p className="logo"> logo</p>
          <GrFormClose
            className="text-3xl"
            onClick={() => setOpenedAside(!OpenedAside)}
          />
        </div>
        <Divider />
        <h4 className="text-xs text-red-500  pl-5 py-1 "> Account</h4>
        <AccountLinks />
      </div>
    </div>
  );
};
