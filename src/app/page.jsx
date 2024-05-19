import Topbar from '@/components/Topbar/Topbar'
import Feed from '@/components/feed/Feed'
import Rightbar from '@/components/rightbar/Rightbar'
import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'




const page = () => {
  return (
<div className="flex">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
</div>
  )
}

export default page