import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

function MyListbox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
      <div className=""></div>
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
    <Listbox.Button>{selectedPerson.name}</Listbox.Button>
    <Listbox.Options>
      {people.map((person) => (
        /* Use the `active` state to conditionally style the active option. */
        /* Use the `selected` state to conditionally style the selected option. */
        <Listbox.Option key={person.id} value={person} as={Fragment}>
          {({ active, selected }) => (
            <li
              className={`${
                active ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }`}
            >
              {selected && <CheckIcon />}
              {person.name}
            </li>
          )}
        </Listbox.Option>
      ))}
    </Listbox.Options>
  </Listbox>
  )
}