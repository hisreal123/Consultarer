import { React, Fragment, useState } from "react";

export const ContentCard = () => {
  const [first, setfirst] = useState(second)
  return (
    <div className="Tabs">
      <div className="tabList">
        <div className="tabHead">Tab 1</div>
        <div className="tabHead">Tab 2</div>
        <div className="tabHead">Tab 3</div>
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
