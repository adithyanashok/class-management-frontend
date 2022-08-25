import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='login-container' >
            <div className="login-inputs">
                <h1 className="login-text">Enter Details</h1>
                <input type="number" placeholder='Enter ID' />
                <input type="password" placeholder='Enter Password' />
                <button>Login</button>
            </div>
    </div>
  )
}

export default Login