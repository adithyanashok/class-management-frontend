import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Notes.css'
const Notes = () => {
  return (
    <>
    <Navbar/>
    <div className='notes-container' >
        <div className="cards">
            <div className="img">
                <img src="https://static-prod.adweek.com/wp-content/uploads/2018/06/Events.jpg" alt="" />
            </div>
            <div className="details">
                <p>Events</p>
                <button>Enter</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Notes