import { React, Fragment, useState } from "react";
import { EnquiryRequest } from "./EnquiryRequest";
import { ConsultUsers } from "./ConsultUsers";

export const ContentTab = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="Tabs grid grid-cols-2  relative">
      <div className="tabList grid grid-cols-2  ">
        <div
          className={`tabHead  ${
            index === 0 ? " border-b-2 border-b-black " : null
          }`}
          onClick={() => {
            setIndex(0);
          }}
        >
          Consult Users
        </div>
        <div
          className={`tabHead ${
            index === 1 ? "  border-b-2 border-b-black" : null
          }`}
          onClick={() => {
            setIndex(1);
          }}
        >
          <EnquiryRequest />
        </div>
      </div>
      <div className="" hidden={index != 0}>
      <ConsultUsers />
      </div>
      <div className="tabContent" hidden={index != 1}>
        <EnquiryRe
      </div>
    </div>
  );
};
