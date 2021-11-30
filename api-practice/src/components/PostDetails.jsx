import React from 'react';
import {
    useParams
  } from "react-router-dom";

const PostDetails =({posts}) => {
    const {id} = useParams()
    console.log(id, posts)

    const filteredPosts = posts.filter(post => {
        return(post.id == id)

    })
    
    return (
        <div>
            {filteredPosts.map(post =>(
                <div>
                <div>Title: {post.title}</div>
                <div>comment: {post.body}</div>
                </div>
            ))}
        </div>
    );
}

export default PostDetails;