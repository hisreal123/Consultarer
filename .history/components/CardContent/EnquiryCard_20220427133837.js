import { Heart } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Profile } from "../Profile";

const Enquiry = [
  {
    id: 1,
    username: " Username",
    EnqContent:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, ad! Quas deserunt perferendis eos totam at, fugit officiis impedit reiciendis quo sequi ea vel, nesciunt, sit delectus sunt tenetur. Earum?",
  },
];
export const EnquiryCard = () => {
  return (
    <div className=" bg-white shadow-lg relative ">
      {Enquiry.map((data, i) => (
        <div className="cardWrap  relative" key={i}>
          <Link href="#" alt="EnquiryLink" key={i}>
            <a>
              <div className="top w-100 relative">
                <Image
                  src="/img/BannerImage.png"
                  alt="EnquiryImage"
                  layout="responsive"
                  height="30"
                  width="30"
                  objectFit="fit"
                  className="object-cover"
                />
              </div>
            </a>
          </Link>
          <div className="btm mt-4 mb-4 px-4">
            <Link href="#" alt="">
              <a className=" flex relative items-center text-xs truncate ">
                <Profile position="relative w-7 mr-2 " appear="hidden" />
                {data.username}
              </a>
            </Link>
            <span className="text-sm text-gray-700 ">{data.EnqContent}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
