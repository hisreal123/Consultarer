import { useState } from "react";
import { Listbox } from "@headlessui/react";

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
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button>{selectedPerson.name}</Listbox.Button>
      <Listbox.Options>
        {people.map((person) => (
          /* Disabled options will be skipped by keyboard navigation. */
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            <span className={person.unavailable ? "opacity-75" : ""}>
              {person.name}
            </span>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
