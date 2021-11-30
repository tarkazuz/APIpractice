import React from 'react'

const PostList = ({posts}) => {
    return <li>
        {posts.map((post)=>{
            return <ul>{post.title}</ul>
        })}
    </li>
}

export default PostList