import { HeartIcon } from "@heroicons/react/outline";
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

  ,
  {
    id: 2,
    username: " Username",
    EnqContent:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, ad! Quas deserunt perferendis eos totam at, fugit officiis impedit reiciendis quo sequi ea vel, nesciunt, sit delectus sunt tenetur. Earum?",
  },
  {
    id: 3,
    username: " Username",
    EnqContent:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, ad! Quas deserunt perferendis eos totam at, fugit officiis impedit reiciendis quo sequi ea vel, nesciunt, sit delectus sunt tenetur. Earum?",
  },
  {
    id: 4,
    username: " Username",
    EnqContent:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, ad! Quas deserunt perferendis eos totam at, fugit officiis impedit reiciendis quo sequi ea vel, nesciunt, sit delectus sunt tenetur. Earum?",
  },

  ,
  {
    id: 5,
    username: " Username",
    EnqContent:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, ad! Quas deserunt perferendis eos totam at, fugit officiis impedit reiciendis quo sequi ea vel, nesciunt, sit delectus sunt tenetur. Earum?",
  },
  {
    id: 6,
    username: " Username",
    EnqContent:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, ad! Quas deserunt perferendis eos totam at, fugit officiis impedit reiciendis quo sequi ea vel, nesciunt, sit delectus sunt tenetur. Earum?",
  },
  
];
export const EnquiryCard = ({enqStyle}) => {
  return (
    <div className={`wrapper relative ${enqStyle}`}>
      <div className="  relative grid  grid-cols-1 md:grid-cols-4 gap-3   ">
        {Enquiry.map((data, i) => (
          <div className="cardWrap  relative bg-white  hover:scale-105 transition  shadow-lg" key={i}>
            <Link href="#" alt="EnquiryLink">
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

                  <div className={`heart absolute w-7 top-2 right-2  `}>
                    <HeartIcon className="text-white relative hover:text-red-500  hover:scale-105 transition " />
                  </div>
                </div>
              </a>
            </Link>
            <div className="btm mt-4 mb-4 px-4">
              <Link href="#" alt="">
                <a className=" flex relative items-center text-xs truncate ">
                  <Profile
                    position="relative w-7 mr-2 lg:grid"
                    appear="hidden"
                  />
                  {data.username}
                </a>
              </Link>
              <span className="text-sm text-gray-700 lg:truncate">{data.EnqContent}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
