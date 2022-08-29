import axios from 'axios'
import React, { useState } from 'react'
import './Login.css'
import {useDispatch} from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [studentId, setStudentId] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    dispatch(loginStart())
    e.preventDefault()
    try{
      const res = await axios.post('http://localhost:8800/api/auth/studentlogin', {studentId, password})
      console.log(res.data)
      dispatch(loginSuccess(res.data))
      navigate("/")
    } catch (err) {
      console.log(err)
      dispatch(loginFailure())
    }
  }

  return (
    <div className='login-container' >
            <div className="login-inputs">
                <h1 className="login-text">Enter Details</h1>
                <input name='studentId' type="text" placeholder='Enter ID' onChange={(e) => setStudentId(e.target.value)} />
                <input name='password' type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin} >Login</button>
            </div>
    </div>
  )
}

export default Login