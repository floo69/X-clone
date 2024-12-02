import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsFillSlashSquareFill } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import Feed from "@/components/feeds";

interface XsidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebar: XsidebarButton[] = [
  {
    title: "Home",
    icon: <IoMdHome></IoMdHome>,
  },
  {
    title: "Explore",
    icon: <IoSearch></IoSearch>,
  },
  {
    title: "Notifications",
    icon: <FaRegBell></FaRegBell>,
  },
  {
    title: "Messages",
    icon: <MdOutlineMail></MdOutlineMail>,
  },
  {
    title: "Grok",
    icon: <BsFillSlashSquareFill></BsFillSlashSquareFill>,
  },
  {
    title: "Communities",
    icon: <IoMdContacts></IoMdContacts>,
  },
  {
    title: "Premium",
    icon: <FaXTwitter></FaXTwitter>,
  },
  {
    title: "Profile",
    icon: <CgProfile></CgProfile>,
  },
  {
    title: "More",
    icon: <CgMoreO></CgMoreO>,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-32">
        <div className="col-span-3 pt-1 ml-30 ">
          <div className="text-3xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer ">
            <FaXTwitter />
          </div>
          <div className="text-2xl pr-4">
            <ul>  
              {sidebar.map((item) => (
                <li
                  className="flex justify-start items-center gap-3 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-1 pr-10 px-3">
            <button className="bg-[#1D9BF0] font-semibold text-lg py-2 px-2 rounded-full w-full">
              Post
            </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px]  border-gray-600 mr-35">
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
