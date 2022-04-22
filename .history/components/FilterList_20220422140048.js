import { React, Fragment, useState } from "react";
// import { Listbox, Transition } from "@headlessui/react";

// dummy data
const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export const FilterList = ({ filStyle }) => {
  onst[(selected, setSelected)] = useState(people[0]);

  return (
    <div>
      <h3 className={filStyle}>Filter By</h3>
    </div>
  );
};
