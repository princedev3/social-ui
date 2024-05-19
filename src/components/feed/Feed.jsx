import React from 'react'
import Shared from '../shared/Shared'
import Post from '../post/Post'
import { Posts } from '../dummy'

const Feed = () => {
  return (
    <div className='flex-[6.2]'>
      <div className="p-5">
        <Shared/>
        {
          Posts.map(item=>(

            <Post item={item} key={item.id}/>
          ))
        }
        
      </div>
    </div>
  )
}

export default Feed