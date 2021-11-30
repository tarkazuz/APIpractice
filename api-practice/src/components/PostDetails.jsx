import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom";

const PostDetail = ({posts}) => {
    const { id } = useParams()
    const positionInArray = id-1
    let navigate = useNavigate()

    return (
    <div>
        <h2 className='mainTitle'>Post</h2>
        <button onClick={()=>navigate('/')} className='backButton'>Back</button>
        <div className='post'>
            <h2 className='postTitle'>{posts[positionInArray].title}</h2>
            <div>{posts[positionInArray].body}</div>
        </div>
    </div>
    )}

export default PostDetail