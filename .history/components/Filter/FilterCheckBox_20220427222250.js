import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const people = [
  { id: 2, title: "Online Status" },
  { id: 3, title: "Option2" },
  { id: 4, title: "Option3" },
  { id: 5, title: "Option4" },
  { id: 5, title: "Option5" },
];

export const FilterCheckBox = ({ OptionTitle }) => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <Listbox value={selectedPerson} onChange={` ${setSelectedPerson}`}>
      <div className="wrap bg-white ">
        <Listbox.Button className="mb-3  lg:mb-[2px] lg:shadow-md p-1 text-xs flex items-center w-full  justify-between   ">
          <span className="lg:text-md lg:font-bold">
            {OptionTitle || selectedPerson.title}
          </span>
          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        </Listbox.Button>

        <Listbox.Options className="px-1 bg-gray-200 relative lg:bg-slate-50  lg:shadow-md ">
          {people.map((person) => (
            /* Disabled options will be skipped by keyboard navigation. */
            <Listbox.Option
              key={person.id}
              value={person}
              className="text-xs py-1 md:text-lg lg:mb-[2px] lg:border-b-"
            >
              {({ active, selected }) => (
                <li
                  className={` py-1 px-2 ${
                    active ? "bg-blue-500 text-white " : "text-black"
                  }`}
                >
                  {selected}
                  {person.title}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};
