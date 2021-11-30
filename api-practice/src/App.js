import React , {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import PostList from './components/PostList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PostDetails from './components/PostDetails';


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
    <Router>
        <div className="App">
        <Routes>
          <Route exact path="/" element={<PostList posts={posts}/>} />
          <Route path='/posts/:id' element={<PostDetails posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
