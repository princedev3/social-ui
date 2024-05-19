import Image from 'next/image'
import React from 'react'
import OnlineUser from './online/OnlineUser'
import { Users } from '../dummy'

const Rightbar = ({profile}) => {
  return (
    <div className='flex-[3.5]'>
      {
        profile?
        <div className="">
          <h1 className='text-2xl font-semibold my-3 hover:underline '>User Information</h1>
          <div className="">
            <div className="mb-2">
              <span className="text-xl font-semibold">City: </span>
              <span className="ml-1 capitalize text-base text-gray-600">New York </span>
            </div>
            <div className="mb-2">
              <span className="text-xl font-semibold">From: </span>
              <span className="ml-1 capitalize text-base text-gray-600">Madrid </span>
            </div>
            <div className="mb-2">
              <span className="text-xl font-semibold">Relationship: </span>
              <span className="ml-1 capitalize text-base text-gray-600">Single </span>
            </div>
          </div>
          <h4 className="text-xl font-semibold capitalize mt-4 mb-2">User Friends</h4>
          <div className="flex flex-wrap  gap-5">

            <div className="flex flex-col">
              <div className="w-[100px] h-[20vh] relative ">
              <Image src={"/101.jpeg"} fill className='object-cover rounded-md'/>
              </div>
              <span className='text-sm capitalize'>John carter</span>
            </div>
            <div className="flex flex-col">
              <div className="w-[100px] h-[20vh] relative ">
              <Image src={"/101.jpeg"} fill className='object-cover rounded-md'/>
              </div>
              <span className='text-sm capitalize'>John carter</span>
            </div>
            <div className="flex flex-col">
              <div className="w-[100px] h-[20vh] relative ">
              <Image src={"/101.jpeg"} fill className='object-cover rounded-md'/>
              </div>
              <span className='text-sm capitalize'>John carter</span>
            </div>
            <div className="flex flex-col">
              <div className="w-[100px] h-[20vh] relative ">
              <Image src={"/101.jpeg"} fill className='object-cover rounded-md'/>
              </div>
              <span className='text-sm capitalize'>John carter</span>
            </div>
            <div className="flex flex-col">
              <div className="w-[100px] h-[20vh] relative ">
              <Image src={"/101.jpeg"} fill className='object-cover rounded-md'/>
              </div>
              <span className='text-sm capitalize'>John carter</span>
            </div>
           
          </div>
        </div>
        :
      <div className="pt-5 pr-2">
        <div className="flex items-center ">
          <Image src={"/gift.png"} width={40} height={40} className='object-cover mr-5'/>
          <span className="text-base">
            <b className="">Pola Foster</b> and <b className="">3 other friends</b> have a birthday today
          </span>
        </div>
        <div className="">
          <div className="w-full h-[30vh] relative my-4">
          <Image src={"/ad.png"} fill className='object-cover  rounded-lg' />
          </div>
          <h2 className="capitalize font-semibold my-4">online friends</h2>
          <ul className="">
            {
           Users.map(item=>(

             <OnlineUser key={item.id} user={item} />
           ))
            }
           
           
          </ul>
        </div>
      </div>
      }
    </div>
  )
}

export default Rightbar