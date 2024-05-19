import Image from 'next/image'
import React from 'react'
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineEmojiEmotions,MdLocationPin  } from "react-icons/md";
import { IoPricetag } from "react-icons/io5";

const Shared = () => {
  return (
    <div>
        <div className="w-full shadow-lg rounded-lg p-3">
              <div className=" flex items-center">
                <div className="w-[50px] h-[50px] relative mr-4 ">
                <Image src={`/1.jpeg`} className='object-cover rounded-full' fill />
                </div>
                <input placeholder="What's in your mind" className='outline-none w-full border p-1 rounded-xl'/>
              </div>
              <hr className="my-5" />
               <div className="flex justify-between">
                <div className="flex gap-5">
                    <div className="flex items-center gap-1 mr-2">
                    <FaPhotoVideo className='fill-red-600'/>
                        <span className="text-sm cursor-pointer">Photo or Video</span>
                    </div>
                    <div className="flex items-center gap-1 mr-2">
                    <IoPricetag   className='fill-blue-600'/>
                        <span className="cursor-pointer">Tag</span>
                    </div>
                    <div className="flex items-center gap-1 mr-2">
                    <MdLocationPin  className='fill-green-600 ' />
                        <span className="cursor-pointer">Location</span>
                    </div>
                    <div className="flex items-center gap-1 mr-2">
                    <MdOutlineEmojiEmotions  className='fill-yellow-600' />
                        <span className="cursor-pointer">Feeling</span>
                    </div>
                </div>
                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-green-600 text-white rounded-lg border border-gray-200 hover:bg-gray-1000 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Share</button>
               </div>
        </div>
    </div>
  )
}

export default Shared