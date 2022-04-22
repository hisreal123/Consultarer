import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const people = [
  { id: 2, title: "Option1" },
  { id: 3, title: "Option2" },
  { id: 4, title: "Option3" },
  { id: 5, title: "Option4" },
  { id: 5, title: "Option5" },
];

export const FilterCheckBox = ({ OptionTitle }) => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <div className="wrap px-2">
        <Listbox.Button className="border p-1 text-xs flex items-center w-full  justify-between ">
          <span className="font-bold">{selectedPerson.title}</span>
          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        </Listbox.Button>

        <Listbox.Options className="px-1">
          {people.map((person) => (
            /* Disabled options will be skipped by keyboard navigation. */
            <Listbox.Option
              key={person.id}
              value={person}
              className="text-xs py-1 bg-white shadow-xl"
            >
              {({ active, selected }) => (
                <li
                  className={`${
                    active ? "bg-blue-500 text-white" : "bg-white text-black"
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
