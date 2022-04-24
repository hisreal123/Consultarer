import { React, Fragment, useState } from "react";
import { Tab } from "@headlessui/react";

export const ContentCard = () => {
  return (
    <div>
        <Tabs className="Tabs">
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </TabList>
          <TabPanel>
            <p>Tab 1 works!</p>
          </TabPanel>
          <TabPanel>
            <p>Tab 2 works!</p>
          </TabPanel>
          <TabPanel>
            <p>Tab 3 works!</p>
          </TabPanel>
        </Tabs>
    </div>
  );
};
