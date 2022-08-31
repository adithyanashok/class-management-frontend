import React from 'react'
import './Success.css'
import {useLocation} from 'react-router'
const Success = () => {
    const location = useLocation()
    console.log(location)
  return (
    <div className='success-page' >
        <div className="message">
            <p>Success Payment</p>
            <button>Home</button>
        </div>
    </div>
  )
}

export default Success