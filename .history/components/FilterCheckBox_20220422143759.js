import { useState } from "react";
// import { Listbox } from "@headlessui/react";
// import { CheckIcon } from "@heroicons/react/solid";
const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

function MyListbox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div className="">
      <h1> Checbox</h1>
    </div>
  );
}
