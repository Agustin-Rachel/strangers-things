import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { Login, Posts, Profile, Register, NavBar, SinglePost } from "./components";
import { fetchPosts } from './api-adapters';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true); 
    }

    const fetchAllPosts = async () => {
      try {
        const results = await fetchPosts();
        setAllPosts(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <div>
      <h1>Welcome to Stranger's Things!</h1>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path='/' element={<Posts allPosts={allPosts} setAllPosts={setAllPosts} />} />
        <Route path='/posts/:id' element={<SinglePost allPosts={allPosts} setAllPosts={setAllPosts} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register setIsLogged={setIsLoggedIn} />} />
      </Routes>
    </div>
  )
}

export default App
