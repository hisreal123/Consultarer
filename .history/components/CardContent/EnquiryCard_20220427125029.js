import { DatabaseIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Profile } from "../Profile";

const Enquiry = [
  {
    id: 1,
    EnqImage: " ",
    username: " Username",
    EnqContent:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, ad! Quas deserunt perferendis eos totam at, fugit officiis impedit reiciendis quo sequi ea vel, nesciunt, sit delectus sunt tenetur. Earum?",
  },
];
export const EnquiryCard = () => {
  return (
    <div className="h-[248px]">
      {Enquiry.map((data, i) => (
        <div className="cardWrap h-" key={i}>
          <Link href="#" alt="EnquiryLink" key={i}>
            <a>
              <div className="top">
                <Image
                  src="/img/BannerImage.png"
                  alt="EnquiryImage"
                  layout="responsive"
                  height="100"
                  width="100"
                />
                {data.username}
              </div>
            </a>
          </Link>
          <div className="btm">
          <Profile />

          </div>
        </div>
      ))}
    </div>
  );
};
