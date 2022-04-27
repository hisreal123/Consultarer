import { React, Fragment, useState } from "react";

export const ContentCard = () => {
  const [Index, setIndex] = useState(0);
  return (
    <div className="Tabs">
      <div className="tabList">
        <div
          className="tabHead"
          onClick={() => {
            setIndex(0);
          }}
        >
          Tab 1
        </div>
        <div
          className="tabHead"
          onClick={() => {
            setIndex(1);
          }}
        >
          Tab 2
        </div>
        <div
          className="tabHead"
          onClick={() => {
            setIndex(2);
          }}
        >
          Tab 3
        </div>
      </div>
      <div className="tabContent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quas?
        Repellendus eum aut praesentium a mollitia iste, in consequatur non
      </div>
      <div className="tabContent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quas?
        Repellendus eum aut praesentium a mollitia iste, in consequatur non
      </div>
      <div className="tabContent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quas?
        Repellendus eum aut praesentium a mollitia iste, in consequatur non
      </div>
    </div>
  );
};
