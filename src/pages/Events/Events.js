import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Events.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Events = () => {
  const teacher = useSelector((state) => state.user.currentUser.teacher)
  const [events, setEvents] = useState([])
  console.log(events)
  useEffect(() => {
    const fetchEvents = async () => {
      try{
        const res = await axios.get('http://localhost:8800/api/events/')
        setEvents(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchEvents()
  }, [])
  return (
    <>
    <Navbar/>
    {teacher && <Link to="/add-event" className='add-button' >Add a Event</Link>}
    <div className='event-container' >
      {
        events.map((event) => (
          <div key={event._id} className="event-wrapper">
            <div className="event-poster">
                <img src={event.img} alt="" />
            </div>
            <div className="event-details">
                <h1>{event.name}</h1>
                <p className='desc' >{event.desc}</p>
                <p className='fee' >${event.price}</p>
                <button>Pay</button>
            </div>
        </div>
        ))
      }
        
    </div>
    </>
  )
}

export default Events