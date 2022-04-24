import { React, Fragment, useState} from "react";
import { Tab } from "@headlessui/react";

export const ContentCard = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={selected ? "border-b border-b-black" : ""}>
                Contact Users
              </button>
            )}
          </Tab>
          <Tab {({ selected }) => (
            <button className={selected ? "border-b border-b-black" : ""}>
              Contact Users
            </button>
          )}>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
