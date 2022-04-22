import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const people = [
  { id: 1, name: "Durward Reynolds"},
  { id: 2, name: "Kenton Towne"},
  { id: 3, name: "Therese Wunsch"},
  { id: 4, name: "Benedict Kessler",
  { id: 5, name: "Katelyn Rohan"},
];

export const FilterCheckBox = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <div className="wrap px-2">
        <Listbox.Button className="border p-1 text-xs flex items-center w-full  justify-between ">
          <span className="">{selectedPerson.name}</span>
          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        </Listbox.Button>

        <Listbox.Options className="px-1">
          {people.map((person) => (
            /* Disabled options will be skipped by keyboard navigation. */
            <Listbox.Option
              key={person.id}
              value={person}
              className="text-xs py-1"
            >
              {({ active, selected }) => (
                <li
                  className={`${
                    active ? "bg-blue-500 text-white" : "bg-white text-black"
                  }`}
                >
                  {selected} {person.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};
