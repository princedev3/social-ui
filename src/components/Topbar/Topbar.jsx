import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdPerson , IoIosNotifications,IoIosChatboxes} from "react-icons/io";

const Topbar = () => {
  return (
    <div className='h-[50px] w-full bg-[#1877f2]  flex items-center sticky top-0 z-50 '>
        <div className="flex-[3] ">
            <Link href={"/"} className="text-white text-xl font-semibold cursor-pointer ml-5">Marvin-social</Link>
        </div>
        <div className="flex-[5]">
            <div className="w-full h-[30px]  bg-white rounded-2xl flex items-center gap-1 p-1">
                <CiSearch  className=' stroke-[2]  text-xl text-gray-600'/>
                <input type="text"  placeholder='Search for post or video' className=' outline-none w-[90%] '/>
            </div>
        </div>
        <div className="flex-[4] flex justify-around items-center text-white">
            <div className="">
                <Link href={"/"} className='mr-2 cursor-pointer capitalize tracking-wide'>Homepage</Link>
                <Link href={"/"} className='mr-2 cursor-pointer capitalize tracking-wide'>Timeline</Link>
            </div>
            <div className="flex gap-3 items-center">
                 <div className="relative">
                    <IoMdPerson className='text-2xl  '/>
                    <span className=" absolute -top-2 -right-1 bg-red-600 rounded-full w-4 h-4 flex items-center justify-center text-sm">1</span>
                 </div>
                 <div className="relative">
                    < IoIosNotifications className='text-2xl  '/>
                    <span className=" absolute -top-2 -right-1 bg-red-600 rounded-full w-4 h-4 flex items-center justify-center text-sm">1</span>
                 </div>
                 <div className="relative">
                    <IoIosChatboxes className='text-2xl  '/>
                    <span className=" absolute -top-2 -right-1 bg-red-600 rounded-full w-4 h-4 flex items-center justify-center text-sm">1</span>
                 </div>
            </div>
            <div className="w-[30px] h-[30px] relative ">

            <Image src={"/1.jpeg"} fill className='object-cover rounded-full cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Topbar