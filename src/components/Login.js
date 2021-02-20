import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [formState, setFormState] = useState({ username: '', password:''})
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(()=>{
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers:{
          'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
        }
      })
      .then(res=>{
        axios.get(`http://localhost:5000/api/colors`, {
          headers:{
            'authorization': ""
          }
        })
        .then(res=> {
          console.log(res);
        });
        console.log(res);
      })
  });
  const handleChange = (e) => {

    setFormState({...formState, [e.target.name]: e.target.value})
    console.log('handleChange', formState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit',formState)
  }

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        </h1>
        <form onSubmit={handleSubmit}>
    <label htmlFor='username'>Username</label>
        <input name='username' type='text' placeholder='UserName'  onChange={handleChange} value={formState.userName}/>
        <label htmlFor='password'  >Password</label>
        <input name='password' type='password' placeholder='Password' onChange={handleChange} value={formState.password}/>
        <button>Login</button>
        </form>
        </>
  );
};

export default Login;

//Task List:



//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.