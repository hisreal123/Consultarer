import { React, Fragment, useState } from "react";
import { EnquiryRequest } from "./EnquiryRequest";
import { ConsultUsers } from "./ConsultUsers";

export const ContentTab = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="Tabs">
      <div className="tabList  grid grid-cols-2 pt-20 bg-green-200 shadow-2xl ">
        <div
          className={`tabHead   ${
            index === 0 ? " border-b-4 border-b-black " : null
          }`}
          onClick={() => {
            setIndex(0);
          }}
        >
          <h1 className="">Consult Users</h1>
        </div>
        <div
          className={`tabHead ${
            index === 1 ? "  border-b-2 border-b-black" : null
          }`}
          onClick={() => {
            setIndex(1);
          }}
        >
          <h1>EnquiryRequest</h1>
        </div>
      </div>
      <div className="contentl ">
        <div className="tabContent" hidden={index != 0}>
          <ConsultUsers />
        </div>
        <div className="tabContent" hidden={index != 1}>
          <EnquiryRequest />
        </div>
      </div>
    </div>
  );
};
