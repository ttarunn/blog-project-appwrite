import React, { useEffect, useState } from 'react'
import service from '../appwrite/conf';
import { Container, PostCard } from '../components';
import { useSelector } from 'react-redux';


function Homepage() {
    const authStatus = useSelector(store => store.authSlice.status)
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        service.getAllPost().then((posts)=> {
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, []);

    if(posts.length === 0){
        return <div className='w-full py-8 mt-4 text-center'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className='p-2 w-full'>
                        <h1 className='text-2xl font-bold hover:text-gray-500 '>
                        {authStatus ? "You Didn't Post Anything Yet...!": "Login to read posts."}
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    }
  return (
    <div className='py-8 w-full'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=> (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard $id={post.$id} featuredImage={post.featuredImg} title={post.title} /> 
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Homepage