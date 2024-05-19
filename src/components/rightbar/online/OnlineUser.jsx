import Image from 'next/image'
import React from 'react'

const OnlineUser = ({user}) => {
  return (
    <div>
         <li className="relative flex items-center gap-3 mb-4 ">
              <div className="relative w-11 h-11 ">
                <Image src={user. profilePicture} fill className='object-cover rounded-full'/>
              </div>
              <div className='w-3 h-3 bg-green-600 border-2 border-white rounded-full absolute top-0 left-8'/>
              <h3 className="capitalize font-semibold">{user.username}</h3>
            </li>
    </div>
  )
}

export default OnlineUser