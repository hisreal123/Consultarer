import Image from "next/image";
import Link from "next/link";
import React from "react";

const Enquiry = [
  {
    id: 1,
    EnqImage: " ",
    proflieImage: " ",
    username: " Username",
    EnqContent:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, ad! Quas deserunt perferendis eos totam at, fugit officiis impedit reiciendis quo sequi ea vel, nesciunt, sit delectus sunt tenetur. Earum?",
  },
];
export const EnquiryCard = () => {
  return (
    <div>
      {Enquiry.map((data, i) => (
        <Link href="#" alt="EnquiryLink">
          <a>
            <div className="" key={i}>
              <div className="top">
              <Image src={ } alt='En'
              </div>
              {data.username}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};
