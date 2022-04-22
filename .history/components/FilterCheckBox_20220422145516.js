import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

export const FilterCheckBox = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <Listbox
      value={selectedPerson}
      onChange={setSelectedPerson}
    >
      <Listbox.Button className="border p-1 text-xs flex">
        <span className="">{selectedPerson.name}</span>
        <ChevronDownIcon className="w-5 h-5 text-gray-400" />
      </Listbox.Button>
      <Listbox.Options>
        {people.map((person) => (
          /* Disabled options will be skipped by keyboard navigation. */
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
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
    </Listbox>
  );
};
