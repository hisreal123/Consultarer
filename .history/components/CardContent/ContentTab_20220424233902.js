import { React, Fragment, useState } from "react";

export const ContentTab = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="Tabs grid gir">
      <div className="tabList grid grid-cols-2  ">
        <div
          className={`tabHead  ${
            index === 0 ? " border-b-2 border-b-black " : null
          }`}
          onClick={() => {
            setIndex(0);
          }}
        >
          
        </div>
        <div
          className={`tabHead ${
            index === 1 ? "  border-b-2 border-b-black" : null
          }`}
          onClick={() => {
            setIndex(1);
          }}
        >
          Enquiry/Request
        </div>
      </div>
      <div className="" hidden={index != 0}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quas?
        Repellendus eum aut praesentium a mollitia iste, in consequatur non
      </div>
      <div className="tabContent" hidden={index != 1}>
        1111Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        quas? Repellendus eum aut praesentium a mollitia iste, in consequatur
        non
      </div>
    </div>
  );
};
