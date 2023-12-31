import React from 'react'
import { Link } from 'react-router-dom'
import service from '../appwrite/conf';

function PostCard({ $id, featuredImage, title}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4 hover:opacity-70'>
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl hover:opacity-70'/>
            </div>
            <h2 className='text-lg font-bold'>
                {title}
            </h2>
        </div>
    </Link>
    
  )
}

export default PostCard