import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { Login, Posts, Profile, Register, Homepage, NavBar } from "./components";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true); 
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Stranger's Things!</h1>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
