import React , {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import PostList from './components/PostList';
import PostDetail from './components/PostDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostList posts={posts}/>}/>
        <Route path='/posts/:id' element={<PostDetail posts={posts}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
