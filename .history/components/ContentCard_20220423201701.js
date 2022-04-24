import Reac{t from "react";
import { Tab } from "@headlessui/react";

export const ContentCard = () => {
  return (
    <div>
      <Tab.Group>
        <Tab.List>
          <Tab as={Fragment}>Tab 1</Tab>
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
