import React from 'react'
import './login.css';

function Login() {
  return (
    <>
    <div className='details'>
      <div className="loginname">
        <h1>Sign In</h1>
        <input type="text" placeholder='Enter Email id' ></input>
        <input type="password" placeholder='Enter Password'></input>
        <button>Login</button> 
      </div>
    </div>    
    </>
  )
}

export default Login