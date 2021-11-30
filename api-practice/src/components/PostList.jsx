import React from 'react'
import { Link } from 'react-router-dom';

const PostList = ({posts}) => {

    return <li>
        {posts.map((post)=>{
            return (
                <div key = {post.id}>
                <Link to={`/posts/${post.id}`}>
                <div className='post'>
                    {post.title}
                </div>
                </Link>
            </div>
            )
        })}
    </li>
}

export default PostList