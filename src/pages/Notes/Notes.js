import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Notes.css'
import { useSelector } from 'react-redux'

const Notes = () => {
  const teacher = useSelector((state) => state.user.currentUser.teacher)

  return (
    <>
    <Navbar/>
    {teacher && <button className='event-button' >Add a Notes</button>}
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