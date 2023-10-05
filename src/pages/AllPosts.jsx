import React, {useState, useEffect} from 'react'
import service from '../appwrite/conf';
import { Container, PostCard } from '../components';

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        service.getAllPost([]).then((result)=> {
            if(result){
                setPosts(result.documents)
            }
        })
    }, []);

  return (
    <div className='py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts?.map((post)=> (
                    <div key={post.$id} className='p-2 w-1/4 '>
                        <PostCard $id={post.$id} featuredImage={post.featuredImg} title={post.title}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts