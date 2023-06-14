import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { Login, Posts, Profile, Register, NavBar } from "./components";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true); 
    }
  }, []);

  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    async function fetchOurPosts() {
      try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts')

        const translatedData = await response.json();
        // console.log(translatedData)
        setAllPosts(translatedData.data.posts);
      } catch (error) {
        console.log(error)
      }
    }   
      fetchOurPosts();
  }, [])

  return (
    <div>
      <h1>Welcome to Stranger's Things!</h1>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Posts allPosts={allPosts} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register setIsLogged={setIsLoggedIn} />} />
      </Routes>
    </div>
  )
}

export default App
