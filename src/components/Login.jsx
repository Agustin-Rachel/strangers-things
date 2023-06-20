import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  function reload(){
    window.location.reload(true);
   }
  
   async function registerUser() {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });
      const data = await response.json();
      console.log(data);
      if (!data.success) {
        console.log("username or password are incorrect");
      } else {
        localStorage.setItem("token", data.data.token);
        navigate("/");
        reload()
      }
    } catch (error) {
      console.log("Login register ", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit fired");
    registerUser();
  };

  return (
    <>
      <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <br />
      <div>
        <button><Link to="/register">Register</Link></button>
      </div>
    </>
  );
}