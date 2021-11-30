import React from 'react'
import {Link} from 'react-router-dom'

const PostList = ({posts}) => {

    return <div className='listContainer'>
        {posts.map((post)=>{
            return(
                <Link to={`/posts/${post.id}`}>
                    <div>{post.title}</div>
                </Link>
            ) 
        })}
    </div>
}

export default PostList