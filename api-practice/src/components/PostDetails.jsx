import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";

const PostDetail = ({posts}) => {
    const { id } = useParams()
    const selectedPost = (id) => {
        return posts.filter((post)=>post.id == id)
    }
    let navigate = useNavigate()

    return (
    <div>
        <h2 className='mainTitle'>Post</h2>
        <button onClick={()=>navigate('/')} className='backButton'>Back</button>
        {selectedPost(id).map((post)=>{
            return(
                <div className='post'>
                <h2 className='postTitle'>{post.title}</h2>
                <div>{post.body}</div>
        </div>
            )
        })}
    </div>
    )}

export default PostDetail