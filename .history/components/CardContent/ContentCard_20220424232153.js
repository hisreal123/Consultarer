import { React, Fragment, useState } from "react";

export const ContentCard = () => {
  const [index, setIndex] = useState(0);
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
          className=={`tabHead ${index === 0 ? " bg-black text-white" : null}`}
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
      <div
        className=''
        hidden={index != 0}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quas?
        Repellendus eum aut praesentium a mollitia iste, in consequatur non
      </div>
      <div className="tabContent" hidden={index != 1}>
        1111Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        quas? Repellendus eum aut praesentium a mollitia iste, in consequatur
        non
      </div>
      <div className="tabContent" hidden={index != 2}>
        2222Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        quas? Repellendus eum aut praesentium a mollitia iste, in consequatur
        non
      </div>
    </div>
  );
};
