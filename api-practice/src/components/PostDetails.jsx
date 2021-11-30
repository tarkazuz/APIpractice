import React, {useState} from 'react'

const PostDetail = ({postTitle, postBody}) => {

    const [showDetails, setShowDetails] = useState('')
    return <div onClick={()=>{setShowDetails(showDetails ? '' : postBody)}} className='post'>
    
    <h2 className='postTitle'>{postTitle}</h2>
    <div>{showDetails}</div>
    </div>
}

export default PostDetail