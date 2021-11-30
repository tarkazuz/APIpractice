import React from 'react'
import {Link} from 'react-router-dom'

const PostList = ({posts}) => {

    return <div>
        {posts.map((post)=>{
            return(
                <Link to={`/posts/${posts.id}`}>
                    <button>{post.title}</button>
                </Link>
            ) 
        })}
    </div>
}

export default PostList