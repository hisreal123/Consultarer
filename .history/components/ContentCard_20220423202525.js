import { React, Fragment } from "react";
import { Tab } from "@headlessui/react";

export const ContentCard = () => {
    
  return (
    <div>
      <Tab.Group
        manual
        defaultIndex={1}
        onChange={(index) => {
          console.log("Changed selected tab to:", index);
        }}
      >
        <Tab.List>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={selected ? "border-b border-b-black" : ""}>
                Contact Users
              </button>
            )}
          </Tab>
          <Tab>Tab 2</Tab>
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
