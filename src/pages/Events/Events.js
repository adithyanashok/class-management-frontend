import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Events.css'
const Events = () => {
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
    <div className='event-container' >
      {
        events.map((event) => (
          <div className="event-wrapper">
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