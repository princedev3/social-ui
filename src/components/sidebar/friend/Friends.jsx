import Image from 'next/image'
import React from 'react'

const Friends = ({user}) => {
  return (
    
         <li className="list-none flex items-center mb-5">
            <div className="w-[35px] h-[35px] rounded-full relative mr-3">
            <Image src={user.profilePicture}  fill className='object-cover rounded-full  '/>
            </div>
            <span className="capitalize">{user.username}</span>
         </li>
    
  )
}

export default Friends