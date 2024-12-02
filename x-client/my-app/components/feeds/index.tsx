import React from 'react';
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { HiOutlineUpload } from "react-icons/hi";

const Feed: React.FC = () => {
    return (
        <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-gray-900 cursor-pointer">
            <div className="grid grid-cols-12">
                <div className="col-span-1">
                    <Image
                        src="https://avatars.githubusercontent.com/u/139336360?v=4"
                        alt="user-image"
                        width={50}
                        height={50}
                        className='rounded-full m-0'
                    />
                </div>
                <div className="col-span-11 pl-4">
                    <h1>Floyd Carlo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae nobis nihil reprehenderit, cupiditate impedit ipsam voluptas, praesentium tenetur, nam facere dicta. Quasi et libero asperiores magnam at provident fugiat!</p>
                    <div className='flex justify-between mt-1 text-xl w-[90%]'>
                        <div>
                            <BiMessageRounded></BiMessageRounded>
                        </div>
                        <div>
                            <FaRetweet></FaRetweet>
                        </div>
                        <div>
                            <CiHeart></CiHeart>
                        </div>
                        <div>
                            <IoStatsChartOutline></IoStatsChartOutline>
                        </div>
                        <div className='flex gap-2 pr-0'>
                            <FaRegBookmark></FaRegBookmark>
                            <HiOutlineUpload></HiOutlineUpload>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;
