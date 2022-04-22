import { React, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from '@heroicons/react/solid'
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
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div>
      <h3 className={filStyle}>Filter By</h3>

      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button>{selectedPerson.name}</Listbox.Button>
        <Listbox.Options>
          {people.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
              as={Fragment}

            >
            {selected && <CheckIcon />}
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
