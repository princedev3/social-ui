"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { IoEllipsisVertical } from "react-icons/io5";
import { Users } from '../dummy';

const Post = ({item}) => {

  const user = Users.filter(user=>user.id ===item.userId)
  const avatar = Users.filter(user=>user.id ===item.userId)

  const[like,setLike] = useState(item.like)
  const[isLike,setIsLike]=useState(false)

  const handleLike = ()=>{
      setLike(isLike?like+1:like-1)
      setIsLike(!isLike)
  }
 
  return (
    <div className='mt-4'>
        <div className="w-full shadow-lg rounded-lg p-3">
            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-2 my-2">
                  <div className="w-[30px] h-[30px] relative rounded-full">
                  <Image src={avatar[0].profilePicture} fill  className='object-cover rounded-full'/>
                  </div>
                  <span className="">{user[0].username} </span>
                  <span className="text-sm">{item.date} </span>
                </div>
                <div className="">
                <IoEllipsisVertical />
                </div>
            </div>
            <div className="">
              <span className="text-base">{item?.desc} </span>
              <div className="w-full h-[40vh] relative my-2">
              <Image src={item.photo} fill className='object-cover'/>
              </div>
            </div>
            <div className="flex items-center justify-between my-2">
              <div className="flex items-center gap-3">
                <Image src={"/like.png"} onClick={handleLike} width={20} height={20} className='object-cover'/>
                <Image src={"/heart.png"} width={20} height={20} className='object-cover'/>
                <span className=" font-semibold">{like} people like it</span>
              </div>
              <div className="">
                <span className="text-sm underline underline-offset-4">{item.comment} comments</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Post