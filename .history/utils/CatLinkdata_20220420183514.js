// svg-icons
import { BsBriefcase } from "react-icons/bs";
import { MdOutlineCoronavirus } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

// Json Array for CarTegory Section
export const CatLinkData = [
  {
    id: 1,
    Category: " Digital Marketing",
  },
  {
    id: 2,
    Category: " Graphic and Design",
  },
  {
    id: 3,
    Category: " Film Making",
  },
  {
    id: 4,
    Category: " Photography ",
  },
  {
    id: 5,
    Category: " Andoid Development ",
  },
  {
    id: 6,
    Category: " Copywriting ",
  },
]; // End of CatLinks

// for Link Data
export const LinkData = [
  {
    id: 1,
    title: " Workplace",
    src: <BsBriefcase />,
  },

  {
    id: 2,
    title: "Hub",
    src: <MdOutlineCoronavirus />,
  },

  {
    id: 3,
    title: " Notification",
    src: <MdOutlineNotificationsActive />,
  },

  {
    id: 4,
    title: " Message",
    src: <BsChat />,
  },

  {
    id: 5,
    title: " Favourite",
    src: <BsHeart />,
  },
];
