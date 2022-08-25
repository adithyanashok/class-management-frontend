import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Attendance.css'
const Attendance = () => {
  return (
    <>
    <Navbar/>
    <div className='attendance-container' >
        <div className="attendance">
            <input type="text" placeholder='Enter your Name' />
            <button>Submit</button>
        </div>
        <div className="attendance-list">
            <h3>Adithyan Ashok</h3>
        </div>
    </div>
    </>
  )
}

export default Attendance