import React , {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import PostList from './components/PostList';


function App() {

const [posts, setPosts]=useState([])


useEffect(()=>{
   axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const post = res.data;
        setPosts(post);
      })
},[])

  return (
    <div className="App">
    <h1 className='mainTitle'>Posts</h1>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
