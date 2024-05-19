import React from 'react'
import { MdRssFeed , MdChatBubble,MdGroup,MdOutlineBookmark, MdOutlineWork ,MdOutlineEventNote ,MdSchool,MdQuestionMark} from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";
import Image from 'next/image';
import Friends from './friend/Friends';
import { Users } from '../dummy';

const Sidebar = () => {
  return (
    <div className='flex-[2.3] h-[calc(100vh-50px)] overflow-y-scroll scrolldesign sticky top-[50px] '>
        <div className="p-[20px] ">
       <ul className="">
        <li className="flex items-center gap-2 mb-5 list-none">
              <MdRssFeed className='text-2xl'/>
              <span className="capitalize text-lg">feed</span>
        </li>
        <li className="flex items-center gap-2 mb-5 list-none">
              < MdChatBubble className='text-2xl'/>
              <span className="capitalize text-lg">Chats</span>
        </li>
        <li className="flex items-center gap-2 mb-5 list-none">
              <IoMdVideocam className='text-2xl'/>
              <span className="capitalize text-lg">videos</span>
        </li>
        <li className="flex items-center gap-2 mb-5 list-none">
              <MdGroup  className='text-2xl'/>
              <span className="capitalize text-lg">group</span>
        </li>
        <li className="flex items-center gap-2 mb-5 list-none">
              <MdOutlineBookmark className='text-2xl'/>
              <span className="capitalize text-lg">bookmark</span>
        </li>
        <li className="flex items-center gap-2 mb-5 list-none">
              <MdQuestionMark className='text-2xl'/>
              <span className="capitalize text-lg">question</span>
        </li>
        <li className="flex items-center gap-2 mb-5 list-none">
              < MdOutlineWork className='text-2xl'/>
              <span className="capitalize text-lg">jobs</span>
        </li>
        <li className="flex items-center gap-2 mb-5 list-none">
              < MdOutlineEventNote className='text-2xl' />
              <span className="capitalize text-lg">event</span>
        </li>
        <li className="flex items-center gap-2 mb-5 list-none">
              < MdSchool className='text-2xl'/>
              <span className="capitalize text-lg">courses</span>
        </li>
       </ul>
       <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100   dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show More</button>
       <hr className="my-[20px] " />
       <ul className="">
        {
            Users.map(item=>(

                  < Friends key={item.id} user={item} />
            ))
        }
       </ul>
        </div>
    </div>
  )
}
 
export default Sidebar