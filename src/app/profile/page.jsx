import Feed from '@/components/feed/Feed'
import Rightbar from '@/components/rightbar/Rightbar'
import Sidebar from '@/components/sidebar/Sidebar'
import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <div>
  <div className="flex">
    <Sidebar/>

<div className="flex-[9.7]">

<div className="w-full p-1 ">
   <div className="">
<div className="relative">
    <div className="w-full h-[40vh] relative ">
    <Image src={"/11.jpeg"} fill className='object-cover'/>
    </div>
    <div className="absolute left-1/2 -translate-x-[50%] -bottom-10   ">
    <div className="relative w-28 h-28 ">
    <Image src={"/22.jpeg"} fill className='object-cover rounded-full border-2 border-white '/> 
    </div>
    </div>
   
</div>
<div className="flex flex-col items-center justify-center mt-10">
    <h4 className="capitalize text-2xl font-semibold">prince</h4>
    <span className="font-normal text-base">hello</span>
</div>
</div> 
</div>

<div className="flex">
    <Feed/> 
    <Rightbar profile/>
</div>
    </div>

</div>
    </div>
  )
}

export default Profile


