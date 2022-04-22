import { React, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { AccountLinks } from "./AccountLinks";
import Divider from "./divider";
import { FilterList } from "./FilterList";

// Repeated Style for more than one Element
const GenDesc = "text-xs text-red-500  pl-2 py-1";

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
        <h4 className="text-xs text-red-500  pl-2 py-1 "> Account</h4>
        <AccountLinks />
        <Divider />

        <FilterList className={GenDesc} />
      </div>
    </div>
  );
};
