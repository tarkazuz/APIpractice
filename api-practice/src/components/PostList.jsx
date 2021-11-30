import React from 'react'
import PostDetail from './PostDetails'

const PostList = ({posts}) => {

    return <li>
        {posts.map((post)=>{
            console.log({post})
            return (
            <div key = {post.id}>
                <PostDetail postTitle={post.title} postBody={post.body}/>
            </div>
            )
        })}
    </li>
}

export default PostList